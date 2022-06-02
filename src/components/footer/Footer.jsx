import React from 'react';
import'./footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {GoMarkGithub} from 'react-icons/go';


const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <footer>
      © {getCurrentYear()} Farhan Haziq
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/farhan-haziq/"><BsLinkedin size='30px'/></a>
        <a href="https://www.linkedin.com/in/farhan-haziq/"><GoMarkGithub size='30px'/></a>
      </div>
    </footer>
  )
}

export default Footer