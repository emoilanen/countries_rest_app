import CountryList from './CountryList';
import TopPanel from './TopPanel';
import { SearchContext } from '../../searchContext';
import { useState } from 'react';

const Home = (): JSX.Element => {
  const [searchedCountry, setSearchedCountry] = useState('');

  return (
    <>
      <SearchContext.Provider value={{ searchedCountry, setSearchedCountry }}>
        <TopPanel />
        <CountryList />
      </SearchContext.Provider>
    </>
  );
};

export default Home;
