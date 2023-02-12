import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useCallback } from 'react';

/* eslint-disable @typescript-eslint/member-delimiter-style */
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

const TablePaginationActions = ({
  count,
  page,
  rowsPerPage,
  onPageChange
}: TablePaginationActionsProps): JSX.Element => {
  const handleBackButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      onPageChange(event, page - 1);
    },
    [onPageChange, page]
  );

  const handleNextButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      onPageChange(event, page + 1);
    },
    [onPageChange, page]
  );

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1 || count === page * rowsPerPage}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};

export default TablePaginationActions;
