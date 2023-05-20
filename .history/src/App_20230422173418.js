import './App.css';
import { Routes, Route, Switch } from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';
import UserLoginForm from './login/UserLoginForm';

function App() {
  return (

    <div className="App">
      <Routes>
        <Switch>
        <Route path="/login" element={<UserLoginForm/>}/>
        </Switch>
        <Route path="/users" element={<UserViewComponent />} />
        <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
    </div>
    
  );
}

export default App;