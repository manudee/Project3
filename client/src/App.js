import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from './components/Jumbotron/Jumbotron';
import LoginPage from './Pages/LoginPage.js'
import CreateRequest from './Pages/CreateRequest';




const App = () =>
  <Router>
      <div className="App">
      <Jumbotron/>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/createrequest" component={CreateRequest} />
      </Switch>
      </div>
  </Router>    

export default App;

