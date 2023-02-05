import resume from "./../assets/Mkz.pdf";

function Resume() {
  return (
    <div>
      <div className="container">
        <div className="mainBody">
          <h2>Junior Web Developer </h2>

          <p className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nostrum tempore odit vitae vero omnis sapiente non doloremque,
            nesciunt illo fuga corrupti consequuntur. Suscipit totam
          </p>
          <a download href={resume} className="btn">
            {" "}
            Download Resume{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
