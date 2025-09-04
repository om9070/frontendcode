import React from "react";

export default function Email() {
  return (
    <>
      <div className="email">
        <h1>Let's Connect Our Team</h1>
        <div className="d-flex whatsubsec">
          <a href="mailto:vanapextechnologies@gmail.com?subject=Hello%20there&body=Hi%20team,">
            <i className="fa-solid fa-envelope-circle-check"></i>
          </a>
          <a
            href="https://wa.me/918340606970?text=Hello%20I%20am%20interested"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>{" "}
          </a>
        </div>
      </div>
    </>
  );
}
