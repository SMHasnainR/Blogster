import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/@:user' element={<UserProfile />} />
      </Routes>

    </div>
  );
}

export default App;