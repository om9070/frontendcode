import React from 'react'
import CardApplication from '@/components/application/cardApplication'
import NavbarWebsite from '@/components/website/navbarWebsite'
import ThreeImage from '@/components/global/threeImage'


export default function Application() {
  return (
    <>
        <NavbarWebsite header={"Custom Application Development"} description={"We build scalable, secure, and high-performance web and mobile applications tailored to your business needs—designed for speed, usability, and long-term success."} route={"Application"}/>
        <CardApplication/>
    <ThreeImage img1={"/db1.jpg"} img2={"/db2.jpg"} img3={"/db3.jpg"} title={"Robust Backend & Scalable Database Solutions"} description={"We architect and develop secure, high-performance backend systems with scalable databases to power your applications. From API development to real-time data processing, our backend services ensure reliability, speed, and seamless data flow—built using modern technologies like Node.js, Express, MongoDB, PostgreSQL, and more."}/>
    </>
  )
}
