import { TableFooter, TableRow, TablePagination } from "@mui/material";

export interface PaginationProps {
	rows: any[];
	handleChangeRowsPerPage: any;
	handleChangePage: any;
	page: number;
	rowsPerPage: number;
}

const Pagination = ({
	page,
	rows,
	handleChangeRowsPerPage,
	handleChangePage,
	rowsPerPage
}: PaginationProps) => {

	return <TableFooter>
					<TableRow>
            <TablePagination
             rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
};

export default Pagination;