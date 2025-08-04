import React from "react";
import styles from "./Load.module.css";
import SimpleText from "./whoAm/simpleText";
import Link from "next/link";

export default function LoadSection() {
  return (
    <>
      <div className={styles.herosec}>
        <div className={styles.heroleft}>
          <img src="/db3.jpg" className={styles.imagesecOne} alt="..." />
          <img src="/app3.jpg" className={styles.imagesecTwo} alt="..." />
        </div>
        <div className={styles.heroRight}>
          <h1 className="color">
            Smart Load Management for Frontend & Backend Systems
          </h1>
          <hr />
          <p className="my-3">
            We implement intelligent load balancing strategies across both
            frontend and backend to ensure consistent performance and
            scalability. From CDN delivery, lazy loading, and code splitting on
            the frontend to round-robin routing, server health checks, and
            auto-scaling on the backend—our solutions help your website and
            applications stay fast, stable, and resilient under any load.{" "}
          </p>
        </div>
      </div>

      <SimpleText />
      <div>
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Left - Images */}
            <div className={styles.images}>
              <img src="/load1.jpg" alt="Image 2" className={`${styles.image} imagesec`} />
            </div>

            {/* Right - Content */}
            <div className={styles.content}>
              <span className={styles.subtitle}>What we do</span>
              <h2 className={styles.title}>
                We Deliver High-Quality Frontend Solutions
              </h2>
              <p className={styles.description}>
               We enhance frontend performance through intelligent techniques such as CDN integration, lazy loading, code splitting, and geo-routing. By delivering static content from the nearest edge server and loading only essential assets per view, we ensure ultra-fast, responsive experiences across all devices and regions.
              </p>
              <Link href="/contact" className="btn btn-info">Let's Connect</Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            {/* Right - Content */}
            <div className={styles.content}>
              <span className={styles.subtitle}>What we do</span>
              <h2 className={styles.title}>
                We Deliver High-Quality Backend Solutions
              </h2>
              <p className={styles.description}>
                Our backend architecture is built to handle high traffic with ease. We implement reverse proxy load balancers, auto-scaling servers, intelligent API gateways, and service mesh layers to evenly distribute requests and maintain uptime. Tasks are queued and processed asynchronously, keeping response times sharp even during peak load.
              </p>
              <Link href="/contact" className="btn btn-info">Let's Connect</Link>
            </div>
            {/* Left - Images */}
            <div className={`${styles.images} imagesec`}>
              <img src="/load2.jpg" alt="Image 2" className={styles.image} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
