import Navigation from "./Navigation";

function Header(props) {
  let pageName = "";

  return (
    <header>
      <div className="container">
        <Navigation pageClick={props.pageClick} />
      </div>
    </header>
  );
}

export default Header;
