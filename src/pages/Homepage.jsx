import React from "react";
import CarouselGallery from "./CarouselGallery";





import './css/Home.css'

function Homepage () {
  

  
    return (
        <div className="tagataust" >
          
         <CarouselGallery />
          <div> 
                <div>
                     <img className="home" src='liikuv.gif' alt="" /> 
                 </div>
              
              
              
          

          <div  className="goToLink">
            
            <a  href="https://www.instagram.com/blacklemonbakery/">
          <img className="instagram" src="instagram.png" alt="" />
          </a>
          <a href="https://www.facebook.com/blacklemonbakery">
          <img className="instagram" src="facebook.png" alt="" />
          </a>
          
           </div>
       
            </div>
          </div>
        );
}

export default Homepage;  
        
      