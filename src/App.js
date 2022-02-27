import Print from './forprint.js';
import './App.css';
import Card from './card';
import Home from './home.js';
import Uform from './uploadform.js';
import Login from './login.js';
import Signup from './signup.js';
import UploadForm from './forupload.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Login />  
      <Router>
        <Routes>       
           <Route path="/" element={<Uform/>}/>
           <Route path="/login" element={Login}/>
           <Route path="/signup" element={Signup}/>
           <Route path="/print" element={Print}/>
           <Route path="/upload" element={UploadForm}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
