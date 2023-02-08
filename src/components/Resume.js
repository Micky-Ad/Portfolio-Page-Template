import resume from "./../assets/Mkz.pdf";

import { DiMongodb, DiJavascript1 } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import {
  FaNodeJs,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaReact,
} from "react-icons/fa";

function Resume() {
  return (
    <div>
      <div className="container">
        <div className="mainBody resume">
          <div className="skills">
            <h1>I have Web Development Skills With: </h1>
            <ul>
              <li>
                HTML
                <FaHtml5 className="icon" />
              </li>{" "}
              <li>
                CSS
                <FaCss3Alt className="icon" />
              </li>{" "}
              <li>
                JavaScript
                <DiJavascript1 className="icon" />
              </li>{" "}
              <li>
                NodeJS
                <FaNodeJs className="icon" />
              </li>{" "}
              <li>
                MongoDB
                <DiMongodb className="icon" />
              </li>
              <li>
                ReactJS
                <FaReact className="icon" />
              </li>{" "}
              <li>
                MySql
                <SiMysql className="icon" />
              </li>
              <li>
                GitHub
                <FaGithubSquare className="icon" />
              </li>
            </ul>
            <h2> And More ... </h2>
          </div>
          <div>
            <span download href={resume} className="btn download">
              {" "}
              Download Resume{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
