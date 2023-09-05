import React, { useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import empPhoto from "../../../../assets/media/avatars/300-12.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function General() {
    const { id } = useParams();
    const location = useLocation();
  
    return (
      <div>
        <div>
          <div>
            <div className="container-xxl" id="kt_content_container">
              <div className="infoCard mb-6">
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-start empNavbar">
                    <ul className=" ">
                      <NavLink
                        to={`/permissions/permission`}
                        isActive={() => location.pathname === "*/permissions"}
                      >
                        <li>İzinler</li>
                      </NavLink>
  
                      <NavLink
                        to={`/permissions/reports`}
                        isActive={() => location.pathname === "*/reports"}
                      >
                        <li> Raporlar </li>
                      </NavLink>
  
                      <NavLink
                        to={`/permissions/rules`}
                        isActive={() => location.pathname === "*/rules"}
                      >
                        <li>Kurallar </li>
                      </NavLink>
  
                
  
  
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xxl" id="kt_content_container">
            <div className="px-5 mb-6">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
}

export default General