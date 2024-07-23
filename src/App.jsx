import React from "react";
import "./App.css";
import ProfileInfo from "./components/ProfileInfo";
import Link from "./components/Link";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";

function HomePage() {
  return (
    <div className="container">
      {/* Profle picture and name */}
      <ProfileInfo></ProfileInfo>

      {/* About me */}
      <div className="section">
        <h2 style={{ marginBottom: "5px" }}>Background</h2>
        <AboutMe></AboutMe>
      </div>

      {/* Skills */}
      <div className="section">
        <h2 style={{ marginBottom: "5px" }}>Skills</h2>
        <ul>
          <li>
            <h3>Programming Languages</h3>
            <Skills
              icon="images/java icon.png"
              alternative="java icon"
              text="Java"
            ></Skills>

            <Skills
              icon="images/html css javascript.png"
              alternative="htmlcssjs icon"
              text="HTML CSS Javascript"
            ></Skills>

            <Skills
              icon="images/c icon.png"
              alternative="c icon"
              text="C"
            ></Skills>

            <Skills
              icon="images/python icon.png"
              alternative="python icon"
              text="Python"
            ></Skills>

            {/* <Skills
              icon="images/scala icon.png"
              alternative="scala icon"
              text="Scala"
            ></Skills> */}
          </li>
          <li>
            <h3>Frameworks</h3>
            <Skills
              icon="images/javafx icon.png"
              alternative="javafx icon"
              text="JavaFX"
            ></Skills>

            <Skills
              icon="images/react icon.png"
              alternative="react icon"
              text="ReactJS ExpressJS NodeJS"
            ></Skills>
          </li>

          <li>
            <h3>Database</h3>
            <Skills
              icon="images/mysql icon.png"
              alternative="mysql icon"
              text="MySQL"
            ></Skills>

            <Skills
              icon="images/mongodb icon.png"
              alternative="mongodb icon"
              text="MongoDB"
            ></Skills>
          </li>

          <li>
            <h3>Soft Skills</h3>
            <p>Teamwork</p>
            <p>Fast Learner</p>
            <p>Adaptive</p>
            <p>Communication</p>
          </li>
        </ul>
      </div>

      {/* Projects */}
      <div className="section">
        <h2 style={{ marginBottom: "5px" }}>Projects</h2>
        <Project></Project>
      </div>

      {/* Resume */}
      <div className="section">
        <h2>My Resume</h2>
        {/* <a className="pdf" href="/public/images/resume.pdf" target="_blank">
          View My Resume (PDF)
        </a> */}
        <iframe
          src="images/resume.pdf"
          width="100%"
          height="1130px"
          title="Resume PDF"
        />
      </div>

      {/* contact info */}
      <div className="section">
        <h2 style={{ marginBottom: "5px" }}>Contact Information</h2>
        <Link
          icon="images/gmail icon.png"
          url="mailto:huy.buivu12345@gmail.com"
          text="huy.buivu12345@gmail.com"
          alternative="gmail icon"
        ></Link>

        <Link
          icon="images/phone icon.png"
          url="tel:1 (306) 930-8460"
          text="1 (306) 930-8460"
          alternative="phone icon"
        ></Link>
      </div>

      {/* Links */}
      <div className="section">
        <h2 style={{ marginBottom: "5px" }}>Links</h2>

        {/* <Link
          icon="images/facebook icon.png"
          text="Facebook"
          url="https://www.facebook.com/buivuanhhuy"
          alternative="facebook icon"
        ></Link>

        <Link
          icon="images/instagram icon.png"
          text="Instagram"
          url="https://www.instagram.com/buivuanhhuy/"
          alternative="instagram icon"
        ></Link>

        <Link
          icon="images/tiktok icon.png"
          text="Tiktok"
          url="https://www.tiktok.com/@buivuanhhuy"
          alternative="tiktok icon"
        ></Link> */}

        <Link
          icon="images/linkedin icon.png"
          text="LinkedIN"
          url="https://www.linkedin.com/in/huy-bui-1467a8277/"
          alternative="linkedin icon"
        ></Link>

        <Link
          icon="images/github icon.png"
          text="Github"
          url="https://github.com/huybuivuanh?tab=repositories"
          alternative="github icon"
        ></Link>

        {/* Footer */}
        <div className="section" style={{ alignItems: "center" }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back To Top
          </button>
          <p>This website is built using ReactJS and hosted on AWS Amplify</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
