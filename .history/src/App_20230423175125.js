import './App.css';
import React, {useState} from "react";
import { Routes, Route, useLocation} from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';
import UserLoginForm from './login/UserLoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin(user) {
    setIsLoggedIn(true);
    setCurrentUser(user);
  }

  return (
    <div className="App">
      <Routes>
      <Route path="/">
          {isLoggedIn ? (
            <UserViewComponent
              user={currentUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : (
            <UserLoginForm onLogin={handleLogin} />
          )}
        </Route>
        <Route path="/" element={<UserLoginForm  setIsLoggedIn={setIsLoggedIn} />} /> 
        <Route path="/users" element={<UserViewComponent isLoggedIn={isLoggedIn}/>} />
        <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
    </div>
    
  );
}

export default App;