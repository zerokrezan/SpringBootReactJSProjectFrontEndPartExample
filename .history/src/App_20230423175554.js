import './App.css';
import React, {useState} from "react";
import { Routes, Route, useLocation} from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';
import UserLoginForm from './login/UserLoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  function handleLogin(user) {
    setIsLoggedIn(true);
    setCurrentUser(user);
  }

  return (
    <div className="App">
      <Routes>
         <Route path="/">
         {isLoggedIn ? (
        <Route path="/users">
         <UserViewComponent />
       </Route>
          ) : (
        <UserLoginForm onLogin={handleLogin} />
         )}
        </Route>


        
        <Route path="/users" element={<UserViewComponent isLoggedIn={isLoggedIn}/>} />
        <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
    </div>
    
  );
}

export default App;