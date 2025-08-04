"use client";
import React, { useEffect } from "react";

export default function ActionTitle() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(".colorLeft, .colorRight");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Clean up on unmount
  }, []);

  return (
    <div>
      <h1 className="text-center my-5 HeadingAction color">We Focus On</h1>
      <div className="d-flex justify-content-center">
        <h1 className="colorLeft d-flex justify-content-center align-items-center">
          DEVELOPMENT
        </h1>
        <h1 className="mx-4 lineHeight"> </h1>
        <h1 className="colorRight d-flex justify-content-center align-items-center">
          DIGITAL MARKETING
        </h1>
      </div>
    </div>
  );
}
