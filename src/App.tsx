import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
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
     <Navbar/>
    <Searchbar/>
    <MainContent/>
    </div>
  

  </div>
    </>
  );
}

export default App;
