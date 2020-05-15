import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// class component defines the state of the nav bar
// adds an event listener to change the size of the component when the 
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

// functions to change the width state when window is > 991 
  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 400) {
      newState.open = false;
    }

    this.setState(newState);
  };

  // changes the state open  to true
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  // when the component is mounted,tuens on event listner and calls the function to updateWidth
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  // when the component is waiting to mount, removes event listener and calls the function updateWidth 
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  // renders the content onto the screen
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2" >
        <Link className="navbar-brand" to="/">
         FOODR
        </Link>
        <button
        // when button clicked, calls the toggleNav function
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/search"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
}

export default Nav;
// exports the nav components
