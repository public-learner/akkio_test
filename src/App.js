import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import "./assets/font/Quicksand-VariableFont_wght.ttf";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className='body'>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
