import './App.css';
import Nav from './Components/Nav';
import HomePage from './Components/HomePage';
import UserInfo from './Components/UserInfo';
import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
 
  return (
    <div className="App">
        <Nav/>
        <Router>
          <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/userinfo" exact component={UserInfo}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
