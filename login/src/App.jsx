
import './App.css';
import Login from './pages/login/Login';
import Nopage from './Nopage';
import Signup from './pages/signup/Signup';
import Website from './pages/website/Website';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
        <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Website/>}/>
          <Route path='*' element={<Nopage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
