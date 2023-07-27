import React from "react";
import logo from '../../../assets/media/logos/dorukLogo.png'
function Logo() {
  return (
      <div
        className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10 mw-100"
        id="kt_aside_logo"
      >
        <a href="../../demo7/dist/index.html">
          <img src={logo}  className="h-35px" alt="" />
        </a>
      </div>
  );
}

export default Logo;
