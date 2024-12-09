import React from "react";
import "./Home.css";
import MeEmoji from "./MeEmoji.png";
import GithubLogo from "./GithubLogo.svg";
import LinkedinLogo from "./LinkedinLogo.png";
import EmailLogo from "./EmailLogo.png";

export const Home = () => {
  return (
    <div className = "HomeContainer" id = "Home">
      <div>
        <img src={MeEmoji} alt = "MeEmojiNotLoading" className="MeEmoji"/>
          <h1>
            Hi! I'm <span style={{ color: "#00b4d8" }}>Sriram Koukuntla</span>.
          </h1>
          <p style={{ marginTop: "10px", fontSize: "1.2rem", color: "#bdbdbd" }}>
            Prev Full Stack Intern @ PerformVu | CS & Math
          </p>
          <a href="https://github.com/sriramkoukuntla" target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo} alt = "Github: github.com/sriramkoukuntla" className="GithubLogo"/>
          </a>
          <a href="linkedin.com/in/sriram-koukuntla" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinLogo} alt = "LinkedIn: linkedin.com/in/sriram-koukuntla" className="LinkedinLogo"/>
          </a>
          <a href="mailto:skoukuntla@umass.edu" target="_blank" rel="noopener noreferrer">
            <img src={EmailLogo} alt = "Email: skoukuntla@umass.edu" className="EmailLogo"/>
          </a>
      </div>
      <div className = "Contact">
      </div>
    </div>
  );
};

    