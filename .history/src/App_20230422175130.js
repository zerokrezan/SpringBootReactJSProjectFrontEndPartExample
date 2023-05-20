import './App.css';
import { Switch, Routes, Route, useLocation} from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';
import UserLoginForm from './login/UserLoginForm';

function App() {
  const isLoginPage = useLocation.pathname === '/';
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<UserLoginForm/>} name={isLoginPage ? 'login' : undefined} />
        <Route path="/users" element={<UserViewComponent />} />
        <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
    </div>
    
  );
}

export default App;