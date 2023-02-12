import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { CountryContext } from '../../countryContext';
import { type ChangeEvent, useContext, useCallback } from 'react';

const StyledInput = styled(Input)`
  background-color: #fff;
  opacity: 0.2;
  border-radius: 3px;
`;

const SearchField = (): JSX.Element => {
  const { setSearchedCountry, setPage, searchedCountry } = useContext(CountryContext);

  const handleSearchCountry = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      if (searchedCountry.length === 0) {
        setPage(0);
      }
      setSearchedCountry(e.target.value);
    },
    [setSearchedCountry]
  );

  return (
    <>
      <StyledInput
        onChange={(e) => {
          handleSearchCountry(e);
        }}
        id="outlined-search"
        type="search"
        placeholder="Search by country name"
        multiline={false}
        size="small"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      ></StyledInput>
    </>
  );
};

export default SearchField;
