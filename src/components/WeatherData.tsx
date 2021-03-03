import React, { useMemo } from 'react';
import { useWeatherDataQuery } from '../generated/graphql';

type Props = {
  city: string;
};

const getCelsiusFromKelvin = (value: any) => {
  const result = Math.round(value - 273.15);

  return result;
};

const WeatherData: React.FC<Props> = ({ city }) => {
  const { data, loading, error } = useWeatherDataQuery({
    variables: { name: city },
  });

  const kelvin = useMemo(() => data?.getCityByName?.weather?.temperature?.actual, [data]);
  const celsius = useMemo(() => getCelsiusFromKelvin(kelvin), [kelvin]);

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
  const { description } = data.getCityByName.weather.summary;

  return (
    <div className='WeatherData'>
      <h2>{`${name}: ${country}`}</h2>

      <h3>
        <span>temperature: </span>
        {`${celsius}`}&deg;
      </h3>

      <h3>
        <span>description: </span>
        {`${description}`}
      </h3>
    </div>
  );
};

export default WeatherData;
