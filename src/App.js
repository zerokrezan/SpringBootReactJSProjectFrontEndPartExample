import './App.css';
import React, {useState, useEffect} from "react";
import { Routes, Route, Navigate, useLocation} from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';
import UserLoginForm from './login/UserLoginForm';
import UserLogoutForm from './login/UserLogout';

//[x]restrict access for unlogged user to login page


function App() {


  const currentURl = useLocation();

  useEffect(()=> {
    if ((!localStorage.length>0) && currentURl.pathname !== '/' ){
      window.location.replace("/");
    }
  })

  return (
    <div className="App">   
      {localStorage.length>0 ? (
        <Routes>
          <Route path="/" element={<UserLoginForm />} />
          <Route path="/users" element={<UserViewComponent />} />
          <Route path="/logout" element={<UserLogoutForm/>} />
          <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<UserLoginForm />} />
      </Routes>
      )}
      </div>

  );
}

export default App;