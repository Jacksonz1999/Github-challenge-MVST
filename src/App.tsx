import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AvatarImg from "./components/AvatarImg/Avatar"
import MainContent from './components/MainContent/MainContent';
function App() {
  
  return (
    <>
    <div className='container'>
    <div className='first_part'>
    <AvatarImg />
    </div>
    <div className='second_part'>
      <div className='second_part_navbar'>
     <Navbar/>
     </div>
    <MainContent/>
    </div>
  

  </div>
    </>
  );
}

export default App;
