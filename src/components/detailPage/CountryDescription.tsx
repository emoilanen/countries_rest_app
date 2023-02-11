/* eslint-disable @typescript-eslint/member-delimiter-style */
export interface CountryDescriptionProps {
  region: string;
  subRegion: string;
  lat: number;
  lon: number;
  population: number;
  independent: boolean;
}

const CountryDescription = ({
  region,
  subRegion,
  lat,
  lon,
  population,
  independent = false
}: CountryDescriptionProps): JSX.Element => {
  return (
    <>
      <p>
        The country belongs to {region} region and {subRegion} sub-region. Located at the {lat} °N and {lon} °W, this
        country has population of {population}
        {independent ? ' and it has gained the indipendent, according to the CIA Worldbook' : '.'}.
      </p>
    </>
  );
};

export default CountryDescription;
