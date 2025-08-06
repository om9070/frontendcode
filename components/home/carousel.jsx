"use client"; // If using Next.js 13+

import { useState } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";

const Carousel = () => {
  const media = [
    {
      type: "video",
      src: "/meeting.mp4",
      title: "Let's Work With Bihari Team",
      description: "We Focus On Quality.",
    },
    {
      type: "image",
      src: "/coding.webp",
      title: "One Chance Must Improve Your Bussiness",
      description: "The Good Work Takes Time.",
    }
  ];

  const [index, setIndex] = useState(0);
  const current = media[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % media.length);
  };

  return (
    <div className={styles.container} onClick={handleNext}>
      {current.type === "image" ? (
        <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '2 / 1' }}>
          <Image
            src={current.src}
            alt="Hero Banner"
            fill
            priority
            style={{ objectFit: 'cover' }}
            loading="lazy"
            quality={75}
          />
        </div>

      ) : (
        <video src={current.src} className={styles.media} autoPlay muted loop   loading="lazy" priority="true"/>
      )}
      <div className={styles.overlay}>
        <h1 className={styles.header}>{current.title}</h1>
        <p className={styles.description}>{current.description}</p>
      </div>
    </div>
  );
};

export default Carousel;
