import  { useRef } from 'react';
import emailjs from '@emailjs/browser';



export const ContactUs = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();   

    emailjs.sendForm('service_a9mkc2u', 'template_0f0lrvz', form.current, '_pX9WD4Tb2g48bGyo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <label>Nimi</label>
      <input type="text" name="from_name" /> <br />
      <label>Email</label>
      <input type="email" name="from_email" /> <br />
      <label>Sõnum</label>
      <textarea name="message" /> <br />
      <input type="submit" value="Saada" /> <br />
    </form>
  );
};
