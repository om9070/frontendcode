"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/components/home/Technology.module.css";
import Image from "next/image";

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
      image: "/js.webp",
      title: "JavaScript",
      text: "",
    },
    {
      image: "/reactjs.webp",
      title: "ReactJs",
      text: "this is use htmlFor testing",
    },
    {
      image: "/nextjs.webp",
      title: "NextJs",
      text: "this is use htmlFor testing",
    },
    {
      image: "/react-native.webp",
      title: "ReactNative",
      text: "this is use htmlFor testing",
    },
    {
      image: "/nodejs.webp",
      title: "NodeJs",
      text: "this is use htmlFor testing",
    },
    {
      image: "/express.webp",
      title: "ExpressJs",
      text: "this is use htmlFor testing",
    },
    {
      image: "/postgres.webp",
      title: "PostgreSQL",
      text: "this is use htmlFor testing",
    },
    {
      image: "/mongodb.webp",
      title: "MongoDB",
      text: "this is use htmlFor testing",
    },
    {
      image: "/redis.webp",
      title: "Redis",
      text: "this is use htmlFor testing",
    },
    {
      image: "/typescript.webp",
      title: "TypeScript",
      text: "this is use htmlFor testing",
    },
    {
      image: "/nginx.webp",
      title: "Nginx",
      text: "this is use htmlFor testing",
    },
    {
      image: "/kafka.webp",
      title: "Kafka",
      text: "this is use htmlFor testing",
    },
    {
      image: "/html.webp",
      title: "Html",
      text: "this is use htmlFor testing",
    },
    {
      image: "/css.webp",
      title: "Css",
      text: "this is use htmlFor testing",
    },
    {
      image: "/aws.webp",
      title: "Aws",
      text: "this is use htmlFor testing",
    },
    {
      image: "/bootstrap.webp",
      title: "Bootstrap",
      text: "this is use htmlFor testing",
    },
    {
      image: "/docker.webp",
      title: "Docker",
      text: "this is use htmlFor testing",
    },
    {
      image: "/meterial.webp",
      title: "MeterialUI",
      text: "this is use htmlFor testing",
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center ">
      {leftMap.map((d, i) => (
        <figure
          ref={(el) => (figuresRef.current[i] = el)}
          key={i}
          className={`${styles.snip} ${styles.animateOnScroll}`}
        >
          <Image
            className={styles.snip__image}
            src={d.image}
            alt="card"
            width={1000}
            height={100}
            placeholder="blur"
            blurDataURL="/ads1.png"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />

          <figcaption className={styles.snip__figcaption}>
            <h3 className={styles.snip__title}>{d.title}</h3>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
