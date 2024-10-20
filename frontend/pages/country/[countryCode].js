import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../../styles/CountryInfo.module.css';
import PopulationChart from '../../components/PopulationChart';
import Link from 'next/link';


const CountryDetails = () => {
  const router = useRouter();
  const { countryCode } = router.query;
  const [countryData, setCountryData] = useState(null);
  const [countryPopulation, setCountryPopulation] = useState(null);

  useEffect(() => {
    if (countryCode) {
      const fetchCountryData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/countries/${countryCode}`);
          setCountryData(response.data);
          setCountryPopulation(response.data.population);
          console.log('**************** Dados de População:', response.data.population);
        } catch (error) {
          console.error('Erro ao buscar dados do país:', error);
        }
      };
      

      fetchCountryData();
    }
  }, [countryCode]);

  if (!countryData) return <div>Loading country data...</div>;

  return (
    <div className={styles.countryInfo}>
      <h1 className={styles.countryInfo__title}>{countryData.commonName} ({countryData.countryCode})</h1>
      <h2 className={styles.countryInfo__subtitle}>{countryData.officialName}</h2>
      <img src={countryData.flagUrl} alt={`Bandeira de ${countryData.commonName}`} className={styles.flag} />
      <p>Region: {countryData.region}</p>
      <h3>Borders:</h3>
      <ul className={styles.bordersList}>
        {countryData.borders && countryData.borders.map((border) => (
          <li key={border.countryCode}>
            <Link href={`/country/${border.countryCode}`}>
            {border.commonName} ({border.countryCode})
            </Link>
          </li>
        ))}
      </ul>
     
      <PopulationChart populationCounts={countryPopulation} />
    </div>
  );
};

export default CountryDetails;
