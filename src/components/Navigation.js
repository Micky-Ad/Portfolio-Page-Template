import logo from "./../assets/logo.PNG";

function Navigation(props) {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="navList">
        <li
          onClick={() => {
            props.pageClick("About");
          }}
        >
          About Me
        </li>
        <li
          onClick={() => {
            props.pageClick("Porfolio");
          }}
        >
          Porfolio
        </li>
        <li
          onClick={() => {
            props.pageClick("Contact");
          }}
        >
          Contact
        </li>
        <li
          onClick={() => {
            props.pageClick("Resume");
          }}
        >
          Resume
        </li>
      </ul>
      <div></div>
    </div>
  );
}

export default Navigation;
