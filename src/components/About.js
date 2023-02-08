import logo from "./../assets/logo.PNG";

function About(props) {
  return (
    <div>
      <div className="container">
        <div className="mainBody">
          <img className="profilePhoto" src={logo} alt="Logo" />

          <h2 className="about">Hello, I am Micky.</h2>
          <p className="about">
            I am a full-stack web developer, transitioning my several years of
            experience in Civil Engineering in Data Center Construction
            Management to Coding and Solving Software Problems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
