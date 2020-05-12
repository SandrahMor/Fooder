import React from "react";
import "./style.css";

// this functional component passes the data children 
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
