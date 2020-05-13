import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Saved from "./pages/saved";
import Search from "./pages/search"

import Nav from "./components/Nav";
import SignIn from "./components/Sign-in";

import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
       <Nav />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />          
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
