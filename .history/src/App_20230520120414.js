import './App.css';
import React, {useState, useEffect} from "react";
import { Routes, Route, Navigate} from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';
import UserLoginForm from './login/UserLoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);


  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserLoginForm />} />
        <Route path="/users" element={<UserViewComponent />} />
        
        {/* <Route path="/" element={<UserLoginForm  setIsLoggedIn={setIsLoggedIn} />} /> 
        <Route path="/users" element={<UserViewComponent isLoggedIn={isLoggedIn}/>} /> */}
        <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
    </div>
    
  );
}

export default App;