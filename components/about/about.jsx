import React from 'react'
import IndustriesSection from './industry/industrySection'
import Services from '../home/services'
import Circule from '../circuleSection/circule'
import Map from '../home/map'

export default function AboutSection() {
  return (
    <>

      <div>
        <div className='aboutsection'>
          <h1 className=' HeadingAction font' style={{ color: "#00dbde", textDecoration: "underline" }}>ABOUT US</h1>
        </div>
      </div>
      <Services />
      <IndustriesSection />
      <Circule />
      <div className='contentsec' style={{height:"38rem"}}>
          <h1 className='font'>We have professional software engineers - <span style={{color:"white"}}> who will build your project perfectly under your guidance</span>.</h1>
      </div>
      <Map />

    </>
  )
}
