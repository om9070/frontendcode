import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function CardsSection() {
  return (
    <>
      <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="section-header text-center">
              <h2 className="fw-bold fs-1">
                Our
                <span className="b-className-secondary"> Website </span>Services
              </h2>
              <p className="sec-icon">
                <i className="fa-solid fa-gear"></i>
              </p>
            </div>
          </div>
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3>Custom Website Development</h3>
                <p>
                  We build high-performing, SEO-friendly, and scalable websites
                  tailored to your brand and business goals. From static pages
                  to dynamic platforms, we’ve got you covered.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-arrows-down-to-people"></i>
                </div>
                <h3>UI/UX Design</h3>
                <p>
                  Stunning visuals meet intuitive interfaces. Our UI/UX design
                  services ensure a smooth and engaging experience for your
                  users across all devices.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h3>Website Maintenance & Support</h3>
                <p>
                  Keep your website running at its best. We offer regular
                  updates, security checks, and performance monitoring to ensure
                  long-term stability and success.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-money-check-dollar"></i>
                </div>
                <h3>Flexible pricing models</h3>
                <p>
                  Choose from multiple pricing options tailored to your business
                  needs, ensuring cost-effective and scalable solutions.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
                <h3>SEO & Performance Optimization</h3>
                <p>
                  Improve your search rankings and site speed with our on-page
                  SEO and performance enhancement services.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-people-group"></i>
                </div>
                <h3>Role Based management</h3>
                <p>
                  Manage access and permissions with ease using our secure,
                  role-based user management system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row my-5 mx-auto align-items-center justify-content-center ">
        <div className="col-10  col-md-5 text-center">
          <Image
            className="websiteImage img-fluid"
            src="/website4.webp"
            alt="website section"
            width={98}
            height={98}
            placeholder="blur"
            blurDataURL="/seo4.webp"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            style={{ borderRadius: "50px", objectFit: "cover" }}
            quality={75}
          />
        </div>
        <div className="col-10 col-md-5 d-flex flex-column justify-content-center">
          <h1 className="card-tittle"><span><i className="fa-solid fa-handshake" style={{ marginRight: "10px" }}></i></span>Discovery & Planning</h1>
          <p className="font">
            Define the website's goals, target audience, core features, and
            business objectives. Prepare a project brief and sitemap.
          </p>
          <ul className="font">
            <li>Client requirements gathering</li>
            <li>Competitor research</li>
            <li>Site architecture planning</li>
            <li>Wireframing (basic layout structure)</li>
          </ul>
          <Link href="/contact" className="btn btn-info font">Let's Connect</Link>
        </div>
      </div>

      <div className="row my-5 mx-auto align-items-center justify-content-center ">
        <div className="col-10 mb-4 col-md-5 d-flex flex-column justify-content-center ">
          <h1 className="card-tittle"><span><i className="fa-solid fa-object-ungroup" style={{ marginRight: "10px" }}></i></span>Design Phase</h1>
          <p className=" font">
            Craft a visual and interactive design that is user-friendly,
            responsive, and aligned with your brand.
          </p>
          <ul className="font">
            <li>Create high-fidelity mockups</li>
            <li>User journey mapping</li>
            <li>Responsive mobile-first design</li>
            <li>Design approval from stakeholders</li>
          </ul>
          <Link href="/contact" className="btn btn-info font">Let's Connect</Link>
        </div>
        <div className="col-10 col-md-5 text-center">
          <Image
            className="websiteImage img-fluid"
            src="/website1.webp"
            alt="website section"
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

      <div className="row my-5 mx-auto align-items-center justify-content-center ">
        <div className="col-10 col-md-5 text-center">
          <Image
            className="websiteImage img-fluid"
            src="/website2.webp"
            alt="website section"
            width={98}
            height={98}
            placeholder="blur"
            blurDataURL="/seo4.webp"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            style={{ borderRadius: "50px", objectFit: "cover" }}
            quality={75}
          />
        </div>
        <div className="col-10 col-md-5 d-flex flex-column justify-content-center">
          <h1 className="card-tittle"><span><i className="fa-solid fa-laptop" style={{ marginRight: "10px" }}></i></span>Frontend Development</h1>
          <p className="font">
            Convert design into code using HTML, CSS, JavaScript, or modern
            frameworks like React/Next.js.
          </p>
          <ul className="font">

            <li>Code layout with semantic HTML</li>
            <li>CSS Modules / Tailwind for styling</li>
            <li>Implement animations and responsiveness</li>
            <li>Component-based structure (for React/Next)</li>
          </ul>
          <Link href="/contact" className="btn btn-info font">Let's Connect</Link>
        </div>
      </div>

      <div className="row my-5 mx-auto align-items-center justify-content-center ">
        <div className="col-10 mb-4 col-md-5 d-flex flex-column justify-content-center">
          <h1 className="card-tittle"><span><i className="fa-brands fa-quinscape" style={{ marginRight: "10px" }}></i></span>APi Implementation</h1>
          <p className="font">
            We integrate third-party APIs (payment gateways, CRMs, social logins, etc.) to enhance functionality and streamline workflows.
          </p>
          <ul className="font" >
            <li>Real-time syncing </li>
            <li>Scalable and maintainable </li>
          </ul>
          <Link href="/contact" className="btn btn-info font">Let's Connect</Link>
        </div>
        <div className="col-10 col-md-5 text-center">
          <Image
            className="websiteImage img-fluid"
            src="/website3.webp"
            alt="website section"
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

    </>
  );
}
