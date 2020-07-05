import Book from 'pages/Book';
import Home from 'pages/Home';
import Ranking from 'pages/Ranking';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function Pages() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/book" component={Book} />
      <Route path="/ranking" component={Ranking} />
    </Switch>
  );
}

export default Pages;
