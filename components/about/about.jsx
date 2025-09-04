import React from 'react'
import dynamic from 'next/dynamic'
import LoadingSpinner from '@/app/loading'


const IndustriesSection = dynamic(() => import("./industry/industrySection"), {
  loading: () => <p><LoadingSpinner /></p>,
});

const Services = dynamic(() => import("../home/services"), {
  loading: () => <p><LoadingSpinner /></p>,
});

const Circule = dynamic(() => import("../circuleSection/circule"), {
  loading: () => <p><LoadingSpinner /></p>,
});

const Map = dynamic(() => import("../home/map"), {
  loading: () => <p><LoadingSpinner /></p>,
});


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
