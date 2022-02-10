import React from 'react';
import './App.css';
import Channels from './com/Channels';
import Navbar from './com/Navbar';
import Poster from './com/Poster';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Poster/>
      {/* chanels */}
      <Channels />
      
    </div>
  );
}

export default App;
