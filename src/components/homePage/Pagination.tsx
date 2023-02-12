/* eslint-disable @typescript-eslint/member-delimiter-style */
import { TableFooter, TableRow, TablePagination } from '@mui/material';
import TablePaginationActions from './TablePaginationActions';
import { useContext, useCallback, type ChangeEvent } from 'react';
import { CountryContext } from '../../countryContext';

export interface PaginationProps {
  rows: any[];
}

const Pagination = ({ rows }: PaginationProps): JSX.Element => {
  const { setPage, setRowsPerPage, page, rowsPerPage } = useContext(CountryContext);

  const handleChangePage = useCallback((event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }, []);

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
          colSpan={6}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page'
            },
            native: true
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableRow>
    </TableFooter>
  );
};

export default Pagination;
