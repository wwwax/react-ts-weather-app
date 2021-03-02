import React from 'react';
import { useWeatherDataQuery } from '../generated/graphql';

type Props = {
  city: string;
};

// const convertToCelsius = (value: any) => {
//   return value - 273.15;
// };

const WeatherData: React.FC<Props> = ({ city }) => {
  const { data, loading, error } = useWeatherDataQuery({
    variables: { name: city },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{`error: ${error?.message}`}</h1>;
  }

  if (!data) {
    return <h1>Something went wrong.</h1>;
  }

  if (!data.getCityByName) {
    return <h1>City not found.</h1>;
  }

  if (!data.getCityByName.weather) {
    return <h1>Can't get temperature data.</h1>;
  }

  if (!data.getCityByName.weather.temperature) {
    return <h1>Can't get temperature data.</h1>;
  }

  if (!data.getCityByName.weather.temperature.actual) {
    return <h1>Can't get actual temperature data.</h1>;
  }

  if (!data.getCityByName.weather.summary) {
    return <h1>Can't get summary data.</h1>;
  }

  const { name, country } = data.getCityByName;
  const { actual } = data.getCityByName.weather.temperature;
  const { description } = data.getCityByName.weather.summary;

  // const celsius = useMemo(() => convertToCelsius(actual), [actual]);

  return (
    <div className='WeatherData'>
      <h2>{`${name}: ${country}`}</h2>

      <h3>
        <span>temperature: </span>
        {`${actual}`}&deg;
      </h3>

      <h3>
        <span>description: </span>
        {`${description}`}
      </h3>
    </div>
  );
};

export default WeatherData;
