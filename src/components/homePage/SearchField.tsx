import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { SearchContext } from '../../searchContext';
import { type ChangeEvent, useContext, useCallback } from 'react';

const StyledTextField = styled(Input)`
  background-color: #fff;
  opacity: 0.2;
  border-radius: 3px;
`;

const SearchField = (): JSX.Element => {
  const { setSearchedCountry } = useContext(SearchContext);

  const handleSearchCountry = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setSearchedCountry(e.target.value);
    },
    [setSearchedCountry]
  );

  return (
    <>
      <StyledTextField
        onChange={(e) => {
          handleSearchCountry(e);
        }}
        id="outlined-search"
        type="search"
        multiline={false}
        size="small"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      ></StyledTextField>
    </>
  );
};

export default SearchField;
