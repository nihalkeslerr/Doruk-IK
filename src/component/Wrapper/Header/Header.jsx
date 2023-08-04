import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { GenerealContext } from "../../../Context/GeneralContext";
function Header() {
  const { CloseSidebar } = useContext(GenerealContext);

  return (
    <div
      className="container-xxl d-flex w-100 align-items-center justify-content-space-around py-5 container-xxl d-flex align-items-center justify-content-between"
      id="kt_header_container"
    >
      <div className="d-flex flex-column justify-content-center flex-wrap ">
        <div
          className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap mt-n5 mt-lg-0 me-lg-2 pb-2 pb-lg-0"
          data-kt-swapper="true"
          data-kt-swapper-mode="prepend"
          data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}"
        >
          {" "}
          <h1 className="text-dark fw-bold my-0 fs-1">Pano</h1>
        </div>
        <div
          className="d-flex d-lg-none flex-column align-items-start justify-content-center flex-wrap mt-lg-0 me-lg-2 pb-lg-0"
          onClick={CloseSidebar}
        >
          <div
            className="btn btn-icon btn-active-icon-primary"
            id="kt_aside_mobile_toggle"
          >
            <i className="ki-duotone ki-abstract-14 fs-1">
              <FontAwesomeIcon icon={faBars} />
            </i>
          </div>
        </div>
        {/* Hangi yolda olduğunu gösteriyor  <ul className="breadcrumb fw-semibold fs-base my-1">
                <li className="breadcrumb-item text-muted">
                    <a href="../../demo7/dist/index.html" className="text-muted text-hover-primary">Home</a>
                </li>
                <li className="breadcrumb-item text-muted">Dashboards</li>
                <li className="breadcrumb-item text-dark">Default</li>
            </ul> */}
      </div>
      {/*         <div className="d-flex d-lg-none align-items-center ms-n4 me-2">
          <div
            className="btn btn-icon btn-active-icon-primary"
            id="kt_aside_mobile_toggle"
          >
            <i className="ki-duotone ki-abstract-14 fs-1">
              <span className="path1"></span>
              <span className="path2"></span>
            </i>
          </div>
        </div> */}
      <div className="d-flex float-right">
      <div className="d-flex align-items-center ms-3">
          <a
            href="#"
            className="btn btn-icon flex-center bg-body btn-color-gray-600 btn-active-color-primary h-40px"
            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            <i className="ki-duotone ki-night-day theme-light-show fs-2">
              <FontAwesomeIcon icon={faGlobe} />
            </i>
            <i className="ki-duotone ki-moon theme-dark-show fs-2"></i>
          </a>
         </div>
        <div className="d-flex align-items-center ms-3">
          <a
            href="#"
            className="btn btn-icon flex-center bg-body btn-color-gray-600 btn-active-color-primary h-40px"
            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            <i className="ki-duotone ki-night-day theme-light-show fs-2">
              <FontAwesomeIcon icon={faCircleHalfStroke} />
            </i>
            <i className="ki-duotone ki-moon theme-dark-show fs-2"></i>
          </a>
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
            data-kt-menu="true"
            data-kt-element="theme-mode-menu"
          >
            <div className="menu-item px-3 my-0">
              <a
                href="#"
                className="menu-link px-3 py-2"
                data-kt-element="mode"
                data-kt-value="light"
              >
                <span className="menu-icon" data-kt-element="icon">
                  <i className="ki-duotone ki-night-day fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                    <span className="path5"></span>
                    <span className="path6"></span>
                    <span className="path7"></span>
                    <span className="path8"></span>
                    <span className="path9"></span>
                    <span className="path10"></span>
                  </i>
                </span>
                <span className="menu-title">Light</span>
              </a>
            </div>
            <div className="menu-item px-3 my-0">
              <a
                href="#"
                className="menu-link px-3 py-2"
                data-kt-element="mode"
                data-kt-value="dark"
              >
                <span className="menu-icon" data-kt-element="icon">
                  <i className="ki-duotone ki-moon fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </span>
                <span className="menu-title">Dark</span>
              </a>
            </div>
            <div className="menu-item px-3 my-0">
              <a
                href="#"
                className="menu-link px-3 py-2"
                data-kt-element="mode"
                data-kt-value="system"
              >
                <span className="menu-icon" data-kt-element="icon">
                  <i className="ki-duotone ki-screen fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </i>
                </span>
                <span className="menu-title">Sistem</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
