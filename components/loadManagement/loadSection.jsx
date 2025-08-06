import React from "react";
import styles from "./Load.module.css";
// import SimpleText from "./whoAm/simpleText";
import Link from "next/link";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/app/loading";
import Image from "next/image";

const SimpleText = dynamic(() => import("./whoAm/simpleText"), {
  loading: () => <LoadingSpinner />,
});

export default function LoadSection() {
  return (
    <>
      <div className={styles.herosec}>
        <div className={styles.heroleft}>
          <Image
            src="/db3.webp"
            className={styles.imagesecOne}
            alt="loadone"
            width={98}
            height={98}
            placeholder="blur"
            blurDataURL="/seo4.webp"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            style={{ borderRadius: "50px", objectFit: "cover" }}
            quality={75}
          />
          <Image
            src="/app3.webp"
            className={styles.imagesecTwo}
            alt="loadtwo"
            width={98}
            height={98}
            placeholder="blur"
            blurDataURL="/seo4.webp"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            style={{ borderRadius: "50px", objectFit: "cover" }}
            quality={75}
          />
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
              <Image
                src="/load1.webp"
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
                We Deliver High-Quality Frontend Solutions
              </h2>
              <p className={styles.description}>
                We enhance frontend performance through intelligent techniques
                such as CDN integration, lazy loading, code splitting, and
                geo-routing. By delivering static content from the nearest edge
                server and loading only essential assets per view, we ensure
                ultra-fast, responsive experiences across all devices and
                regions.
              </p>
              <Link href="/contact" className="btn btn-info">
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
                We Deliver High-Quality Backend Solutions
              </h2>
              <p className={styles.description}>
                Our backend architecture is built to handle high traffic with
                ease. We implement reverse proxy load balancers, auto-scaling
                servers, intelligent API gateways, and service mesh layers to
                evenly distribute requests and maintain uptime. Tasks are queued
                and processed asynchronously, keeping response times sharp even
                during peak load.
              </p>
              <Link href="/contact" className="btn btn-info">
                Let's Connect
              </Link>
            </div>
            {/* Left - Images */}
            <div className={`${styles.images} imagesec`}>
              <Image
                src="/load2.webp"
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
      </div>
    </>
  );
}
