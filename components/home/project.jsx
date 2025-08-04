'use client'
import { useEffect, useRef, useState } from "react";
import Counter from "./technology/counter";


export default function Project() {

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
            <div id="projectFacts" className="sectionClass">
                <div className="fullWidth eight columns">
                    <div className="projectFactsWrap" ref={sectionRef}>
                        <div className="item">
                            <i className="fa fa-briefcase"></i>
                            {visible&&<Counter target={5} />}
                            <span></span>
                            <p>Projects done</p>
                        </div>
                        <div className="item">
                            <i className="fa fa-dna"></i>
                           {visible&& <Counter target={25} />}
                            <span></span>
                            <p>Social Ads Managed</p>
                        </div>
                        <div className="item">
                            <i className="fa fa-users"></i>
                            {visible&&<Counter target={20} />}
                            <span></span>
                            <p>Team Members</p>
                        </div>
                        <div className="item">
                            <i className="fa fa-handshake"></i>
                            {visible&&<Counter target={9} />}
                            <span></span>
                            <p>Happy clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
