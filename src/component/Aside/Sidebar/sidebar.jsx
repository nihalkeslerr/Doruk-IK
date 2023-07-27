import React from "react";
import Logo from "./Logo";
import Footer from "./Footer";
import "../style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <div id="kt_aside" className="sidebar">
        <div className="aside-primary d-flex flex-column align-items-lg-center flex-row-auto mx-100 ">
          <Logo></Logo>
          <div
            className="aside-nav d-flex flex-column align-items-center flex-column-fluid pt-1 pt-lg-0"
            id="kt_aside_nav"
          >
            <ul className="nav flex-column w-100" id="kt_aside_nav_tabs">
              <li className="mw-100 " title="Projects">
                <a className="" href="#kt_aside_nav_tab_projects">
                  <i className="ki-duotone ki-element-11 w-100">
                    <div className="container-icon">
                      <FontAwesomeIcon
                        icon={faHouse}
                        style={{ color: "#afafaf" }}
                        size="xl"
                      />
                    </div>
                    <p className="">Main Page</p>
                  </i>
                </a>
              </li>
              <li className="mw-100" title="Menu">
                <a className="" href="#kt_aside_nav_tab_menu">
                  <i className="ki-duotone ki-element-11">
                    <div className="container-icon">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ color: "#afafaf" }}
                        size="xl"
                      />
                    </div>
                    <p>Calendar</p>
                  </i>
                </a>
              </li>
              <li className="mw-100" title="Subscription">
                <a
                  className=""
                  data-bs-toggle="tab"
                  href="#kt_aside_nav_tab_subscription"
                >
                  <i className="ki-duotone ki-element-11">
                    <div className="container-icon">
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        style={{ color: "#afafaf" }}
                        size="xl"
                      />
                    </div>{" "}
                    <p>Employees</p>
                  </i>
                </a>
              </li>
              <li className="mw-100" title="Tasks">
                <a className="" href="#kt_aside_nav_tab_tasks">
                  <i className="ki-duotone ki-element-11">
                    <div className="container-icon">
                      <FontAwesomeIcon
                        icon={faPlane}
                        style={{ color: "#afafaf" }}
                        size="xl"
                      />
                    </div>{" "}
                    <p>Permissions</p>
                  </i>
                </a>
              </li>
              <li className="mw-100" title="Notifications">
                <a
                  className=""
                  data-bs-toggle="tab"
                  href="#kt_aside_nav_tab_notifications"
                >
                  <i className="ki-duotone ki-element-11">
                    <div className="container-icon">
                      <FontAwesomeIcon
                        icon={faCreditCard}
                        style={{ color: "#afafaf" }}
                        size="xl"
                      />
                    </div>
                    <p>Expenses</p>
                  </i>
                </a>
              </li>
              <li className="mw-100" title="Authors">
                <a
                  className=""
                  data-bs-toggle="tab"
                  href="#kt_aside_nav_tab_authors"
                >
                  <i className="ki-duotone ki-element-11">
                    <div className="container-icon">
                      <FontAwesomeIcon
                        icon={faFileLines}
                        style={{ color: "#afafaf" }}
                        size="xl"
                      />
                    </div>{" "}
                    <p>Raports+</p>
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Header;
