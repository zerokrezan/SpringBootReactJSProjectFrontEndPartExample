import './App.css';
import React, {useState} from "react";
import { Routes, Route, Navigate} from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';
import UserLoginForm from './login/UserLoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // this function will be called from your LoginForm after the user successfully logs in
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Routes>
      <Route path="/">
        {isLoggedIn ? (
          <Navigate to="/users" />
        ) : (
          <UserLoginForm onLogin={handleLogin} />
        )}
      </Route>
      <Route path="/users">
        {isLoggedIn ? <UserViewComponent /> : <Navigate to="/" />}
      </Route>

        
        <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
    </div>
    
  );
}

export default App;