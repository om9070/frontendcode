import React from "react";
import style from "./Background.module.css";
import Image from "next/image";

export default function ThreeImage({ img1, img2, img3, title, description }) {
  return (
    <>
      <div className={style.mainSection}>
        <div className={style.upperSection}>
          <div className={style.box}>
            {/* <img src={img1} className={style.imagesec} alt="showing" /> */}
            <Image
              src={img1}
              className={style.imagesec}
              alt="showing"
              width={98}
              height={98}
              placeholder="blur"
              blurDataURL="/seo4.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ borderRadius: "50px", objectFit: "cover" }}
              quality={75}
            />
          </div>
          <div className={style.box}>
            {/* <img src={img2} className={style.imagesec} alt="showing1" /> */}
            <Image
              src={img2}
              className={style.imagesec}
              alt="showing1"
              width={98}
              height={98}
              placeholder="blur"
              blurDataURL="/seo4.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ borderRadius: "50px", objectFit: "cover" }}
              quality={75}
            />
          </div>
        </div>
        <div className={style.imagedown}>
          {/* <img src={img3} className={style.imagesec} alt="showing2" /> */}
          <Image
            src={img3}
            className={style.imagesec}
            alt="showing2"
            width={98}
            height={98}
            placeholder="blur"
            blurDataURL="/seo4.webp"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            style={{ borderRadius: "50px", objectFit: "cover" }}
            quality={75}
          />
        </div>
        <div className={style.lowercontent}>
          <h1 className="font color">{title}</h1>
          <p className="font my-3">{description}</p>
        </div>
      </div>
    </>
  );
}
