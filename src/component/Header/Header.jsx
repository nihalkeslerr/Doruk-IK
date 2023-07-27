import React from "react";
import Logo from "./Logo";
import Footer from "../Footer/Footer";
import "./style.scss";
function Header() {
  return (
    <div>
      <div id="kt_aside" class="sidebar">
        <div class="aside-primary d-flex flex-column align-items-lg-center flex-row-auto mx-100 ">
          <Logo></Logo>
          <div
            className="aside-nav d-flex flex-column align-items-center flex-column-fluid pt-1 pt-lg-0"
            id="kt_aside_nav"
          >
            <ul className="nav flex-column w-100" id="kt_aside_nav_tabs">
              <li className="mw-100 " title="Projects">
                <a className="" href="#kt_aside_nav_tab_projects">
                  <i className="ki-duotone ki-element-11 ">
                    <span></span>
                    <p className="">Main Page</p>
                  </i>
                </a>
              </li>
              <li className="mw-100" title="Menu">
                <a className="" href="#kt_aside_nav_tab_menu">
                  <i className="ki-duotone ki-element-11">
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
                    <p>Employees</p>
                  </i>
                </a>
              </li>
              <li className="mw-100" title="Tasks">
                <a className="" href="#kt_aside_nav_tab_tasks">
                  <i className="ki-duotone ki-element-11">
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
