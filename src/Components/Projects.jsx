import "./projects.scss";
import "../images/readEasy.jpg";

import findSparks from "../images/findSparks.jpg";
import readEasy from "../images/readEasy.jpg";
import simpsons from "../images/simpsons.jpg";
import nowness from "../images/nowness.jpg";
import weatherApp from "../images/weatherApp.jpg";
import svgAnimation from "../images/svgAnimation.jpg";

const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="container-left">
          <div className="tech">
            <h4>React | Node | Redux | SQL | SCSS</h4>
          </div>
          <div className="name">
            <h2>Find Sparks Dating App </h2>
          </div>
          <div className="three">
            <p>
              A live dating app with front-end, back-end and SQL database.
              Includes login, registration, bespoke matching and sorting
              algorithm, messaging functionality, selfie storage and security
              features.
            </p>
            <p>Create a user account or log in with email: a@a.com and password: password to look around</p>
            {/* <p>
              Security features included to prevent SQL injection, supports
              multi-device login and more! Created as a group of 4 in six weeks.
            </p> */}
          </div>
        </div>
        <div className="container-2">
          <a
            href="https://find-sparks.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={findSparks} alt="" />{" "}
          </a>
        </div>
        <div className="container-3">
          <a
            href="https://find-sparks.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="green"
          >
            view project
          </a>
        </div>
      </div>

      <div className="project">
        <div className="container-left">
          <div className="tech">
            <h4>React | GSAP | HTML | SCSS</h4>
          </div>
          <div className="name">
            <h2>Read Easy - Learn to Read (Desktop Only)</h2>
          </div>
          <div className="three">
            <p>
              A hackathon challenge with the brief to help children learning to
              read. Features text-to-speech functionality. Desktop Only.
            </p>
          </div>
        </div>
        <div className="container-2">
          <a
            href="https://read-easy.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="pink"
          >
            <img src={readEasy} alt="" />
          </a>
        </div>
        <div className="container-3">
          <a
            href="https://read-easy.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="pink"
          >
            view project
          </a>
        </div>
      </div>

      <div className="project">
        <div className="container-left">
          <div className="tech">
            <h4>Vanilla JS | DOM Manipulation</h4>
          </div>
          <div className="name">
            <h2>Weather App </h2>
          </div>
          <div className="three">
            <p>
              A weather forecasting application that uses the Geolocator API in
              the browser navigation and calls API data to return weather and
              sunset data based on either a users location or on a location
              inputted by the user.
            </p>
          </div>
        </div>
        <div className="container-2">
          <a
            href="https://weather-app.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="blue"
          >
            <img src={weatherApp} alt="" />
          </a>
        </div>
        <div className="container-3">
          <a
            href="https://weather-app.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="blue"
          >
            view project
          </a>
        </div>
      </div>

      <div className="project">
        <div className="container-left">
          <div className="tech">
            <h4>HTML | SCSS</h4>
          </div>
          <div className="name">
            <h2>Nowness Homage Piece </h2>
          </div>
          <div className="three">
            <p>
              A replica web page built in HTML and SCSS to a professional
              standard. Includes drop-down menu created in SCSS.
            </p>
          </div>
        </div>
        <div className="container-2">
          <a
            href="https://nowness.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="pink"
          >
            {" "}
            <img src={nowness} alt="" />
          </a>
        </div>
        <div className="container-3">
          <a
            href="https://nowness.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="pink"
          >
            view project
          </a>
        </div>
      </div>

      <div className="project">
        <div className="container-left">
          <div className="tech">
            <h4>React | Redux | HTML | SCSS</h4>
          </div>
          <div className="name">
            <h2>Simpsons Quote Generator </h2>
          </div>
          <div className="three">
            <p>
              An app retrieving simpsons characters and their quotes from an
              API. Includes functionality to like, delete characters and keep a
              live count of liked characters.
            </p>
          </div>
        </div>
        <div className="container-2">
          <a
            href="https://simpsons-api.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="green"
          >
            <img src={simpsons} alt="" />
          </a>
        </div>
        <div className="container-3">
          <a
            href="https://simpsons-api.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="green"
          >
            view project
          </a>
        </div>
      </div>

      <div className="project">
        <div className="container-left">
          <div className="tech">
            <h4>HTML | SVG | CSS</h4>
          </div>
          <div className="name">
            <h2>SVG Animation </h2>
          </div>
          <div className="three">
            <p>
              A small challenge to produce an animation using only SVG's and
              keyframe animations in CSS.
            </p>
          </div>
        </div>
        <div className="container-2">
          <a
            href="https://cycle-around.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="blue"
          >
            <img src={svgAnimation} alt="" />
          </a>
        </div>
        <div className="container-3">
          <a
            href="https://cycle-around.jessieclements.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="blue"
          >
            view project
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
