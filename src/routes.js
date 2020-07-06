import Content from 'pages/Content';
import Signin from 'pages/Signin';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const Routes = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#6FBF8B',
        contrastText: '#141414'
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/login" exact component={Signin} />
    //     <Route path="/" exact component={Content} />
    //   </Switch>
    // </BrowserRouter>
  );
};

export default Routes;
