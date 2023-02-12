/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router';
import CountryTopPanel from './CountryTopPanel';
import CountryDescription from './CountryDescription';

const CountryDetails = (): JSX.Element => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState<any>({});

  useEffect(() => {
    (async () => {
      await fetchCountry();
    })();
  }, [name]);

  const fetchCountry = useCallback(async () => {
    try {
      await axios.get(` https://restcountries.com/v3.1/name/${name}`).then((response) => {
        console.log(response.data);
        const data = response.data[0];
        const country = {
          region: data.region,
          subRegion: data.subregion,
          lat: data.latlng[0],
          lon: data.latlng[1],
          independent: data.independent,
          population: data.population,
          flag: data.flags.png,
          capital: data.capital[0]
        };
        setCountryData(country);
      });
    } catch (e) {
      console.error('Error while fetching countries', e);
    }
  }, []);

  return (
    <>
      <CountryTopPanel country={name ?? ''} capital={countryData.capital} />
      <CountryDescription
        region={countryData?.region}
        subRegion={countryData?.subRegion}
        lat={countryData?.lat}
        lon={countryData.lon}
        population={countryData.population}
        independent={countryData.independent}
        flag={countryData.flag}
      />
    </>
  );
};

export default CountryDetails;
