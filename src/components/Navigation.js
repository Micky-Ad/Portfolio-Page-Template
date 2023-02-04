import logo from "./../assets/logo.PNG";

function Navigation() {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="navList">
        <li>About Me</li>
        <li>Porfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}

export default Navigation;
