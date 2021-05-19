import React from "react";
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
        <h2>Candy</h2>
        <p>I'm leaning on a fence between past and present tense</p>
        </div>

      <div className="about-bio">
        <h2>Kathy</h2>
        <p>I love the color pink and Popeyes Chicken</p>
      </div>
    </div>
  </div>
  );
};

export default About;
