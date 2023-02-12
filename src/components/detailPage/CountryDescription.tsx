/* eslint-disable @typescript-eslint/member-delimiter-style */
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
      <img src={flag} alt="flag" />
      <p>
        The country belongs to {region} region and {subRegion} sub-region. Located at the {lat} °N and {lon} °W, this
        country has population of {population}
        {independent ? ' and it has gained the indipendent, according to the CIA Worldbook' : '.'}.
      </p>
    </>
  );
};

export default CountryDescription;
