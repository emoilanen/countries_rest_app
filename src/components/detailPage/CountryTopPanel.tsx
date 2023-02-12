/* eslint-disable @typescript-eslint/member-delimiter-style */
export interface CountryTopPanelProps {
  country: string;
  capital: string;
}

const CountryTopPanel = ({ capital, country }: CountryTopPanelProps): JSX.Element => {
  return (
    <>
      {country.slice(0, 1)}
      <p>{country}</p>
      <p>{capital}</p>
    </>
  );
};

export default CountryTopPanel;
