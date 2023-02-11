import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/homePage/Home';
import CountryDetails from './components/detailPage/CountryDetails';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path=":name" element={<CountryDetails />} />

      {/** <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
};

export default App;
