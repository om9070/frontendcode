"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/components/home/Technology.module.css";

export default function LeftModule() {
  const figuresRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    figuresRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const leftMap = [
    {
      image: "/js.png",
      title: "JavaScript",
      text: ""
    },
    {
      image: "/reactjs.jpeg",
      title: "ReactJs",
      text: "this is use htmlFor testing"
    },
    {
      image: "/nextjs.png",
      title: "NextJs",
      text: "this is use htmlFor testing"
    },
    {
      image: "/react-native.png",
      title: "ReactNative",
      text: "this is use htmlFor testing"
    },
    {
      image: "/nodejs.webp",
      title: "NodeJs",
      text: "this is use htmlFor testing"
    },
    {
      image: "/express.webp",
      title: "ExpressJs",
      text: "this is use htmlFor testing"
    },
     {
      image: "/postgres.webp",
      title: "PostgreSQL",
      text: "this is use htmlFor testing"
    },
    {
      image: "/mongodb.png",
      title: "MongoDB",
      text: "this is use htmlFor testing"
    },
    {
      image: "/redis.webp",
      title: "Redis",
      text: "this is use htmlFor testing"
    },
    {
      image: "/typescript.png",
      title: "TypeScript",
      text: "this is use htmlFor testing"
    },
    {
      image: "/nginx.png",
      title: "Nginx",
      text: "this is use htmlFor testing"
    },
    {
      image: "/kafka.png",
      title: "Kafka",
      text: "this is use htmlFor testing"
    },
    {
      image: "/html.jpeg",
      title: "Html",
      text: "this is use htmlFor testing"
    },
    {
      image: "/css.jpeg",
      title: "Css",
      text: "this is use htmlFor testing"
    },{
      image: "/aws.jpeg",
      title: "Aws",
      text: "this is use htmlFor testing"
    },
    {
      image: "/bootstrap.png",
      title: "Bootstrap",
      text: "this is use htmlFor testing"
    },
    {
      image: "/docker.png",
      title: "Docker",
      text: "this is use htmlFor testing"
    },
    {
      image: "/meterial.jpeg",
      title: "MeterialUI",
      text: "this is use htmlFor testing"
    }
    
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center ">
      {leftMap.map((d, i) => (
        <figure
          ref={(el) => (figuresRef.current[i] = el)}
          key={i}
          className={`${styles.snip} ${styles.animateOnScroll}`}
        >
          <img className={styles.snip__image} src={d.image} alt="card" />
          <figcaption className={styles.snip__figcaption}>
            <h3 className={styles.snip__title}>{d.title}</h3>
            {/* <p className={styles.snip__text}>{d.text}</p> */}
          </figcaption>
          {/* <a className={styles.snip__link} href="#"></a> */}
        </figure>
      ))}
    </div>
  );
}
