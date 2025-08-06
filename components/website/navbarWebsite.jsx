import React from "react";
import styles from "./NavWebsite.module.css";
import Image from "next/image";

export default function NavbarWebsite({ header, description, route }) {
  return (
    <div className={styles["section-hero"]}>
      <div className={styles.hero}>
        <div className={styles["hero-text-box"]}>
          <h1 className={styles["heading-primary"]}>
            {header}
          </h1>
          <p className={styles["hero-description"]}>
            {description}
          </p>

          <p style={{ color: "darkgreen", fontWeight: "bold", fontSize: "20px" }}>Service / {route}</p>
        </div>

        <div className={styles["hero-img-box"]}>

          <Image
            src="/website-bg.webp"
            alt="Woman enjoying food"
            className={styles["hero-img"]}
            width={98}
            height={500}
            placeholder="blur"
            blurDataURL="/seo4.webp"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            style={{ borderRadius: "8px", objectFit: "cover" }}
            quality={75}
          />
        </div>

      </div>
    </div>
  );
}
