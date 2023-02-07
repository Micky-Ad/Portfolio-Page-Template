import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Porfolio() {
  return (
    <div>
      <div className="container">
        <div className="mainBody">
          <div className="project">
            <div className="projectName">
              <div>
                <p>Blog Site</p>
                <a href="https://github.com/Micky-Ad/Blog-Site" target="_blank">
                  <FaGithubSquare className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectName">
              <div>
                <p>Food-and-Beverage-Recipe-Generator</p>
                <a
                  href="https://github.com/Thedanbrown/IDCWDYW-Food-and-Beverage-Recipe-Generator"
                  target="_blank"
                >
                  <FaGithubSquare className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectName">
              <div>
                <p>Employee Tracker</p>
                <a
                  href="https://github.com/Micky-Ad/Employee-Tracker"
                  target="_blank"
                >
                  <FaGithubSquare className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectName">
              <div>
                <p>Social-Network-API</p>
                <a
                  href="https://github.com/Micky-Ad/Social-Network-API"
                  target="_blank"
                >
                  <FaGithubSquare className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectName">
              <div>
                <p>EcommerceStore</p>
                <a
                  href="https://github.com/YehOkiHub/EcommerceStore"
                  target="_blank"
                >
                  <FaGithubSquare className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
