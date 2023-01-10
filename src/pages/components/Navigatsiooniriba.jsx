import React from 'react';
import '../css/Navigatsioon.css';

 


function Navigatsiooniriba() {
  return (
  <div>
      
    <nav>
      <a  className="active" href="/"> <img className="logo" src="SIDRUN.png" alt=""/> </a>
       
       <div className="topnav">
       
          
          <a  href="galerii">Galerii</a> 
          <a  href="koosta-tort">Tellimine</a> 
          <a href="hinnakiri">Hinnakiri</a> 
          <a href="asukoht">Asukoht</a>
          <a href="contact-us">Kontakt</a>
          
          
           </div>
       
  


    

      </nav>
    </div>
  )};

export default Navigatsiooniriba;