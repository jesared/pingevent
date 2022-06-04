import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme,ThemeProvider } from '@mui/material';

import './index.css';
import App from './App';


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
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>

);

