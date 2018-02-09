import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import LoginPage from './Pages/LoginPage.js'
import CreateRequest from './Pages/CreateRequest';
import UserTable from './Pages/UserTable';
import EquipmentTable from './Pages/EquipmentTable';
import ManagerTable from './Pages/ManagerTable';
import CreateEquipment from './Pages/CreateEquipment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateUser from './Pages/CreateUser';



const App = () =>


  <Router>
      <div className="App">
      <Jumbotron/>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/createrequest" component={CreateRequest} />
        <Route path="/user" exact component={UserTable} />
        <Route path="/createuser" exact component={CreateUser} />
        <Route path="/createequipment" exact component={CreateEquipment} />
        <Route path="/equipment" exact component={EquipmentTable} />
        <Route path="/manager" exact component={ManagerTable} />

      </Switch>
      </div>
  </Router>    

export default App;

