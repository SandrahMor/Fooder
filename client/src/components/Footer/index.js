import React from "react";

// create functional component fotter which is self contained 
function Footer() {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

// exports component fotter
export default Footer;
