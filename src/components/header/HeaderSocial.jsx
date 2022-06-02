import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://linkedin.com/in/farhan-haziq" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/FarhanAxiq" target="_blank" rel="noreferrer"><GoMarkGithub /></a>
    </div>
  )
}

export default HeaderSocial