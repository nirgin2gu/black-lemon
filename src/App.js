import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigatsiooniriba from './pages/components/Navigatsiooniriba';
import Homepage from './pages/Homepage'
import KoostaTort from './pages/KoostaTort';
import Galerii from './pages/Galerii';
import Asukoht from './pages/Asukoht';
import Hinnakiri from './pages/Hinnakiri';
import { ContactUs } from './pages/ContactUs';





function App() {
  
  return (
    
    <div className="App" >
      
      <Navigatsiooniriba />
        
        

        <Routes>
        <Route path="/" exact element={< Homepage />}/>
      </Routes>
      <Routes>
        <Route path="koosta-tort" exact element={< KoostaTort />}/>
      </Routes>
      <Routes>
        <Route path="galerii" exact element={< Galerii />}/>
      </Routes>
      <Routes>
        <Route path="search-form" exact element={< Asukoht />}/>
      </Routes>
      <Routes>
        <Route path="hinnakiri" exact element={< Hinnakiri />}/>
      </Routes>
      <Routes>
        <Route path="asukoht" exact element={< Asukoht />}/>
      </Routes>
      <Routes>
        <Route path="contact-us" exact element={< ContactUs />}/>
      </Routes>
 </div>
  );
}

export default App;
      
      
   
