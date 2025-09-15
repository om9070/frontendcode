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
          { icon: 'fa-code-compare', title: 'AI/ML', desc: 'We design and implement AI-powered applications that learn, adapt, and scale with your business.' },
          { icon: 'fa-people-group', title: 'Digital Marketing', desc: 'Boost your online presence with SEO, social media marketing, paid ads, and content strategies that generate leads and grow your brand.' },
          { icon: 'fa-cart-shopping', title: 'E-Commerce Solutions', desc: 'Complete e-commerce development with product management, secure payments, and customer-friendly interfaces.' },
          { icon: 'fa-list-check', title: 'CRM & ERP Solutions', desc: 'Customized CRM and ERP platforms that streamline daily business operations, task management, and customer handling.' },
          { icon: 'brands fa-intercom', title: 'Custom Software Development (Web & App)', desc: 'End-to-end development of custom software solutions for web and mobile applications — designed to fit your exact business workflows and daily operations.' }
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
