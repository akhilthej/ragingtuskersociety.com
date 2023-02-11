import React from 'react';
import "./App.css";

import {BrowserRouter,  Routes, Route ,useLocation} from "react-router-dom";
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App(){
  const location= useLocation();
  window.scrollTo(0, 0);

  return (<>
    <BrowserRouter>
    <Routes location ={location} key={location.pathname}>

       <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

       </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  );  
}

export default App