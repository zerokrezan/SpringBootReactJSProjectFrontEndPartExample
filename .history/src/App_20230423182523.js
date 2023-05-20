import './App.css';
import React, {useState} from "react";
import { Routes, Route, Navigate} from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';
import UserLoginForm from './login/UserLoginForm';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  function handleLogin(user) {
    setIsLoggedIn(true);
    setCurrentUser(user);
  }
  useEffect(() => {
    if (isLoggedIn) {
      axios.get("http://localhost:8080/users").then((response) => {
        setUsers(response.data);
      });
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLoginForm onLogin={handleLogin} />} />
        <Route path="/users" element={<UserViewComponent isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
        
        {/* <Route path="/" element={<UserLoginForm  setIsLoggedIn={setIsLoggedIn} />} /> 
        <Route path="/users" element={<UserViewComponent isLoggedIn={isLoggedIn}/>} /> */}
        <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
    </div>
    
  );
}

export default App;