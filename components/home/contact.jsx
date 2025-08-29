'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function Contact() {
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
     <section className="contact_us">
        <div className="container_sec">
            <div className="row" ref={sectionRef}>
                <div className="col-md-10 offset-md-1">
                    <div className="contact_inner">
                        <div className={`row animateOnScrollRight ${visible?"visible":""}`}>
                            <div className="col-md-10">
                                <div className="contact_form_inner">
                                    <div className="contact_field">
                                        <h5 className=' my-3 card-tittle'>Contatc Us</h5>
                                        <p className='color font'>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                        <input type="text" className="form-control form-group" placeholder="Name" />
                                        <input type="text" className="form-control form-group" placeholder="Email" />
                                        <textarea className="form-control form-group" placeholder="Message"></textarea>
                                        <button className="contact_form_submit">Send</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="right_conatct_social_icon d-flex align-items-end">
                                   <div className="socil_item_inner d-flex">
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className={`contact_info_sec animateOnScrollLeft ${visible?"visible":""}`}>
                            <h4 className='font'>Contact Info</h4>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-headset"></i>
                                <span className='font'>+91 7079679070</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-envelope-open-text"></i>
                                <span className='font'>info@flightmantra.com</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-map-marked-alt"></i>
                                <span className='font'>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
    </>
  )
}
