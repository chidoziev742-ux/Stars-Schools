import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonals from './Components/Testimonals/Testimonals'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'
const App = () => {

const [playState,setPlayState]=useState(false);


  return (

    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title  subTitle='Our PROGRAM' Title='What we offer'/>
<Programs/>
<About setPlayState={setPlayState}/>
        <Title  subTitle='Gallery' Title='campus photos'/>
<Campus/>
        <Title  subTitle='TESTIMONALS' Title='What Students Says'/>
<Testimonals/>
        <Title  subTitle='Contact us ' Title='Get in touch  '/>
<Contact/>
<Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App