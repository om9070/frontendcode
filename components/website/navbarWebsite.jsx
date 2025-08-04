import React from "react";
import styles from "./NavWebsite.module.css";

export default function NavbarWebsite({header,description,route}) {
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

          <p style={{color:"darkgreen",fontWeight:"bold",fontSize:"20px"}}>Service / {route}</p>
        </div>

        <div className={styles["hero-img-box"]}>
          <img
            src="/website-bg.png"
            alt="Woman enjoying food"
            className={styles["hero-img"]}
          />
        </div>

      </div>
    </div>
  );
}
