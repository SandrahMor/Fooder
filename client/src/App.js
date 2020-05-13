import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Saved from "./pages/saved";
import Search from "./pages/search";
import SignUp from "./pages/signUp";

import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
       <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/saved" component={Saved} />          
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
