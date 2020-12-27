import React from 'react';
import './Contact.css';
import Github from '../Project/Row/image/github-logo.svg';

const Contact = () => (
  <div className="Contact" id="c">
  <h1 className="Contact_hedding">CONTACT!</h1>
  <p className="Email">  phone : 010-6777-6491 </p>
  <p className="Email"> E-mail : youngun45@naver.com </p>
 <a href="https://github.com/ParkYoungUn"> <img src={Github} alt="github" className="Github" /></a>
  </div>
);


export default Contact;