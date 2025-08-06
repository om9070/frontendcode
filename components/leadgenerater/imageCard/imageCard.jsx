import React from "react";
import Image from "next/image";

export default function ImageCard() {
  return (
    <div className="my-6" style={{ height: "100vh" }}>
      <div className="imageCard">
        <Image
          src="/digital/digital8.webp"
          className="backgourndImage"
          alt="digital8"
          width={98}
          height={98}
          placeholder="blur"
          blurDataURL="/seo4.webp"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          style={{ borderRadius: "8px", objectFit: "cover" }}
          quality={75}
        />
      </div>
      <div className="containercard">
        <div className="me-4 pb-3 leftCard">
          <h1 className="font my-2" style={{ color: "#00dbde" }}>
            Data-Driven Lead Generation Services That Deliver Real Business
            Growth
          </h1>
          <p className="font">
            We go beyond just driving traffic — we engineer conversion-focused
            strategies that bring in qualified leads. From ad creation to
            analytics, we manage every step of your lead generation funnel with
            precision. Whether you’re looking to scale through paid media or
            organic reach, our strategies are built to convert interest into
            action.
          </p>
        </div>
        <div>

          <Image
            src="/digital/digital7.webp"
            alt="Image 2"
            className="imagesec"
            width={430}
            height={430}
            placeholder="blur"
            blurDataURL="/seo4.webp"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            style={{ borderRadius: "8px", objectFit: "cover" }}
            quality={75}
          />
        </div>
        <div className="ms-3 RigthCard"></div>
      </div>
    </div>
  );
}
