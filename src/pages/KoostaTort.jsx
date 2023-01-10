
import './css/Koosta.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const KoostaTort = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();   

    emailjs.sendForm('service_a9mkc2u', 'template_vvntew8', form.current, '_pX9WD4Tb2g48bGyo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


   
   

    return ( 
        
          
          <form className="form" ref={form} onSubmit={sendEmail}>
<div className="dropdown">
  <label className="dropbtn">Tordipõhi</label>
  <div   className="dropdown-content">
      
    <a><input  type="checkbox" value="Tordipõhi: vanilli" name="message" />Vanilli</a>
    <a><input  type="checkbox" value="Tordipõhi: šokolaadi" name="message" />Šokolaadi</a>
    <a><input  type="checkbox" value="Tordipõhi: juustu" name="message" />Juustu</a>
  </div>
</div>
<div className="dropdown">
  <button className="dropbtn">Tordisisesed koostisosad</button>
  <div className="dropdown-content">

  <a><input  type="checkbox" value="Tordisisesed koostisosad: vaarikas" name="message" />Vaarikas</a>
    <a><input  type="checkbox" value="Tordisisesed koostisosad: kirss" name="message" />Kirss</a>
    <a><input  type="checkbox" value="Tordisisesed koostisosad: šokolaad" />Šokolaad</a>
    <a><input  type="checkbox" value="Tordisisesed koostisosad: Moos" />Moos</a>
    <a><input  type="checkbox" value="Tordisisesed koostisosad: Kreem" />Kreem</a>
    
    <a><label>Lisa ise koostisosa: <input  type="text" /></label></a>
    <button >Lisa</button>
  </div>
</div>

<div className="dropdown">
  <button className="dropbtn">Tordi pealne</button>
  <div className="dropdown-content">
  <a><input  type="checkbox" value="Tordi pealne: suhkrumass" name="message" />Suhkrumass</a>
    <a><input  type="checkbox" value="Tordi pealne: šokolaad" name="message" />Šokolaad</a>
    <a><input  type="checkbox" value="Tordi pealne: martsipan" name="message"/>Martsipan</a>
    <a><input  type="checkbox" value="Tordi pealne: värsked marjad" name="message"/>Värsked marjad</a>
  </div>
</div>

  <div className="dropdown">
  <button className="dropbtn">Värvus</button>
  <div className="dropdown-content">
    <a className="loll">Mis värvi soovid: <input type="text" name="message" /></a>
    <input type="submit" value="Telli" />
    </div>
  </div > 
 </form> 


     
    
        
     );
}
    
 export default KoostaTort; 

