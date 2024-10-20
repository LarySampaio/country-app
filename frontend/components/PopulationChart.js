import React from 'react';
import { Line } from 'react-chartjs-2';
import{ Chart, registerables} from 'chart.js';
Chart.register(...registerables);

const PopulationChart = ({ populationCounts }) => {
  if (!populationCounts || populationCounts.length === 0) {
    return <div>Population data not available for this country.</div>;
  }

  const years = populationCounts.map(data => data.year);
  const population = populationCounts.map(data => data.value);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Population',
        data: population,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="chartContainer">
      <h2>Population through the years</h2>
      <Line data={data} options={{
      responsive: true,
      }} />
    </div>
   
  );
};

export default PopulationChart;
