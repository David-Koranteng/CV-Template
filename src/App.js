import React from 'react';
import Skills from './components/skills';
import './App.css';
import Nav from './components/nav';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () =>{
  return (
  <>y

  {/*<Nav/>*/}
    <BrowserRouter>
    <Nav/>
      <Routes>
      <Route index element={<Home/>}/>
        <Route path='/skills' element={<Skills/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
  </BrowserRouter>
  </>

  );
};

export default App;
