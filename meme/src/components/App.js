import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Authentication from './Authentication';
import Signup from './Signup';
/*import MemeGenerator from './addmemes';*/

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
         <Route path='/Signup' element={<Signup/>}></Route> 
        <Route path='/login' element={<Authentication/>}></Route>
        
      </Routes>
      <Footer/>
</BrowserRouter>
  );
}

export default App;
