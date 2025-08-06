"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Faq() {
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

  let data = [
    {
      question: "What industries do you serve?",
      answer:
        "We work with a wide range of industries, including healthcare, retail, education, real estate, and more. Our solutions are tailored to meet the unique needs of each client.",
    },
    {
      question: "How long does it take to build a website or app?",
      answer:"Project timelines vary depending on complexity. A basic website can take 2–4 weeks, while a custom app may take 6–12 weeks or more. We provide a clear timeline after discussing your requirements."
    },
    {
      question: "Do you offer SEO services after website launch?",
      answer:"Yes, we offer ongoing SEO optimization and content strategies to help you rank higher and stay competitive in search engines."    },
    {
      question: "Can you manage my social media advertising campaigns?",
      answer:"Absolutely. We create, run, and optimize targeted ad campaigns across platforms like Facebook, Instagram, and LinkedIn to generate leads and conversions."    },
    {
      question: "What’s included in your graphic design services?",
      answer: "We offer logo design, brand identity, banners, social media creatives, infographics, and more—customized to your brand’s voice and goals."
    },
    {
      question: "Is web hosting included with the website development?",
      answer:"We offer flexible hosting plans, and you can choose to host with us or use your preferred provider. We also handle migration and setup."    },
    {
      question: "How do you generate leads for my business?",
      answer: "We use data-driven marketing strategies including ads, landing pages, SEO, and email campaigns to attract and convert high-quality leads."
    },
    {
      question: "What is load management, and why is it important?",
      answer: "Load management ensures your website or app performs smoothly during high traffic periods. It prevents crashes and slowdowns, improving user experience and reliability."
    },
    {
      question: "Will I have full ownership of the website/app after completed?",
      answer:"Yes. Upon final payment, you will have full ownership of the code, content, and design we create for you."    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer support packages to keep your website or app updated, secure, and functioning optimally after launch."
    }
  ];

  return (
    <>
      <p className="HeadingAction color my-4 text-center">
        Frequently Asked Questions (FAQ)
      </p>
      <div
        className={`faq my-4 animateOnScrollLeft ${visible ? "visible" : ""}`}
        ref={sectionRef}
      >
        {data.map((d, id) => {
          return (
            <div key={id}>
              <input id={`faq-a${id}`} type="checkbox" />
              <label htmlFor={`faq-a${id}`} >
                <p className="faq-heading">{d.question}</p>
                <div className="faq-arrow"></div>
                <p className="faq-text">{d.answer}</p>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
