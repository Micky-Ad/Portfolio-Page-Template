import { FaGithubSquare } from "react-icons/fa";

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

export default Project;
