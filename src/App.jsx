import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;