import CountryList from './CountryList';
import TopPanel from './TopPanel';
import { CountryContext } from '../../countryContext';
import { useState } from 'react';

const Home = (): JSX.Element => {
  const [searchedCountry, setSearchedCountry] = useState('');
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  return (
    <>
      <CountryContext.Provider
        value={{ searchedCountry, setSearchedCountry, page, setPage, rowsPerPage, setRowsPerPage }}
      >
        <TopPanel />
        <CountryList />
      </CountryContext.Provider>
    </>
  );
};

export default Home;
