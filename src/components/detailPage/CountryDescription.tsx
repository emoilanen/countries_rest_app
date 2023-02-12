/* eslint-disable @typescript-eslint/member-delimiter-style */
import styled from '@emotion/styled';

const Highlight = styled.span`
  font-weight: bold;
  color: #384ea5;
`;

export interface CountryDescriptionProps {
  region: string;
  subRegion: string;
  lat: number;
  lon: number;
  population: number;
  independent: boolean;
  flag: string;
}

const CountryDescription = ({
  region,
  subRegion,
  lat,
  lon,
  population,
  independent = false,
  flag
}: CountryDescriptionProps): JSX.Element => {
  return (
    <>
      <img src={flag} alt="flag" width="100%" />
      <p>
        The country belongs to <Highlight>{region}</Highlight> region and <Highlight>{subRegion}</Highlight> sub-region.
        Located at the <Highlight>{lat}</Highlight> °N and <Highlight>{lon}</Highlight> °W, this country has population
        of <Highlight>{population}</Highlight>
        {independent ? ' and it has gained the indipendent, according to the CIA Worldbook' : '.'}.
      </p>
    </>
  );
};

export default CountryDescription;
