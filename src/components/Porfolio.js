import Project from "./Project";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
import blogImg from "./../assets/blog.PNG";
import foodImg from "./../assets/food.png";
import socialImg from "./../assets/social.PNG";
import eCommerce from "./../assets/eCommerce.png";
import employeeTracker from "./../assets/employeeTracker.png";

function Porfolio() {
  var allProjects = [
    {
      title: "Ecommerce Store",
      URL: "https://github.com/YehOkiHub/EcommerceStore",
      img: eCommerce,
    },
    {
      title: "Food and Drink Generator",
      URL: "https://github.com/Thedanbrown/IDCWDYW-Food-and-Beverage-Recipe-Generator",
      img: foodImg,
    },
    {
      title: "Blog Site",
      URL: "https://github.com/Micky-Ad/Blog-Site",
      img: blogImg,
    },

    {
      title: "Employee Tracker",
      URL: "https://github.com/Micky-Ad/Employee-Tracker",
      img: employeeTracker,
    },
    {
      title: "Social Network API",
      URL: "https://github.com/Micky-Ad/Social-Network-API",
      img: socialImg,
    },
  ];

  let [projects, setProjecs] = useState(allProjects);
  function Project(props) {
    return (
      <div className="project">
        <div className="projectName">
          <div>
            <img className="projectImg" src={props.img} />
            <p>{props.title}</p>
            <a href={props.URL} target="_blank">
              <FaGithubSquare className="icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container">
        <div className="mainBody">
          <div className="projectGrid">
            {projects.map((element, index) => {
              return (
                <Project
                  key={index}
                  title={element.title}
                  URL={element.URL}
                  img={element.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
