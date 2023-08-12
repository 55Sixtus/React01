// src/App.js
import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Include the Navbar component */}
      <div className="content">
        <Login /> {/* Include the Login component */}
      </div>
    </div>
  );
}

export default App;
