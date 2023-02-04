import Navigation from "./Navigation";

function Header(props) {
  let pageName = "";
  // function test() {
  //   alert(pageName);

  return (
    <header>
      <div className="container">
        <Navigation pageClick={props.pageClick} />
      </div>
    </header>
  );
}

export default Header;
