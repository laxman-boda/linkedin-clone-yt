import React from 'react';
import './App.css';
import Header from './common/Header/Header';
import Sidebar from './common/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">

    {/* Header */}
    <Header />
    <div className='app__body'>
      {/* AppBody */}
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      {/* Widgets */}      
    </div>
    </div>
  );
}

export default App;
