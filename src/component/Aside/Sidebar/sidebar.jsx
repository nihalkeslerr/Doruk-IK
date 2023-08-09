import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import Footer from "./Footer";
import "../style.scss";
import "../../Wrapper/style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GenerealContext } from "../../../Context/GeneralContext";

function Header() {
  const { display, setDisplay}=useContext(GenerealContext);

  const [iconColor, setIconColor] = useState(false);


  return (
    <div id="kt_aside" className={`sidebar d-none d-lg-block ${display}`}>
      <div className="aside-primary d-flex flex-column align-items-lg-center flex-row-auto mx-100 ">
        <div className="logo d-flex flex-column align-items-start justify-content-center flex-wrap">
          <div
            className="btn btn-icon btn-active-icon-primary"
            id="kt_aside_mobile_toggle"
          >
            <i className="menu ki-duotone ki-abstract-14 fs-1"
            onClick={() => setDisplay(display === "open" ? "close" : "open")}>
              <FontAwesomeIcon icon={faBars} />
            </i>
            <Logo></Logo>
          </div>
        </div>

        <div
          className="aside-nav d-flex flex-column align-items-center flex-column-fluid pt-1 pt-lg-0"
          id="kt_aside_nav"
        >
          <ul className="" id="kt_aside_nav_tabs">
            <li
              className="mw-100 "
              title="Projects"
              onMouseEnter={() => {
                setIconColor(true);
              }}
              onMouseLeave={() => {
                setIconColor(false);
              }}
            >
              <Link className="sidebarLink" to="main">
                <i className="ki-duotone ki-element-11 w-100">
                  <div className="container-icon">
                    {iconColor && (
                      <FontAwesomeIcon
                        icon={faHouse}
                        style={{ color: "#fabf7e" }}
                        size="xl"
                      />
                    )}
                    {!iconColor && (
                      <FontAwesomeIcon
                        icon={faHouse}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                    )}
                  </div>
                  <div className="d-flex deneme">
                    <p className="">Ana Sayfa</p>
                  </div>
                </i>
              </Link>
            </li>
        
            <li
              className="mw-100"
              title="Subscription"
              onMouseEnter={() => {
                setIconColor(true);
              }}
              onMouseLeave={() => {
                setIconColor(false);
              }}
            >
              <Link className="" data-bs-toggle="tab" to="employees">
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                    {iconColor && (
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        style={{ color: "#fabf7e" }}
                        size="xl"
                      />
                    )}
                    {!iconColor && (
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                    )}
                  </div>{" "}
                  <div className="d-flex deneme">
                    <p className="">Çalışanlar</p>
                  </div>
                </i>
              </Link>
            </li>
            <li
              className="mw-100"
              title="Tasks"
              onMouseEnter={() => {
                setIconColor(true);
              }}
              onMouseLeave={() => {
                setIconColor(false);
              }}
            >
              <Link className="" to="permissions">
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                    {iconColor && (
                      <FontAwesomeIcon
                        icon={faPlane}
                        style={{ color: "#fabf7e" }}
                        size="xl"
                      />
                    )}
                    {!iconColor && (
                      <FontAwesomeIcon
                        icon={faPlane}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                    )}
                  </div>{" "}
                  <div className="d-flex deneme">
                    <p className="">İzinler</p>
                  </div>
                </i>
              </Link>
            </li>
            <li
              className="mw-100"
              title="Notifications"
              onMouseEnter={() => {
                setIconColor(true);
              }}
              onMouseLeave={() => {
                setIconColor(false);
              }}
            >
              <Link className="" data-bs-toggle="tab" to="expenses">
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                    {iconColor && (
                      <FontAwesomeIcon
                        icon={faCreditCard}
                        style={{ color: "#fabf7e" }}
                        size="xl"
                      />
                    )}
                    {!iconColor && (
                      <FontAwesomeIcon
                        icon={faCreditCard}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                    )}
                  </div>
                  <div className="d-flex deneme">
                    <p className="">Harcamalar</p>
                  </div>
                </i>
              </Link>
            </li>
            <li
              className="mw-100"
              title="Authors"
              onMouseEnter={() => {
                setIconColor(true);
              }}
              onMouseLeave={() => {
                setIconColor(false);
              }}
            >
              <Link className="" data-bs-toggle="tab" to="reports">
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                    {iconColor && (
                      <FontAwesomeIcon
                        icon={faFileLines}
                        style={{ color: "#fabf7e" }}
                        size="xl"
                      />
                    )}
                    {!iconColor && (
                      <FontAwesomeIcon
                        icon={faFileLines}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                    )}
                  </div>{" "}
                  <div className="d-flex deneme">
                    <p className="">Raporlar+</p>
                  </div>
                </i>
              </Link>
            </li>
            <li
              className="mw-100"
              title="Menu"
              onMouseEnter={() => {
                setIconColor(true);
              }}
              onMouseLeave={() => {
                setIconColor(false);
              }}
            >
              <Link className="" to="/calendar">
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                    {iconColor && (
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ color: "#fabf7e" }}
                        size="xl"
                      />
                    )}
                    {!iconColor && (
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                    )}
                  </div>
                  <div className="d-flex deneme">
                    <p className="">Takvim</p>
                  </div>
                </i>
              </Link>
            </li>
            
          </ul>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Header;
