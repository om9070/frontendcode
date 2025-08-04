// 'use client'; // if using Next.js app directory

// import { useEffect, useRef, useState } from 'react';
// import styles from './Review.module.css';

// const testimonials = [
//   {
//     name: 'Linda Larson',
//     role: 'India',
//     quote: 'Their team built our website exactly as we imagined—clean, fast, and mobile-friendly. We’ve seen a big jump in traffic and engagement!.',
//     img: 'client1.jpg',
//   },
//   {
//     name: 'Joe Charlescraft',
//     role: 'India',
//     quote:"Excellent app development service! They were responsive, skilled, and delivered on time. Highly recommended.",
//         img: 'client2.jpg',
//   },
// ];

// export default function Review() {
//   const [index, setIndex] = useState(0);

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const { name, role, quote, img } = testimonials[index];

//     const sectionRef = useRef(null);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setVisible(true);
//           }
//         },
//         { threshold: 0.1 }
//       );

//       if (sectionRef.current) observer.observe(sectionRef.current);

//       return () => {
//         if (sectionRef.current) observer.unobserve(sectionRef.current);
//       };
//     }, []);

//   return (
//     <>
//     <p className='HeadingAction color my-4 text-center'>Client Review</p>

//     <div ref={sectionRef} className={`${styles.wrapper} animateOnScrollLeft ${visible?"visible":""}`}>
//       <button onClick={handlePrev} className={styles.navBtn}>‹</button>

//       <div className={styles.content}>
//         <img src={img} alt={name} className={styles.image} />

//         <div className={styles.text}>
//           <h3>
//             {name}, <span className={styles.role}>{role}</span>
//           </h3>
//           <p className={styles.quote}>{quote}</p>
//           {/* <button className={styles.readMore}>read more</button> */}
//         </div>
//       </div>

//       <button onClick={handleNext} className={styles.navBtn}>›</button>

