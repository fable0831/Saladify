import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyled';
import HelmetForm from './HelmetForm';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <HelmetForm />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
