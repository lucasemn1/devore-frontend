import Content from 'pages/Content';
import Signin from 'pages/Signin';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Signin} />
        <Route path="/" exact component={Content} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
