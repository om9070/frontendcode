"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from "@/components/home/Services.module.css";

export default function Services() {
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
    <div className="container">
      <h2 className={`text-center my-5 HeadingAction color ${styles.title}`}>Our Services</h2>
      <div
        ref={sectionRef}
        className={`${styles.servicesSectionWrapper} ${
          visible ? styles.animateIn : ''
        }`}
      >
        {[
          { icon: 'fa-desktop', title: 'Website Development', desc: 'We craft responsive, user-friendly websites tailored to your business needs—fast, secure, and scalable.' },
          { icon: 'fa-mobile-alt', title: 'Mobile App Development', desc: 'Custom mobile applications for Android and iOS that deliver performance, intuitive design, and seamless functionality.' },
          { icon: 'fa-palette', title: 'UI/UX Design', desc: 'Creative, high-quality designs for branding, marketing, and social media—designed to captivate and convert.' },
          { icon: 'fa-chart-line', title: 'SEO Optimization', desc: 'Boost your search engine visibility with proven SEO strategies that drive traffic, rankings, and results.' },
          { icon: 'fa-scale-balanced', title: 'Load Balance', desc: 'Optimize performance and user experience with intelligent server and traffic load management solutions.' },
          { icon: 'fa-people-arrows', title: 'Social media advertising', desc: 'Targeted ad campaigns on platforms like Facebook, Instagram & LinkedIn to generate leads and grow your brand.' },
          { icon: 'fa-cloud', title: 'Cloud Solutions', desc: 'Providing scalable and reliable cloud services htmlFor your business.' },
          { icon: 'fa-code-compare', title: 'Lead Generater', desc: 'Data-driven lead generation strategies to help you reach the right audience and grow your sales pipeline.' }

        ].map((item, index) => (
          <div key={index} className={styles.servicesBox}>
            <i className={`fa-solid ${item.icon}`}></i>
            <h3 className=''>{item.title}</h3>
            <p className={styles.color}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
