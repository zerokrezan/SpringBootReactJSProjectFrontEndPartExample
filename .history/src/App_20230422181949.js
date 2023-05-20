import './App.css';
import { Routes, Route, useLocation, BrowserRouter} from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';
import UserLoginForm from './login/UserLoginForm';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path={["/logins", "/loggg"]} element={<UserLoginForm/>}/>
        <Route path="/users" element={<UserViewComponent />} />
        <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
    </div>  
    
    </BrowserRouter>
  
    
  );
}

export default App;