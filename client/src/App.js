import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import LoginPage from './Pages/LoginPage.js'
import CreateRequest from './Pages/CreateRequest';
import UserTable from './Pages/UserTable';
import ManagerTable from './Pages/ManagerTable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () =>

  <Router>
      <div className="App">
      <Jumbotron/>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/createrequest" component={CreateRequest} />
        <Route path="/user" exact component={UserTable} />
        <Route path="/manager" exact component={ManagerTable} />
      </Switch>
      </div>
  </Router>    

export default App;

