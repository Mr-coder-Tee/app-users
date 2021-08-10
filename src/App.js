import './App.css';
import Nav from './Components/Nav';
import Form from './Components/Form';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
        <Nav/>
        <div className="App-container">
            <Form/>
            <UserList/>
        </div>
    </div>
  );
}

export default App;
