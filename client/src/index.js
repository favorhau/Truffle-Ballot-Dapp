import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';
import HeadBar from './HeadBar'
import Home from './Home';
import Ballot from './Ballot'
import theme from './theme';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © Jinghao Dai '}
      {new Date().getFullYear()}
      {'.'}
      <Link color="inherit" href="https://github.com/favorhau/Truffle-Ballot-Dapp">
        Source Code
      </Link>{' '}
    </Typography>
  );
};

const HomePage = ()=>{
  return ( 
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <HeadBar />
    <Home />
    <Copyright />
  </ThemeProvider>
  )
}
const Bollot = ()=>{
  return (
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <HeadBar />
    <Ballot />
    <Copyright />
  </ThemeProvider>
  )
}
ReactDOM.render(
  <BrowserRouter>  
    <Route path="/" exact component={HomePage} />
    <Route path="/ballot" exact component={Bollot} />
  </BrowserRouter>
 ,document.querySelector('#root'),
);
