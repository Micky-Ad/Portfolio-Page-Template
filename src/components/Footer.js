import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="container">
        {" "}
        Footer
        <FaGithubSquare className="icon" />
        <FaLinkedin className="icon" />
      </div>
    </div>
  );
}

export default Footer;
