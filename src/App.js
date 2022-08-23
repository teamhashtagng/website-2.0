import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRoute from './utils/AppRoute';

const App = () => {


  const theme = createTheme({
    typography: {
      fontFamily: [
        'Red Hat Display',
        'sans-serif',
      ].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;