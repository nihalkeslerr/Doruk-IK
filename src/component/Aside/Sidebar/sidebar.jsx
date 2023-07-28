import React, { useState } from "react";
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
  const [isClose, setIsClose] = useState(false);
  const [iconColor, setIconColor] = useState(false);

  const changeIconColor = () => {
    console.log(iconColor)
    setIconColor(true)
  };

  return (
    <div id="kt_aside" className="sidebar">
      <div className="aside-primary d-flex flex-column align-items-lg-center flex-row-auto mx-100 ">
        <Logo></Logo>
        <div
          className="aside-nav d-flex flex-column align-items-center flex-column-fluid pt-1 pt-lg-0"
          id="kt_aside_nav"
        >
          <ul
            className="nav flex-column w-100 d-flex align-items-center"
            id="kt_aside_nav_tabs"
          >
            <li
              className="mw-100 "
              title="Projects"
              onMouseEnter={()=>{setIconColor(true)}}
              onMouseLeave={()=>{setIconColor(false)}}
            >
              <a className="" href="#kt_aside_nav_tab_projects">
                <i className="ki-duotone ki-element-11 w-100">
                  <div className="container-icon">
                    {iconColor && (
                       <FontAwesomeIcon
                       icon={faHouse}
                       style={{ color: "#fabf7e" }}
                       size="xl"
                     />
                    )
                    }
                    {
                      !iconColor && (
                        <FontAwesomeIcon
                        icon={faHouse}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                     )
                    }
                  </div>
                  <div className="d-flex deneme">
                    <p className="	d-none d-lg-block">Ana Sayfa</p>
                  </div>
                </i>
              </a>
            </li>
            <li className="mw-100" title="Menu"
            onMouseEnter={()=>{setIconColor(true)}}
            onMouseLeave={()=>{setIconColor(false)}}>
              <a className="" href="#kt_aside_nav_tab_menu">
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                  {iconColor && (
                       <FontAwesomeIcon
                       icon={faCalendar}
                       style={{ color: "#fabf7e" }}
                       size="xl"
                     />
                    )
                    }
                    {
                      !iconColor && (
                        <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                     )
                    }
                  </div>
                  <div className="d-flex deneme">
                    <p className="	d-none d-lg-block">Takvim</p>
                  </div>
                </i>
              </a>
            </li>
            <li className="mw-100" title="Subscription"
            onMouseEnter={()=>{setIconColor(true)}}
            onMouseLeave={()=>{setIconColor(false)}}>
              <a
                className=""
                data-bs-toggle="tab"
                href="#kt_aside_nav_tab_subscription"
              >
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                  {iconColor && (
                       <FontAwesomeIcon
                       icon={faUserGroup}
                       style={{ color: "#fabf7e" }}
                       size="xl"
                     />
                    )
                    }
                    {
                      !iconColor && (
                        <FontAwesomeIcon
                        icon={faUserGroup}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                     )
                    }
                  </div>{" "}
                  <div className="d-flex deneme">
                    <p className="	d-none d-lg-block">Çalışanlar</p>
                  </div>
                </i>
              </a>
            </li>
            <li className="mw-100" title="Tasks"
             onMouseEnter={()=>{setIconColor(true)}}
             onMouseLeave={()=>{setIconColor(false)}}>
              <a className="" href="#kt_aside_nav_tab_tasks">
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                  {iconColor && (
                       <FontAwesomeIcon
                       icon={faPlane}
                       style={{ color: "#fabf7e" }}
                       size="xl"
                     />
                    )
                    }
                    {
                      !iconColor && (
                        <FontAwesomeIcon
                        icon={faPlane}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                     )
                    }
                  </div>{" "}
                  <div className="d-flex deneme">
                    <p className="	d-none d-lg-block">İzinler</p>
                  </div>
                </i>
              </a>
            </li>
            <li className="mw-100" title="Notifications"
            onMouseEnter={()=>{setIconColor(true)}}
            onMouseLeave={()=>{setIconColor(false)}}>
              <a
                className=""
                data-bs-toggle="tab"
                href="#kt_aside_nav_tab_notifications"
              >
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                  {iconColor && (
                       <FontAwesomeIcon
                       icon={faCreditCard}
                       style={{ color: "#fabf7e" }}
                       size="xl"
                     />
                    )
                    }
                    {
                      !iconColor && (
                        <FontAwesomeIcon
                        icon={faCreditCard}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                     )
                    }
                   
                  </div>
                  <div className="d-flex deneme">
                    <p className="	d-none d-lg-block">Harcamalar</p>
                  </div>
                </i>
              </a>
            </li>
            <li className="mw-100" title="Authors"
            onMouseEnter={()=>{setIconColor(true)}}
            onMouseLeave={()=>{setIconColor(false)}}>
              <a
                className=""
                data-bs-toggle="tab"
                href="#kt_aside_nav_tab_authors"
              >
                <i className="ki-duotone ki-element-11">
                  <div className="container-icon">
                  {iconColor && (
                       <FontAwesomeIcon
                       icon={faFileLines}
                       style={{ color: "#fabf7e" }}
                       size="xl"
                     />
                    )
                    }
                    {
                      !iconColor && (
                        <FontAwesomeIcon
                        icon={faFileLines}
                        style={{ color: "#d5d5d5" }}
                        size="xl"
                      />
                     )
                    }
                   
                  </div>{" "}
                  <div className="d-flex deneme">
                    <p className="	d-none d-lg-block">Raporlar+</p>
                  </div>
                </i>
              </a>
            </li>
          </ul>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Header;
