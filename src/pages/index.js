import Book from 'pages/Book';
import Home from 'pages/Home';
import RankingClasses from 'pages/RankingClasses';
import RankingInternalClass from 'pages/RankingInternalClass';
import RankingTops from 'pages/RankingTops';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function Pages() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/rankingDaEscola" exact component={RankingClasses} />
        <Route path="/rankingDaTurma" exact component={RankingInternalClass} />
        <Route path="/rankingTopsDaEscola" exact component={RankingTops} />
        <Route path="/book" exact component={Book} />
      </Switch>
    </BrowserRouter>
  );
}

export default Pages;
