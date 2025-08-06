import React from "react";
import styles from "@/components/loadManagement/Load.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SocialSection() {
  const metaname = [
    "FACEBOOK ADS PROMOSTION",
    "INSTAGRAM ADS PROMOSTION",
    "GOOGLE ADS PROMOSTION",
  ];
  return (
    <>
      <div className="my-5 multipleimagesection">
        <div className="row">
          <div className="col-md-4 d-flex flex-column  justify-content-center align-items-center">
            <h1 className="font color">
              Targeted{" "}
              <span className="text-success-emphasis">
                Facebook & Instagram Ads
              </span>{" "}
              That Turn Scrolls into Sales
            </h1>
            <p className="font">
              We specialize in crafting high-performing ad campaigns across
              Facebook, Instagram, and the entire Meta Ads network. From
              compelling visuals to laser-focused audience targeting, our
              strategies are built to attract attention, spark engagement, and
              drive qualified leads. Whether it's brand awareness, lead
              generation, or sales, we handle every step — including A/B
              testing, retargeting, and performance optimization — to ensure
              your ads deliver measurable ROI.
            </p>
          </div>
          <div className="col-md-8 manageimage">
            <Image
              src="/digital/digital5.webp"
              alt="imagesection"
              width={250}
              height={250}
              placeholder="blur"
              blurDataURL="/seo4.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: "cover" }}
              quality={75}
            />
            <Image
              src="/ads/ads9.webp"
              alt="imagesection"
              width={250}
              height={250}
              placeholder="blur"
              blurDataURL="/seo4.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: "cover" }}
              quality={75}
            />

            <Image
              src="/digital/digital3.webp"
              alt="imagesection"
              width={250}
              height={250}
              placeholder="blur"
              blurDataURL="/seo4.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: "cover" }}
              quality={75}
            />
            <Image
              src="/ads/ads8.webp"
              alt="imagesection"
              width={250}
              height={250}
              placeholder="blur"
              blurDataURL="/seo4.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: "cover" }}
              quality={75}
            />
            <Image
              src="/digital/digital4.webp"
              alt="imagesection"
              width={250}
              height={250}
              placeholder="blur"
              blurDataURL="/seo4.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: "cover" }}
              quality={75}
            />
            <Image
              src="/ads/ads7.webp"
              alt="imagesection"
              width={250}
              height={250}
              placeholder="blur"
              blurDataURL="/seo4.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ objectFit: "cover" }}
              quality={75}
            />
          </div>
        </div>
      </div>

      {/* icon text */}
      <div>
        <h1 className="card-tittle text-center my-4 font fs-1">
          SOCIAL MEDIA PROMOTION
        </h1>
        <div className="addsection">
          {metaname.map((data, index) => {
            return (
              <div className="boxAds" key={index}>
                <i
                  className={`fa-brands fa-${data
                    .split(" ")[0]
                    .toLocaleLowerCase()}`}
                ></i>
                <h1 className="text-center font" style={{ color: "#a4ccd9" }}>
                  {data}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      {/* facebook instagram google */}
      <div>
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Left - Images */}
            <div className={styles.images}>
              <Image
                src="/ads/ads11.webp"
                alt="Image 2"
                className={`${styles.image} imagesec`}
                width={98}
                height={98}
                placeholder="blur"
                blurDataURL="/seo4.webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ borderRadius: "50px", objectFit: "cover" }}
                quality={75}
              />
            </div>

            {/* Right - Content */}
            <div className={styles.content}>
              <span className={styles.subtitle}>What we do</span>
              <h2 className={styles.title}>
                Location-Based Facebook Content Promotion That Gets You Noticed
              </h2>
              <p className={styles.description}>
                Want your content to trend in a specific city, state, or region?
                We help businesses go viral locally by promoting content on
                Facebook tailored to targeted audiences by location, interests,
                and behavior. Whether you're launching a local campaign, event,
                or product, we ensure your content reaches the right people at
                the right time — maximizing visibility, engagement, and leads
                within your desired area.
              </p>
              <Link href="/contact" className="btn btn-info font">
                Let's Connect
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            {/* Right - Content */}
            <div className={styles.content}>
              <span className={styles.subtitle}>What we do</span>
              <h2 className={styles.title}>
                Engaging Instagram Marketing That Builds Brands and Drives
                Action
              </h2>
              <p className={styles.description}>
                We create visually compelling and strategically planned
                Instagram campaigns that capture attention, grow your following,
                and convert viewers into customers. From eye-catching reels and
                story ads to targeted promotions and influencer collaborations,
                our Instagram strategies are built to boost visibility and
                engagement. Whether your goal is brand awareness, product sales,
                or lead generation — we deliver scroll-stopping content with
                measurable impact.
              </p>
              <Link href="/contact" className="btn btn-info font">
                Let's Connect
              </Link>
            </div>
            {/* Left - Images */}
            <div className={`${styles.images} imagesec`}>
              <Image
                src="/ads/ads10.webp"
                alt="Image 2"
                className={styles.image}
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
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            {/* Left - Images */}
            <div className={styles.images}>
              <Image
                src="/ads/ads6.webp"
                alt="Image 2"
                className={`${styles.image} imagesec`}
                width={98}
                height={98}
                placeholder="blur"
                blurDataURL="/seo4.webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                style={{ borderRadius: "50px", objectFit: "cover" }}
                quality={75}
              />
            </div>

            {/* Right - Content */}
            <div className={styles.content}>
              <span className={styles.subtitle}>What we do</span>
              <h2 className={styles.title}>
                High-Impact Google Ads Campaigns That Deliver Results
              </h2>
              <p className={styles.description}>
                We create and manage results-driven Google Ads campaigns that
                put your business at the top when it matters most. From Search
                and Display to Shopping and YouTube ads, we handle everything —
                including keyword research, ad copywriting, bidding strategy,
                and continuous optimization. Our campaigns are designed to drive
                qualified traffic, generate leads, and maximize ROI with clear,
                measurable results.
              </p>
              <Link href="/contact" className="btn btn-info font">
                Let's Connect
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
