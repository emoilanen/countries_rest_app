/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { TableRow, TableCell } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { type CountryData } from './CountryList';
import styled from '@emotion/styled';
import { useContext } from 'react';
import { CountryContext } from '../../countryContext';

const StyledTableCell = styled(TableCell)`
  font-size: 4em;
  padding-top: 0px;
  padding-bottom: 0px;
`;

export interface DataTableProps {
  data: CountryData[];
}

const DataTable = ({ data }: DataTableProps): JSX.Element => {
  const { page, rowsPerPage } = useContext(CountryContext);

  return (
    <>
      {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row): any => (
        <TableRow key={row?.name?.common} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <StyledTableCell>{row?.flag}</StyledTableCell>
          <TableCell align="left">{row?.name?.common}</TableCell>
          <TableCell align="left">{row?.region}</TableCell>
          <TableCell align="left">{row?.population}</TableCell>
          <TableCell align="left">
            <ul>
              {row?.languages &&
                Object.entries(row?.languages).map(([key]) => {
                  return <li key={key}>{row?.languages[key]}</li>;
                })}
            </ul>
          </TableCell>
          <TableCell align="center">
            <Link to={`/${row.name.common}`} relative="path">
              <ArrowForwardIosIcon />
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default DataTable;
