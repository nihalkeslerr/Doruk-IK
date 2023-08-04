import React, { useContext, useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
import './style.scss'
import '../Aside/style.scss'
import { GenerealContext } from "../../Context/GeneralContext";


function Index() {
  const { display, setDisplay}=useContext(GenerealContext)
  return (
    <div className={`aside-secondary-enabled aside-fixed wrapper d-flex flex-column flex-row-fluid ${display}`}>
      <div
        id="kt_header w-100"
        className="header"
        data-kt-sticky="true"
        data-kt-sticky-name="header"
        data-kt-sticky-offset="{default: '200px', lg: '300px'}"
      >
        <div className="kt-header-inside">
       <Header />
       <Content/>
       <Footer/>
       </div>
      </div>
     </div>
  );
}

export default Index;
