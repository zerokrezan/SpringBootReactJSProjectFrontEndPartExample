import './App.css';
import React, {useState} from "react";
import { Routes, Route, useLocation} from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';
import UserLoginForm from './login/UserLoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLoginForm  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/users" element={<UserViewComponent isLoggedIn={isLoggedIn}/>} />
        <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
    </div>
    
  );
}

export default App;