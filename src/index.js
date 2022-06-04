import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const theme = createTheme({

  palette: {
    type: 'dark',
    primary: {
      main: '#011936',
    },
    secondary: {
      main: '#00acc1',
    },
  },
  typography: {
    fontFamily: 'Raleway',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>


  </React.StrictMode>

);

