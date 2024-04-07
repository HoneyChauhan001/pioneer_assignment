
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';

function PopulationData() {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        setPopulationData(response.data.data.sort((a, b) => a.Year - b.Year));
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>United States Year-Wise Population Data</h1>
      {populationData && (
        <>
          <LineChart data={populationData} />
          <BarChart data={populationData} />
        </>
      )}
    </div>
  );
}

export default PopulationData
