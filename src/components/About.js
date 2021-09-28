import React from "react";
function About() {
    return (
      <>
        <div>
          <h1 className="title"> Tish Faroul ⚡️🎧🌙 </h1>
          <p className="about-info">
            Software Engineering Student at Flatiron School
            <br />
            Open to new opportunities/positions
            <br />
            Reach out here:
          </p>
        </div>
        <br />
  
        <footer className="footer">
          <a href="mailto:lfaroul14@gmail.com">
            {" "}
            <img
              className="img-footer"
              alt="EMAIL"
              src="https://www.vippng.com/png/detail/113-1134424_logo-email-preto-png-transparent-background-logo-email.png"
              width="180"
              height="120"
            />{" "}
          </a>
          <span>
            <a href="https://github.com/LatishaFar1">
              {" "}
              <img
                className="img-footer"
                alt="GITHUB"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width="120"
                height="120"
              />{" "}
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/latisha-faroul/">
              {" "}
              <img
                className="img-footer"
                alt="LINKEDIN"
                src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                width="120"
                height="120"
              />{" "}
            </a>
          </span>
        </footer>
      </>
    );
  }
  
  export default About;
  