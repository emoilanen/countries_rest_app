import { Route, Routes } from 'react-router-dom';
import './styles.css';
import Home from './components/homePage/Home';
import CountryDetails from './components/detailPage/CountryDetails';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path=":name" element={<CountryDetails />} />
    </Routes>
  );
};

export default App;
