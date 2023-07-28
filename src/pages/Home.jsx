import React from "react";
import Sidebar from "../component/Aside/Sidebar/sidebar";
import Index from "../component/Wrapper/Index";
function Home() {
  return (
    <div>
      <div className="d-flex">
        <Sidebar></Sidebar>
        <Index className="flex-1"></Index>
      </div>
    </div>
  );
}

export default Home;
