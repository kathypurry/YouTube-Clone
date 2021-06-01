/*
Right idea to utilize useState in your functional components, just
remember to clean up unused imports before committing code.
*/
import React from "react";
import katcandypile from "./katcandypile.png"
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
        <img
		    className="youtube-logo"
		    src={katcandypile}
		    alt="YouTube logo"
		/>
      </div>


    <div className="bio-boxes">
      <div className="about-bio">


        <img className="inverted" src="https://hosting.photobucket.com/images/b619/ThaSoundtrack/ezgif.com-gif-maker.gif?width=450&height=278&crop=fill"></img>
        <a href="https://alekichrome.github.io/" target="_blank">
          <img className="bio-icon inverted" src="https://avatars.githubusercontent.com/u/47721785?v=4"></img>

        </a>
        <h3>I'm leaning on a fence between past and present tense</h3>
        <p>Candy</p>
        </div>


      <div className="about-bio">

        <img className="inverted" src="https://hosting.photobucket.com/images/b619/ThaSoundtrack/ezgif.com-gif-maker_(1).gif?width=1920&height=1080&fit=bounds"></img>
        <a href="https://kathypurry.github.io/" target="_blank">
          <img className="bio-icon inverted" src="https://avatars.githubusercontent.com/u/21033013?v=4"></img>

        </a>

        <h3>I love the color pink and Popeyes Chicken</h3>
        <p>Kathy</p>
      </div>
    </div>
  </div>
  );
};

export default About;
