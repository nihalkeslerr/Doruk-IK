import React from "react";
import Sidebar from "../component/Aside/Sidebar/sidebar";
import Index from "../component/Wrapper/Index";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

function Home() {

  return (
    <Router>
    <div>
      <div className="d-flex">

        <Sidebar></Sidebar>
        <Index className="flex-1"></Index>
      </div>
    </div>
    </Router>
  );
}

export default Home;
