import './App.css';
import Nav from './Components/Nav';
import HomePage from './Components/HomePage';
import UserInfo from './Components/UserInfo';
import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import UserList from './Components/UserList';


function App() {
  const [users,setUser]=useState([]);
  const[index,setIndex]=useState();

    const AddUser=(name,surname,age,DoB,location)=>{
      setUser([...users,{
          uid:users.length,
          _name:name,
          _surname:surname,
          _age:age,
          _DoB:DoB,
          _location:location
      }])
  }

  const getIndex=(rIndex)=>{
      setIndex(rIndex);
  }
 
  return (
    <div className="App">
      {console.log("array 0",users[0])}
        <Nav/>
        <Router>
          <Switch>
              <Route path="/" exact>
                  <HomePage AddUser={AddUser} users={users}/>
              </Route>
              <Route path="/userinfo">
                  <UserInfo index={index}/>
              </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
