/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { TableRow, TableCell } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { type CountryData } from './CountryList';
import styled from '@emotion/styled';

const StyledTableCell = styled(TableCell)`
  font-size: 4em;
`;

export interface DataTableProps {
  data: CountryData[];
  page: number;
  rowsPerPage: number;
}

const DataTable = ({ data, page, rowsPerPage }: DataTableProps): JSX.Element => {
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
              {Object.entries(row.languages).map(([key]) => {
                return <li key={key}>{row.languages[key]}</li>;
              })}
            </ul>
          </TableCell>
          <TableCell align="left">
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
