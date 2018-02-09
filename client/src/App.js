import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import LoginPage from './Pages/LoginPage.js'
import CreateRequest from './Pages/CreateRequest';
import UserTable from './Pages/UserTable';
import EquipmentTable from './Pages/EquipmentTable';
import ManagerTable from './Pages/ManagerTable';
import UserList from './Pages/UserList.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const App = () =>


  <Router>
      <div className="App">
      <Jumbotron/>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/createrequest" component={CreateRequest} />
        <Route path="/user" exact component={UserTable} />
        <Route path="/userlist" exact component={UserList} />   
        <Route path="/equipments" exact component={EquipmentTable} />

        <Route path="/manager" exact component={ManagerTable} />

      </Switch>
      </div>
  </Router>    

export default App;

