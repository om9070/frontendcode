import React from "react";
import style from "./SectionA.module.css";
import Link from "next/link";

export default function SectionA() {
  return (
    <>
      <div className={style.container}>
        <div className={style.contentLeft}>
          <div className={style.row}>
            <div className={style.imgWrapper}>
              <img src="/digital/digital1.jpg" alt="digital" />
            </div>
            <div className={style.imgWrapper}>
              <img src="/digital/digital2.jpg" alt="digital2" />
            </div>
            <div className={style.imgWrapper}>
              <img src="/digital/digital10.jpg" alt="digital10" />
            </div>
            <div className={style.imgWrapper}>
              <img src="/digital/digital4.jpg" alt="digital4" />
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
            <Link href="/contact" className="btn btn-info font">Let's Connect</Link>
          </div>
        </div>
      </div>
    </>
  );
}
