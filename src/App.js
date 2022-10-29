import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import About from './components/About';

    
function App() {
  const [Mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <div className="container my-3" >  {/* Y margin by 3 i.e. 3 steps down from TextUtils */}
      <TextForm heading="Enter the text to analyze below" mode={Mode}/>
    </div>
    </>
  );
}

export default App;
