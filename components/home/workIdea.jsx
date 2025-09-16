"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function WorkIdea() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <div className="m-auto my-5 mb-3">
        <div className="row g-0" ref={sectionRef}>
          <div
            className={`col-md-5 animateOnScrollLeft ${visible ? "visible" : ""
              }`}
          >
            <Image
              src="/workSample.webp"
              className="img-fluid rounded-start"
              alt="sample"
              width={600}
              height={400}
              placeholder="blur"
              blurDataURL="/seo4.webp"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              style={{ borderRadius: "50px", objectFit: "cover" }}
              quality={75}
            />
          </div>
          <div
            className={`col-md-7 my-auto animateOnScrollRight ${visible ? "visible" : ""
              }`}
          >
            <div className="card-body">
              <h5 className="my-4  card-tittle" style={{ fontSize: "4rem", color: "linear-gradient(90deg, #00dbde, #0ea5e9)" }}>
                Grow Your Website With Our Team.
              </h5>
              <p className="card-text font" style={{ fontSize: "1.5rem",color:"#6b7280" }}>
                Partner with our expert team to build, scale, and optimize your
                website for performance, visibility, and long-term success.
              </p>
              <p className="font m-0" style={{ color: "#328E6E" }}>
                Website Analysis
              </p>
              <div
                className="progress mb-4"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-bg-success"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>
              <p className="font m-0 text-info">Code Review</p>
              <div
                className="progress mb-4"
                role="progressbar"
                aria-label="Info example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-bg-info"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <p className="font m-0 text-warning">Load Balance</p>
              <div
                className="progress mb-4"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar text-bg-warning"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
