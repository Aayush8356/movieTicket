import React from "react";
import "../style/extra.scss";
const Footer = () => {
  const channel = "https://www.youtube.com/channel/UCXngLRpYFVsaYranOcsTOiw";
  const insta = "https://www.instagram.com/aayushgupta.me";
  const linkedIn = "https://www.linkedin.com/in/aayushgupta23/";
  return (
    <footer
      style={{
        borderTop: "1px solid gray",
      }}
    >
      <div>
        <h1>Moviezzz</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href={channel} target={"blank"}>
            YouTube
          </a>
          <a href={insta} target={"blank"}>
            Instagram
          </a>
          <a href={linkedIn} target={"blank"}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
