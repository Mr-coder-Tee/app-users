import './App.css';
import Nav from './Components/Nav';
import Form from './Components/Form';
import UserList from './Components/UserList';
import React,{useState} from 'react';


function App() {
  const [users,setUser]=useState([]);

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
  return (
    <div className="App">
        <Nav/>
        <div className="App-container">
            <Form AddUser={AddUser}/>
            <UserList users={users}/>
        </div>
    </div>
  );
}

export default App;
