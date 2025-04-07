import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Profile from './components/Profile';
import ThemeProvider from './components/ThemeContext';
import GetUsers from './components/GetUsers';
import ProtectedRoute from './components/ProtectedRoute';
import Settings from './components/Settings';
import Login from './components/Login';
import Counter from './components/Counter';

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Navbar/>
      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/getUsers' element={<GetUsers/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile/:username' element={<Profile/>}/>
        <Route path='/settings' element={
          <ProtectedRoute>
            <Settings/>
          </ProtectedRoute>
        }/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
