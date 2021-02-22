import React from 'react';
import { useWeatherDataQuery } from '../generated/graphql';

type Props = {
  city: string;
};

const WeatherData: React.FC<Props> = ({ city }) => {
  const { data, loading } = useWeatherDataQuery({
    variables: { name: city },
  });

  if (loading) {
    return <h1>Loading data...</h1>;
  }

  if (!data?.getCityByName) return <h1>Сity not found!</h1>;

  return (
    <div className='WeatherData'>
      <h2>
        {data.getCityByName.name}, {data.getCityByName.country}
      </h2>

      <h3>{data.getCityByName.weather?.summary?.description}</h3>

      <h3>
        Temperature:{' '}
        {Math.round(Number(data.getCityByName.weather?.temperature?.actual) - 273.15)}
        &deg;
      </h3>
    </div>
  );
};

export default WeatherData;
