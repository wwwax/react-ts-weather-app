import React, { useState } from 'react';
import SearchCityForm from './components/SearchCityForm';
import WeatherData from './components/WeatherData';

const App = () => {
  const [city, setCity] = useState<string>('Uzhhorod');

  const changeCityToSearch = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <div className='App'>
      <h1>Weather App</h1>

      <h4 className='date'>
        {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
        })}
      </h4>

      <hr />
      <SearchCityForm changeCityToSearch={changeCityToSearch} />
      <WeatherData city={city} />
    </div>
  );
};

export default App;
