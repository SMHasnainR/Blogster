import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Auth from './pages/Auth';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/login' element={<Auth />} />
      </Routes>

    </div>
  );
}

export default App;