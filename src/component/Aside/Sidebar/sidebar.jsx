import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import Footer from "./Footer";
import "../style.scss";
import "../../Wrapper/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GenerealContext } from "../../../Context/GeneralContext";

function Header() {
  const { display, setDisplay } = useContext(GenerealContext);
  const location = useLocation();
  const [iconColor, setIconColor] = useState(false);
  return (
    <div id="kt_aside" className={`sidebar d-none d-lg-block ${display}`}>
      <div className="aside-primary d-flex flex-column align-items-lg-center flex-row-auto mx-100 ">
        <div className="logo d-flex flex-column align-items-start justify-content-center flex-wrap">
          <div
            className="btn btn-icon btn-active-icon-primary"
            id="kt_aside_mobile_toggle"
          >
            <i
              className="menu ki-duotone ki-abstract-14 fs-1"
              onClick={() => setDisplay(display === "open" ? "close" : "open")}
            >
              <FontAwesomeIcon icon={faBars} style={{color: "#1a4489"}}/>
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
              style={{
                backgroundColor:
                  location.pathname === "/main" ? "rgb(249 249 249)" : "",
              }}
            >
              <NavLink
                className="sidebarLink"
                to="main"
                isActive={() => location.pathname.startsWith("/main")}
              >
                <i className="ki-duotone ki-element-11 w-100">
                  <div className="container-icon">
                    <FontAwesomeIcon
                      icon={faHouse}
                      style={{
                        color: location.pathname.startsWith("/main")
                          ? "#1a4489"
                          : "#d5d5d5",
                      }}
                      size="xl"
                    />
                  </div>
                  <div className="d-flex deneme">
                    <p className="">Ana Sayfa</p>
                  </div>
                </i>
              </NavLink>
            </li>

            <li
              className="mw-100"
              title="Subscription"
              style={{
                backgroundColor:
                location.pathname.startsWith("/employees") ? "rgb(249 249 249)" : "",
              }}
            >
              <NavLink
                className=""
                data-bs-toggle="tab"
                to="/employees"
                isActive={() => location.pathname.startsWith("/employees")}
              >
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      style={{
                        color: location.pathname.startsWith("/employees")
                          ? "#1a4489"
                          : "#d5d5d5",
                      }}
                      size="xl"
                    />
                  </div>{" "}
                  <div className="d-flex deneme">
                    <p className="">Çalışanlar</p>
                  </div>
                </i>
              </NavLink>
            </li>
            <li
              className="mw-100"
              title="Tasks"
              style={{
                backgroundColor:
                  location.pathname === "/permissions/permission" ? "rgb(249 249 249)" : "",
              }}
            >
              <NavLink
                className=""
                to="permissions/permission"
                isActive={() => location.pathname.startsWith("/permissions")}
              >
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                    <FontAwesomeIcon
                      icon={faPlane}
                      style={{
                        color: location.pathname.startsWith("/permissions")
                          ? "#1a4489"
                          : "#d5d5d5",
                      }}
                      size="xl"
                    />
                  </div>{" "}
                  <div className="d-flex deneme">
                    <p className="">İzinler</p>
                  </div>
                </i>
              </NavLink>
            </li>
            <li
              className="mw-100"
              title="Notifications"
              style={{
                backgroundColor:
                  location.pathname === "/expenses" ? "rgb(249 249 249)" : "",
              }}
            >
              <NavLink
                className=""
                data-bs-toggle="tab"
                to="expenses"
                isActive={() => location.pathname.startsWith("/expenses")}
              >
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      style={{
                        color: location.pathname.startsWith("/expenses")
                          ? "#1a4489"
                          : "#d5d5d5",
                      }}
                      size="xl"
                    />
                  </div>
                  <div className="d-flex deneme">
                    <p className="">Harcamalar</p>
                  </div>
                </i>
              </NavLink>
            </li>
            <li
              className="mw-100"
              title="Authors"
              style={{
                backgroundColor:
                  location.pathname === "/reports" ? "rgb(249 249 249)" : "",
              }}
            >
              <NavLink
                className=""
                data-bs-toggle="tab"
                to="reports"
                isActive={() => location.pathname.startsWith("/reports")}
              >
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                    <FontAwesomeIcon
                      icon={faFileLines}
                      style={{
                        color: location.pathname.startsWith("/reports")
                          ? "#1a4489"
                          : "#d5d5d5",
                      }}
                      size="xl"
                    />
                  </div>{" "}
                  <div className="d-flex deneme">
                    <p className="">Raporlar+</p>
                  </div>
                </i>
              </NavLink>
            </li>
            <li
              className="mw-100"
              title="Menu"
              style={{
                backgroundColor:
                  location.pathname === "/calendar" ? "rgb(249 249 249)" : "",
              }}
            >
              <NavLink
                className=""
                to="/calendar"
                isActive={() => location.pathname.startsWith("/calendar")}
              >
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{
                        color: location.pathname.startsWith("/calendar")
                          ? "#1a4489"
                          : "#d5d5d5",
                      }}
                      size="xl"
                    />
                  </div>
                  <div className="d-flex deneme">
                    <p className="">Takvim</p>
                  </div>
                </i>
              </NavLink>
            </li>
          </ul>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Header;
