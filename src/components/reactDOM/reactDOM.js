import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstPage from "../firstPage/firstPage";
import SecondPage from "../secondPage/secondPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={FirstPage} />
      <Route path="/SecondPage" component={SecondPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);