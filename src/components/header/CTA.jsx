import React from 'react'
import resume from '../../assets/Farhan_Resume.pdf'

const CTA = () => {
  return (
    <div className = 'cta'>
        <a href={resume} target="_blank"
        title="Resumé Page"
        rel="noopener noreferrer"
        className="btn">Resume!</a>
        <a href="#contact" className="btn btn-primary"> Contact</a>
    </div>
  )
}

export default CTA