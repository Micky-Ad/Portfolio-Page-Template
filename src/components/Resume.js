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
            <span>
              <FaHtml5 className="icon" />
              HTML
            </span>{" "}
            <span>
              <FaCss3Alt className="icon" />
            </span>{" "}
            <span>
              <DiJavascript1 className="icon" />
            </span>{" "}
            <span>
              <FaNodeJs className="icon" />
            </span>{" "}
            <span>
              <DiMongodb className="icon" />
            </span>
            <span>
              <FaReact className="icon" />
            </span>{" "}
            <span>
              <SiMysql className="icon" />
            </span>
            <span>
              <FaGithubSquare className="icon" />
            </span>
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
