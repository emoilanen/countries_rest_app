/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { CountryContext } from '../../countryContext';
import DataTable from './DataTable';
import Pagination from './Pagination';
import styled from '@emotion/styled';

const StyledTable = styled(Table)`
  table-layout: fixed;
  width: 100%;
  min-width: 650px;
`;
export interface CountryData {
  flag?: string;
  name: {
    common: string;
    official: string;
  };
  region?: string;
  population?: number;
  languages?: any;
}

const CountryList = (): JSX.Element => {
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [filteredCountryData, setFilteredCountryData] = useState<CountryData[]>([]);

  const { searchedCountry } = React.useContext(CountryContext);

  useEffect(() => {
    if (countryData.length > 0) {
      const data = countryData.filter((country) =>
        country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())
      );
      setFilteredCountryData(data);
    }
  }, [searchedCountry]);

  useEffect(() => {
    (async () => {
      await fetchCountries();
    })();
  }, []);

  const fetchCountries = useCallback(async () => {
    try {
      await axios.get('https://restcountries.com/v3.1/all').then((response) => {
        console.log(response.data);
        setCountryData(response.data);
      });
    } catch (e) {
      console.error('Error while fetching countries', e);
    }
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <StyledTable aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Regions</TableCell>
              <TableCell align="left">Population</TableCell>
              <TableCell align="left">Languages</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countryData.length > 0 && filteredCountryData.length === 0 && <DataTable data={countryData} />}
            {filteredCountryData.length > 0 && <DataTable data={filteredCountryData} />}
          </TableBody>
          {countryData.length > 0 && filteredCountryData.length === 0 && <Pagination rows={countryData} />}
          {filteredCountryData.length > 0 && <Pagination rows={filteredCountryData} />}
        </StyledTable>
      </TableContainer>
    </>
  );
};

export default CountryList;
