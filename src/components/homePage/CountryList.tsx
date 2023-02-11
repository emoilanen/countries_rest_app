import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ChangeEvent, useState } from 'react';
import Pagination from './Pagination';



const rows = [ {
	flag: 'https://lipunkuva.jpg',
	name: {
		common: 'Finland',
		official: 'Finland',
	},
	region: 'Europe',
	population: 55556464,
	languages: {
		fi: 'Finnish',
		swe: 'Swedish'
	}
}
];
const CountryList = () => {

	 const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

		const handleChangePage = (event: any, newPage: number): void => {
		 setPage(newPage);
	}

	function handleChangeRowsPerPage(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
		 setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
	}


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
						{ rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => (
            <TableRow
              key={row.name.common}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.flag}
              </TableCell>
              	<TableCell align="right">{row.name.common}</TableCell>
              	<TableCell align="right">{row.region}</TableCell>
              	<TableCell align="right">{row.population}</TableCell>
								<TableCell align="right">{ row.languages.fi }</TableCell>
								<TableCell align="right">ArrowButton</TableCell>
            </TableRow>
          ))}
					</TableBody>
					<Pagination
						page={ page }
						rows={ rows }
						handleChangePage={ handleChangePage }
						handleChangeRowsPerPage={ handleChangeRowsPerPage }
						rowsPerPage={rowsPerPage}/>
			</Table>
		</TableContainer>


	</>
  );
};

export default CountryList;