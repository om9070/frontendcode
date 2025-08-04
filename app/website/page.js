import React from 'react'
import NavbarWebsite from '@/components/website/navbarWebsite'
import CardsSection from '@/components/website/cardsSection'
import ThreeImage from '@/components/global/threeImage'

export default function Website() {
  return (
    <>
    <NavbarWebsite header={"Build a Website That Grows Your Business"} description={"We design and develop modern, responsive websites tailored to your business goals—optimized for speed, security, and user experience."} route={"Website"}/>
    <CardsSection/>
    <ThreeImage img1={"/db1.jpg"} img2={"/db2.jpg"} img3={"/db3.jpg"} title={"Robust Backend & Scalable Database Solutions"} description={"We architect and develop secure, high-performance backend systems with scalable databases to power your applications. From API development to real-time data processing, our backend services ensure reliability, speed, and seamless data flow—built using modern technologies like Node.js, Express, MongoDB, PostgreSQL, and more."}/>

    </>
  )
}
