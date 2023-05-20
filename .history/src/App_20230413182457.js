import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserViewComponent from './components/UserViewComponent';
import UserCreationComponent from './components/UserCreationComponent';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/users" element={<UserViewComponent />} />
        <Route path="/newUser" element={<UserCreationComponent />} />
      </Routes>
    </div>
    
  );
}

export default App;