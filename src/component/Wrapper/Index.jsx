import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
import './style.scss'
function Index() {
  return (
    <div className="  aside-secondary-enabled aside-fixed wrapper d-flex flex-column flex-row-fluid ">
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
