import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Header from './Header';
import { Outlet } from 'react-router-dom';

//whole layout of the page

//creates theme using material ui
// mode to change from light and dark 
const theme = createTheme({
    palette: {
        mode: "light",
    },
});

//added theme to the page using theme provider
// css adds basic css boilerplate 
export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <Header />
     <main>
        <Outlet />
     </main>
     <footer></footer>
    </ThemeProvider>
  )
}
