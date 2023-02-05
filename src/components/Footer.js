import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="container">
        {" "}
        <p>Micky Adera</p>
        <a href="https://github.com/Micky-Ad" target="_blank">
          <FaGithubSquare className="icon" />
        </a>
        <a href="#">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
