/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-floating-promises */
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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

const rows = [
  {
    flag: 'https://lipunkuva.jpg',
    name: {
      common: 'Finland',
      official: 'Finland'
    },
    region: 'Europe',
    population: 55556464,
    languages: {
      fi: 'Finnish',
      swe: 'Swedish'
    }
  }
];

export interface CountryData {
  flag?: string;
  name?: {
    common: string;
    official: string;
  };
  region?: string;
  population?: number;
  languages?: string[];
}

const CountryList = (): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [countryData, setCountryData] = useState<CountryData[]>([]);

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

  const handleChangePage = useCallback((event: any, newPage: number): void => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Regions</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Languages</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countryData.length > 0 &&
              countryData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row?.name?.common} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row?.flag}
                  </TableCell>
                  <TableCell align="right">{row?.name?.common}</TableCell>
                  <TableCell align="right">{row?.region}</TableCell>
                  <TableCell align="right">{row?.population}</TableCell>
                  {/**     <TableCell align="right">{row?.languages?.fi}</TableCell> */}
                  <TableCell align="right">
                    <IconButton>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <Pagination
            page={page}
            rows={rows}
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
