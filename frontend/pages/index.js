import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('http://localhost:3001/countries/')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Erro ao buscar países:', error));
      setLoading(false);
  }, []);

  if (loading) return <div>Loading available countries list...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Country List</h1>
      <ul className={styles.list}>
        {countries.map((country) => (
          <li key={country.countryCode}>
            <Link href={`/country/${country.countryCode}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
