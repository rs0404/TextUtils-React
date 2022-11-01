import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

    
function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled",'success'); 
      document.title = "TextUtil - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", 'success');
      document.title = "TextUtil - Light Mode";
    }
  }
  return (
    <Router>  
      <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route className = "container my-3" exact path="/" element = { <TextForm heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert}/> }/>
      </Routes>
    </Router>
  );
}

export default App;
