import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import LoginPage from './Pages/LoginPage.js'
import CreateRequest from './Pages/CreateRequest';
import UserTable from './Pages/UserTable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () =>
<Router>
      <div className="App">
            <Jumbotron/>
            <Switch>
                  
                  <Route path="/user" exact component={UserTable} />
            </Switch>
            
            {/* <Route path='/user' component={UserTable}/> */}
            <UserTable />
      </div>
</Router>
export default App;

