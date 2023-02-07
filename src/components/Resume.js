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
            <h2>I have Web Development Skills With: </h2>
            <a href="#">
              <FaHtml5 className="icon" />
            </a>{" "}
            <a href="#">
              <FaCss3Alt className="icon" />
            </a>{" "}
            <a href="#">
              <DiJavascript1 className="icon" />
            </a>{" "}
            <a href="#">
              <FaNodeJs className="icon" />
            </a>{" "}
            <a href="#">
              <DiMongodb className="icon" />
            </a>
            <a href="#">
              <FaReact className="icon" />
            </a>{" "}
            <a href="#">
              <SiMysql className="icon" />
            </a>
            <a href="#">
              <FaGithubSquare className="icon" />
            </a>
          </div>
          <div>
            <a download href={resume} className="btn download">
              {" "}
              Download Resume{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
