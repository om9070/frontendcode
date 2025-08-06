import React from "react";
import style from "./SectionA.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SectionA() {
  return (
    <>
      <div className={style.container}>
        <div className={style.contentLeft}>
          <div className={style.row}>
            <div className={style.imgWrapper}>
              {/* <img src="/digital/digital1.webp" alt="digital" /> */}
              <Image
                src="/digital/digital1.webp"
                alt="digital"
                width={98}
                height={98}
                placeholder="blur"
                blurDataURL="/seo4.webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ borderRadius: "50px", objectFit: "cover" }}
                quality={75}
              />
            </div>
            <div className={style.imgWrapper}>
              {/* <img src="/digital/digital2.webp" alt="digital2" /> */}
              <Image
                src="/digital/digital2.webp"
                alt="digital2"
                width={98}
                height={98}
                placeholder="blur"
                blurDataURL="/seo4.webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ borderRadius: "50px", objectFit: "cover" }}
                quality={75}
              />
            </div>
            <div className={style.imgWrapper}>
              <img src="/digital/digital10.webp" alt="digital10" />
              <Image
                // src={testimonials[currentSlide].image}
                // className={!isAnimating ? "zoom-in" : ""}
                // alt="Customer Feedback"

                src="/digital/digital10.webp"
                alt="digital10"
                width={98}
                height={98}
                placeholder="blur"
                blurDataURL="/seo4.webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ borderRadius: "50px", objectFit: "cover" }}
                quality={75}
              />
            </div>
            <div className={style.imgWrapper}>
              {/* <img src="/digital/digital4.webp" alt="digital4" /> */}
              <Image
                src="/digital/digital4.webp"
                alt="digital4"
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
        </div>
        <div className={style.contentRight}>
          <div className={style.content}>
            <h4>Welcome To</h4>
            <h2 className="font" style={{ color: "#00dbde" }}>
              Smart Campaigns. Real Results....
            </h2>
            <p className="font">
              We specialize in crafting high-converting lead generation
              strategies that are customized to align with your business
              objectives and target audience. From precision-targeted paid
              advertising campaigns to SEO-driven content funnels and dynamic
              social media strategies, we build systems that do more than just
              drive traffic — they generate real, qualified leads. Our approach
              combines compelling creatives, strategic funnel design, audience
              segmentation, and continuous performance optimization to ensure
              your brand consistently attracts the right prospects, nurtures
              their interest, and converts them into loyal customers. At the
              core of everything we do lies a simple mission: Attract. Engage.
              Convert. Grow.
            </p>
            <Link href="/contact" className="btn btn-info font">
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
