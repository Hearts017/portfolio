import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Education
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Experience
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Skills
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <h2>Education</h2>
            <hr />
            <p>
              <li>KodeGo Bootcamp</li>
              <li>Senior High School</li>
              <li>Junior High School</li>
            </p>
          </div>

          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <h2>Experience</h2>
            <hr />
            <p>
              <li>KodeGo Bootcamp</li>
            </p>
          </div>

          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <h2>Skills</h2>
            <hr />
            <p>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>React</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
