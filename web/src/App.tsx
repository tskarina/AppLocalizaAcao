import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import NewPage from './pages/New';
import Detail from './pages/Detail';
import Register from './pages/Register';
import Final from './pages/Final';
import Login from './pages/Login';
import SearchResults from './pages/SearchResults';
import { SearchProvider } from './contexts/SearchContext';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const theme = {
    primary: '#1089A4',
    secondary: '#21AB9B',
    text: '#000',
    white: '#ffffff',
    gradient: `${'#969696'}, ${'#e6e6e6'}, ${'rgb(238, 238, 238)'}`,

    background: '#F2F2F2',
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SearchProvider>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/final" element={<Final />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search-results" element={<SearchResults />} />
          </Routes>
        </SearchProvider>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
