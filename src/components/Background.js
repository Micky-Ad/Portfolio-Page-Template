import React from "react";
import porfolio1 from "./../assets/porfolio1.jpg";

const Background = ({ porfolio1 }) => {
  const styles = {
    backgroundImage: porfolio1,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  };

  return <div style={styles} />;
};

export default Background;
