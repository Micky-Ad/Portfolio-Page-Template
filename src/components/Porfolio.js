import Project from "./Project";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
import blogImg from "./../assets/blog.PNG";
import foodImg from "./../assets/food.png";
import socialImg from "./../assets/social.PNG";

function Porfolio() {
  var allProjects = [
    {
      title: "Blog Site",
      URL: "https://github.com/Micky-Ad/Blog-Site",
      img: blogImg,
    },
    {
      title: "Food and Drink Generator",
      URL: "https://github.com/Thedanbrown/IDCWDYW-Food-and-Beverage-Recipe-Generator",
      img: foodImg,
    },
    {
      title: "Employee Tracker",
      URL: "https://github.com/Micky-Ad/Employee-Tracker",
      img: blogImg,
    },
    {
      title: "Social Network API",
      URL: "https://github.com/Micky-Ad/Social-Network-API",
      img: socialImg,
    },
    {
      title: "Ecommerce Store",
      URL: "https://github.com/YehOkiHub/EcommerceStore",
      img: blogImg,
    },
  ];

  let [projects, setProjecs] = useState(allProjects);
  console.log(projects);
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
