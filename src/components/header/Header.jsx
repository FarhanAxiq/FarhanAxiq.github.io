import React from 'react';
import'./header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import {AiFillCaretDown} from 'react-icons/ai';

const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5>Welcome and Selamat Datang</h5>
        <h1>Farhan Haziq</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocial />
        <a href="#contact" className='scroll__down'><AiFillCaretDown size='40px'/></a>
        </div>
    </header>
  )
}

export default Header