//       <div className={styles.dots}>
//         {testimonials.map((_, i) => (
//           <span
//           key={i}
//           className={`${styles.dot} ${i === index ? styles.active : ''}`}
//           />
//         ))}
//       </div>
//     </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Rakhi",
      image: "/client1.jpg",
      rating: 5,
      text: "Their team built our website exactly as we imagined—clean, fast, and mobile-friendly. We’ve seen a big jump in traffic and engagement!.",
    },
    {
      id: 2,
      name: "Aman",
      image:
        "client2.jpg",
      rating: 4,
      text: "Excellent app development service! They were responsive, skilled, and delivered on time. Highly recommended.",
    },
    {
      id: 3,
      name: "Sujata",
      image:
        "/apprnd2.jpg",
      rating: 5,
      text: "Working with their team was a fantastic experience. The software engineers understood our vision clearly and turned it into a fully functional product. They followed our guidance at every step and delivered the project on time with outstanding quality. Highly recommended .",
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const getPrevIndex = () =>
    (currentSlide - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (currentSlide + 1) % testimonials.length;

  return (
    <div className="testimonial-container">
      <style jsx>{`
        img {
          max-width: 100%;
        }

        .testimonial-container {
          font-family: "Roboto Slab", serif;
          font-size: 15px;
          line-height: 1.67;
          color: #444;
          padding: 60px 0;
          background: white;
        }

        .section-title {
          font-size: 28px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          font-weight: 400;
          display: inline-block;
          position: relative;
        }

        .section-title:after,
        .section-title:before {
          content: "";
          position: absolute;
          bottom: 0;
        }

        .section-title:after {
          height: 2px;
          background-color: rgba(252, 92, 15, 0.46);
          left: 25%;
          right: 25%;
        }

        .section-title:before {
          width: 15px;
          height: 15px;
          border: 3px solid #fff;
          background-color: #fc5c0f;
          left: 50%;
          transform: translatex(-50%);
          bottom: -6px;
          z-index: 9;
          border-radius: 50%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .text-center {
          text-align: center;
        }

        .customer-feedback {
          position: relative;
        }

        .feedback-slider {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .feedback-slider-item {
          position: relative;
          padding: 60px;
          margin-top: -40px;
        }

        .feedback-slider-item img {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          margin: 0 auto;
        }

        .customer-name {
          margin-top: 15px;
          margin-bottom: 25px;
          font-size: 20px;
          font-weight: 500;
          font-family: "Oswald", sans-serif;
        }

        .feedback-slider-item p {
          line-height: 1.875;
          color: #666;
          font-family: "Oswald", sans-serif;
        }

        .customer-rating {
          background-color: #eee;
          border: 3px solid #fff;
          color: rgba(1, 1, 1, 0.702);
          font-weight: 700;
          border-radius: 50%;
          position: absolute;
          width: 47px;
          height: 47px;
          line-height: 44px;
          font-size: 15px;
          right: 330px;
          top: 77px;
          text-indent: -3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .customer-rating i {
          color: #272a2aff;
          position: absolute;
          top: 10px;
          right: 5px;
          font-weight: 600;
          font-size: 12px;
        }

        .customer-rating i:before {
          content: "★";
        }

        .feedback-slider-item:after {
          content: "";
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 0;
          top: 103px;
          background-color: #f6f6f6;
          border: 1px solid rgba(251, 90, 13, 0.1);
          border-radius: 10px;
          z-index: -1;
        }

        .thumb-prev,
        .thumb-next {
          position: absolute;
          z-index: 99;
          top: 45%;
          width: 98px;
          height: 98px;
          left: -90px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .thumb-next {
          left: auto;
          right: -90px;
        }

        .thumb-prev .customer-rating {
          top: -20px;
          left: 0;
          right: auto;
        }

        .thumb-next .customer-rating {
          top: -20px;
          right: 0;
        }

        .feedback-slider-thumb img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          object-fit: cover;
        }

        .feedback-slider-thumb:hover {
          opacity: 0.8;
        }

        .owl-nav {
          position: relative;
        }

        .owl-nav button {
          position: absolute;
          bottom: 45px;
          transition: all 0.2s ease-in;
          background: transparent;
          border: none;
          color: #06eade;
          font-size: 25px;
          cursor: pointer;
          padding: 5px;
        }

        .owl-prev {
          left: -15px;
        }

        .owl-prev:hover {
          left: -20px;
        }

        .owl-next {
          right: -15px;
        }

        .owl-next:hover {
          right: -20px;
        }

        .owl-prev:before {
          content: "←";
        }

        .owl-next:before {
          content: "→";
        }

        .owl-dots {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 35px;
          display: flex;
          gap: 10px;
        }

        .owl-dot {
          display: inline-block;
        }

        .owl-dot button {
          width: 11px;
          height: 11px;
          margin: 0 5px;
          background: #fff;
          border: 1px solid rgb(251, 90, 13);
          display: block;
          transition: all 200ms ease;
          border-radius: 50%;
          cursor: pointer;
          padding: 0;
        }

        .owl-dot.active button {
          background-color: rgb(251, 90, 13);
        }

        .fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        .zoom-in {
          animation: zoomIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .copyright {
          text-align: center;
          margin-top: 30px;
          font-size: 1.6rem;
          background-color: #ededed;
          padding: 20px 0;
        }

        .copyright a {
          display: inline-block;
          padding: 15px 2px;
          text-decoration: none;
          color: inherit;
        }

        .copyright a:hover {
          text-decoration: underline;
        }

        .copyright a:not(:last-child):after {
          content: "/";
          margin-left: 10px;
        }

        .toptal {
          color: #204ecf;
        }

        .upstack {
          color: #008bf7;
        }

        .upwork {
          color: #37a000;
        }

        .fiverr {
          color: #1dbf73;
        }

        .jobs {
          color: magenta;
          text-decoration: underline;
          margin-top: -15px;
        }

        /* RESPONSIVE */
        @media screen and (max-width: 767px) {
          .feedback-slider-item:after {
            left: 30px;
            right: 30px;
          }

          .feedback-slider-thumb {
            display: none;
          }

          .owl-nav button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin-top: 45px;
            bottom: auto;
          }

          .owl-prev {
            left: 0;
          }

          .owl-next {
            right: 0;
          }

          .owl-prev:hover {
            left: 0;
          }

          .owl-next:hover {
            right: 0;
          }

          .owl-dots {
            display: flex;
          }
        }

        @media screen and (min-width: 768px) {
          .owl-dots {
            display: none;
          }

          .feedback-slider-thumb {
            display: block;
          }
        }
      `}</style>

      <section className="customer-feedback">
        <div className="container text-center">
          <div>
            {/* <h2 className="section-title">What Clients Say</h2> */}
            <p className="HeadingAction color my-4 text-center">
              Client Review
            </p>
          </div>

          <div className="feedback-slider">
            {/* Main Slider */}
            <div className="feedback-slider-item">
              <img
                src={testimonials[currentSlide].image}
                className={!isAnimating ? "zoom-in" : ""}
                alt="Customer Feedback"
              />
              <h3 className={`customer-name ${!isAnimating ? "fade-in" : ""}`}>
                {testimonials[currentSlide].name}
              </h3>
              <p>{testimonials[currentSlide].text}</p>
              <span
                className={`customer-rating ${!isAnimating ? "zoom-in" : ""}`}
              >
                {testimonials[currentSlide].rating}
                <i></i>
              </span>
            </div>

            {/* Side Thumbnails */}
            <div className="feedback-slider-thumb">
              <div className="thumb-prev" onClick={prevSlide}>
                <img
                  src={testimonials[getPrevIndex()].image}
                  className={!isAnimating ? "zoom-in" : ""}
                  alt="Previous Customer"
                />
                <span className="customer-rating">
                  {testimonials[getPrevIndex()].rating}
                  <i></i>
                </span>
              </div>
              <div className="thumb-next" onClick={nextSlide}>
                <img
                  src={testimonials[getNextIndex()].image}
                  className={!isAnimating ? "zoom-in" : ""}
                  alt="Next Customer"
                />
                <span className="customer-rating">
                  {testimonials[getNextIndex()].rating}
                  <i></i>
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="owl-nav">
              <button className="owl-prev" onClick={prevSlide}></button>
              <button className="owl-next" onClick={nextSlide}></button>
            </div>

            {/* Dots Navigation */}
            <div className="owl-dots">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`owl-dot ${
                    index === currentSlide ? "active" : ""
                  }`}
                >
                  <button onClick={() => goToSlide(index)}></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
