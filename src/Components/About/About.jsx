import React from 'react'
import  './About.css'
import about_img from '../../assets/about.png' 
import play_icon from '../../assets/play-icon.png' 

const About = ({setPlayState}) => {
  return (
    <div className='about'>
<div className="about-left">
    <img src={about_img} alt=".." className='about-img' />
        <img src={play_icon} alt=".." className='play-icon'  onClick={()=>{
          setPlayState(true)
        }}/>

</div>

<div className="about-right">
<h3>About University</h3>
<h2> Nuturing leaders of tommorrow </h2>
<p>At STARS-SCHOOLS/EDUSITY, 
    students are at the heart of everything we do.
     Our diverse programs, supportive faculty, and dynamic campus life ensure that every student finds their path
      to success.</p> <p>Whether you’re pursuing undergraduate, graduate, or professional studies, 
      we’re here to guide you toward achieving your goals and making a difference in the world."</p>
</div>
    </div>
  )
}

export default About