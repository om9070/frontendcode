// SeoSection.js
import React from "react";
import styles from "./SeoSection.module.css";
import Circule from "../circuleSection/circule";
import Link from "next/link";

const SeoSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.backgroundCircles}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>SEO MANAGEMENT</h1>
          <p className={styles.subtitle}>
            Optimize meta tags, headings, content, and internal linking
            structure to improve relevancy and crawlability of your web pages.
          </p>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                <img
                  src="/seo5.jpg"
                  alt="Professional mechanic"
                  className={styles.serviceImage}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
                    <circle cx="12" cy="5" r="1" />
                    <path d="M12 7v4" />
                    <line x1="8" y1="21" x2="8" y2="17" />
                    <line x1="16" y1="21" x2="16" y2="17" />
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>Technical SEO</h3>
                <p className={styles.serviceDescription}>
                  Enhance website speed, mobile-friendliness, site structure,
                  and indexing to ensure search engines can easily access your
                  content.
                </p>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                <img
                  src="/seo1.jpg"
                  alt="Tire service"
                  className={styles.serviceImage}
                />
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>Competitor Analysis</h3>
                <p className={styles.serviceDescription}>
                  Analyze competitor keywords, content, and backlink profiles to
                  refine your strategy and stay ahead in search rankings.{" "}
                </p>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                <img
                  src="/seo6.jpg"
                  alt="Quality service tools"
                  className={styles.serviceImage}
                />
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}> SEO Audits</h3>
                <p className={styles.serviceDescription}>
                  Perform in-depth audits to identify SEO issues and provide
                  actionable insights to improve site performance and
                  visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4 mx-auto align-items-center justify-content-center backgourdImage">
        <div className="col-10 col-md-6 d-flex flex-column justify-content-center">
          <h1 className="card-tittle">
            <span style={{ marginRight: "8px",color:"blueviolet" }}>
<i className="fa-brands fa-rev"></i>            </span>
            Seo Strategy
          </h1>
          <p className=" font">
            Through ethical outreach and partnerships, we acquire high-quality backlinks that increase your domain authority and trustworthiness.
            Our team enhances your website’s structure, metadata, and content to improve relevance and visibility in search engine results.
          </p>
          <div className="my-3 background">
            <ul className="font my-2">
              <li className="removedot">
                <i className="fa-brands fa-battle-net"></i>
                 We conduct detailed keyword analysis to identify terms your target audience is actively searching for, ensuring your content aligns with market demand.
              </li>
              <li className="removedot">
                <i className="fa-brands fa-confluence"></i>
                 We develop informative, keyword-focused content that engages users and strengthens your website’s authority and ranking potential.
              </li>
              <li className="removedot">
                <i className="fa-brands fa-centos"></i>
                 Through ethical outreach and partnerships, we acquire high-quality backlinks that increase your domain authority and trustworthiness.
              </li>
              <li className="removedot">
                <i className="fa-brands fa-magento"></i>
                 We perform comprehensive SEO audits to uncover technical, on-page, and content-related issues, followed by clear, actionable recommendations.

              </li>
            </ul>
          </div>
          {/* <div className="my-3 background">
            <p className="font m-2">
              We conduct detailed keyword analysis to identify terms your target
              audience is actively searching for, ensuring your content aligns
              with market demand.
            </p>
          </div> */}

          <Link href="/contact" className="btn w-25 btn-info">Let's Connect</Link>
        </div>
        <div className="col-10 col-md-6 text-center">
          <img
            className="websiteImageSection"
            src="/seo4.jpg"
            alt="website section"
          />
        </div>
      </div>{" "}


      <div className="row my-5 mx-auto align-items-center justify-content-center ">
        <div className="col-10 col-md-5 text-center">
          <img
            className="websiteImage img-fluid"
            src="/seo2.jpg"
            alt="website section"
          />
        </div>
        <div className="col-10 col-md-5 d-flex flex-column justify-content-center">
          <h1 className="card-tittle"><span><i className="fa-solid fa-ranking-star" style={{marginRight:"10px"}}></i></span>Backlink Building</h1>
          <p className="font">
           Earn high-authority backlinks through ethical outreach and content marketing to boost domain authority and rankings.
          </p>
          <ul className="font removedot">
            <li>🕷️ Crawlability & Indexing Improvements</li>
            <li>🖋️ Blog Writing & Content Marketing</li>
            <li>📄 Meta Tags & Schema Markup Optimization</li>
            <li>🏗️ On-Page SEO Optimization</li>
          </ul>
          <Link href="/contact" className="btn btn-info">Let's Connect</Link>
        </div>
      </div>
    </>
  );
};

export default SeoSection;
