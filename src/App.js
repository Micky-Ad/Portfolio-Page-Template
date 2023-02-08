import { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";

import "./style.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Porfolio from "./components/Porfolio";
import Footer from "./components/Footer";

function App() {
  let [page, setPage] = useState("About");
  function displayPage(p) {
    setPage(p);
  }
  return (
    <div className="App">
      <Header pageClick={displayPage} />
      {page === "About" && <About />}
      {page === "Contact" && <Contact />}
      {page === "Resume" && <Resume />}
      {page === "Porfolio" && <Porfolio />}
      <Footer />
    </div>
  );
}

export default App;
