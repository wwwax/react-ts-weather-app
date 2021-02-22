import React, { useState } from 'react';

type Props = {
  changeCityToSearch: (city: string) => void;
};

const SearchCityForm: React.FC<Props> = ({ changeCityToSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const onSearchButtonClick = () => {
    changeCityToSearch(inputValue);
    setInputValue('');
  };

  return (
    <div className='SearchCityForm'>
      <input
        type='text'
        placeholder='City name...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onSearchButtonClick}>Search</button>
    </div>
  );
};

export default SearchCityForm;
