import React, { useState } from "react";
import "./About.css";


const About = () => {
  return (
    <div className="about-sec">
      <div className="desc">
        <h1>About Us</h1>
        <h2>Project Description</h2>
        <p>
          Using React.JS, the Youtube API, and other libraries, We created our
          version of a Youtube Clone! <br /> We decided to incorporate class
          components, React Hooks, and React Styling to solidify the language
          that we are currently practicing in.
        </p>
      </div>


    <div className="bio-boxes">
      <div className="about-bio">
        <img src="https://hosting.photobucket.com/images/b619/ThaSoundtrack/ezgif.com-gif-maker.gif?width=450&height=278&crop=fill" alt=""></img>
        <a href="https://www.linkedin.com/in/candiceagard/" target="_blank" rel="noreferrer">
          <img className="bio-icon" src="https://avatars.githubusercontent.com/u/47721785?v=4" alt=""></img>
        </a>
        <h3>I'm leaning on a fence between past and present tense</h3>
        <p>Candy</p>
        </div>


      <div className="about-bio">
        <img src="https://camo.githubusercontent.com/5602835424300ae0f402641fe7fc65058c73c2d69df4e952f5d364aba9edd722/68747470733a2f2f6c6976652e737461746963666c69636b722e636f6d2f36353533352f35303836383033303133325f376435653665643438305f632e6a7067" alt=""></img>
        <a href="https://www.linkedin.com/in/kathy-gee-a25b97a9/" target="_blank" rel="noreferrer">
          <img className="bio-icon" src="https://avatars.githubusercontent.com/u/21033013?v=4" alt=""></img>
        </a>

        <h3>I love the color pink and Popeyes Chicken</h3>
        <p>Kathy</p>
      </div>
    </div>
  </div>
  );
};

export default About;
