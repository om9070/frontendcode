'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function WorkIdea() {

  const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) observer.observe(sectionRef.current);
  
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }, []);

  return (
    <>
      <div className=" w-75 m-auto my-4 mb-3">
        <div className="row g-0" ref={sectionRef}>
          <div className={`col-md-6 animateOnScrollLeft ${visible?"visible":""}`}>
            <img src="/workSample.jpg" className="img-fluid rounded-start" alt="sample" />
          </div>
          <div className={`col-md-6 my-auto animateOnScrollRight ${visible?"visible":""}`}>
            <div className="card-body">
              <h5 className="my-4  card-tittle">Grow Your Website With Our Team.</h5>
              <p className="card-text color font">Partner with our expert team to build, scale, and optimize your website for performance, visibility, and long-term success.</p>
              <p className='font m-0' style={{ color: "#328E6E" }}>Website Analysis</p>
              <div className="progress mb-4" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar text-bg-success" style={{ width: "90%" }}>90%</div>
              </div>
              <p className='font m-0 text-info'>Code Review</p>
              <div className="progress mb-4" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">

                <div className="progress-bar text-bg-info" style={{ width: "80%" }}>80%</div>
              </div>
              <p className='font m-0 text-warning' >Load Balance</p>
              <div className="progress mb-4" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">

                <div className="progress-bar text-bg-warning" style={{ width: "85%" }}>85%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
