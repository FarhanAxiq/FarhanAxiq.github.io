import React from 'react'
import'./Header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import {AiFillCaretDown} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5>Welcome!</h5>
        <h1>Am Farhan!</h1>
        <h5 className="text-light"> Test</h5>
        <CTA />
        <HeaderSocial />
        <a href="#contact" className='scroll__down'><AiFillCaretDown /></a>
        </div>
    </header>
  )
}

export default Header