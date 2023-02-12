/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { type ChangeEvent, useState, useEffect, useCallback } from 'react';
import Pagination from './Pagination';
import axios from 'axios';
import { SearchContext } from '../../searchContext';
import DataTable from './DataTable';

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
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [filteredCountryData, setFilteredCountryData] = useState<CountryData[]>([]);

  const { searchedCountry } = React.useContext(SearchContext);

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

  const handleChangePage = useCallback((newPage: number): void => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
            {countryData.length > 0 && filteredCountryData.length === 0 ? (
              <DataTable data={countryData} page={page} rowsPerPage={rowsPerPage} />
            ) : (
              <DataTable data={filteredCountryData} page={page} rowsPerPage={rowsPerPage} />
            )}
          </TableBody>
          <Pagination
            page={page}
            rows={filteredCountryData.length > 0 ? filteredCountryData : countryData}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
    </>
  );
};

export default CountryList;
