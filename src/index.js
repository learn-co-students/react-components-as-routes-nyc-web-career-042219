import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './about';
import Home from './home';
import Login from './login';
import Navbar from './navBar';

ReactDOM.render((
  <BrowserRouter>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </BrowserRouter>),
  document.getElementById('root')
);
