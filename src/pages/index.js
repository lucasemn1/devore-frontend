import Book from 'pages/Book';
import Home from 'pages/Home';
import Ranking from 'pages/Ranking';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function Pages() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/book" exact component={Book} />
        <Route path="/ranking" exact component={Ranking} />
      </Switch>
    </BrowserRouter>
  );
}

export default Pages;
