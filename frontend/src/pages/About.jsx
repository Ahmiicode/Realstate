import React from 'react'
import HeroSection from '../components/About/HeroSection'
import Detail from '../components/About/Detail'
import Team from '../components/Home2/Team'
import Partner from '../components/Home1/Partner'
import CallToAction from '../components/Home2/CalltoAction'

const Aboutus = () => {
  return (
    <div>
      <HeroSection/>
      <Detail/>
      <Partner/>
      <Team/>
      <CallToAction/>
    </div>
  )
}

export default Aboutus
