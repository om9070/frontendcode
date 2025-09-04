import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Aicomponent() {
  return (
    <>
      <div className="row my-5 mx-auto align-items-center justify-content-center ">
        <div className="col-10 col-md-5 text-center">
          <Image
            className="websiteImage img-fluid"
            src="/ai.webp"
            alt="website section"
            width={98}
            height={98}
            placeholder="blur"
            blurDataURL="/seo4.webp"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            style={{ borderRadius: "10px", objectFit: "cover" }}
            quality={75}
          />
        </div>
        <div className="col-10 col-md-5 d-flex flex-column justify-content-center">
          <h1 className="card-tittle">
            <span>
              <i
                className="fa-solid fa-ranking-star"
                style={{ marginRight: "10px" }}
              ></i>
            </span>
            Natural Language Processing (NLP)
          </h1>
          <p className="font my-4">
            Transform unstructured text data into actionable insights with our
            advanced NLP solutions. Our developers create intelligent systems
            that understand, interpret, and process human language, enabling
            sentiment analysis, text classification, entity recognition, and
            language translation capabilities for enhanced user experiences.
          </p>
          {/* <ul className="font removedot">
            <li>🕷️ Crawlability & Indexing Improvements</li>
            <li>🖋️ Blog Writing & Content Marketing</li>
            <li>📄 Meta Tags & Schema Markup Optimization</li>
            <li>🏗️ On-Page SEO Optimization</li>
          </ul> */}
          <Link href="/contact" className="btn btn-info">
            Let's Connect
          </Link>
        </div>
      </div>

      <div className="backgourdImage mb-5">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="d-flex justify-content-end m-5">
            <div className="w-75 card p-3">
              <i className="fa-regular fa-object-group custom-icon"></i>
              <h1 className="font color my-2">Generative AI Development</h1>
              <p className="font my-2">
                Harness the power of cutting-edge generative AI to create
                content, automate workflows, and enhance productivity. Our team
                builds custom generative AI applications that can produce
                human-like text, generate creative content, automate
                documentation, and provide intelligent content creation
                solutions tailored to your business needs.
              </p>
            </div>
          </div>
          <div className="m-5">
            <div className="w-75 card p-3">
              <i className="fa-brands fa-bots custom-icon"></i>{" "}
              <h1 className="font color my-2">Intelligent Chatbot Development</h1>
              <p className="font my-2">
                Harness the power of cutting-edge generative AI to create
                content, automate workflows, and enhance productivity. Our team
                builds custom generative AI applications that can produce
                human-like text, generate creative content, automate
                documentation, and provide intelligent content creation
                solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
