import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';

import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import MemeGenerator from './MemeGen';
import MemeList from './Memelist';
import DeleteButton from './delete';
import Signup from './Signup';
import Login from './Login';
/*import MemeGenerator from './addmemes';*/

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <DeleteButton/>
    <MemeGenerator/>
    <MemeList/>
      <Routes>
       
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
         <Route path='/Signup' element={<Signup/>}></Route> 
         <Route path='/login' element={<Login/>}></Route> 
      </Routes>

      <Footer/>
</BrowserRouter>
  );
}

export default App;
