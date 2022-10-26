import './App.css';
import React from 'react'
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
    
function App() {
   return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" />
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
