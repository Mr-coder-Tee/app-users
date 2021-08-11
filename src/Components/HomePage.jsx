import Form from './Form';
import UserList from './UserList';
import React,{useState} from 'react';

const HomePage = () => {
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
        <div>
            <div className="App-container">
                <Form AddUser={AddUser}/>
                <UserList users={users}/>
            </div>
        </div>
     );
}
 
export default HomePage;