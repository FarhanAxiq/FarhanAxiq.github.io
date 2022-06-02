import React from 'react'
import resume from '../../assets/Farhan_Resume.pdf'

const CTA = () => {
  return (
    <div className = 'cta'>
        <a href={resume} target="_blank"
        title="Resumé Page"
        rel="noopener noreferrer"
        className="btn">View Resume</a>
        <a href="#contact" className="btn btn-primary"> Connect with Me</a>
    </div>
  )
}

export default CTA