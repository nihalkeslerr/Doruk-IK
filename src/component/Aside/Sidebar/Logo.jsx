import React from "react";
import logo from "../../../assets/media/logos/dorukLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Logo() {
  return (
    <div>
      <div
        className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10 mw-100"
        id="kt_aside_logo"
      >
        <a href="../../demo7/dist/index.html">
          <img src={logo} className="h-35px" alt="" />
        </a>
      </div>
{/*       <div className="d-flex d-lg-none align-items-center justify-content-center">
        <div
          className="btn btn-icon btn-active-icon-primary"
          id="kt_aside_mobile_toggle"
        >
          <i className="ki-duotone ki-abstract-14 fs-1">
            <FontAwesomeIcon icon={faBars} />
          </i>
        </div>
      </div> */}
    </div>
  );
}

export default Logo;
