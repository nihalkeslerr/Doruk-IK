import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import empPhoto from "../../../../assets/media/avatars/300-12.jpg";
import { Navigate, Route, Routes, Link, NavLink } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import GeneralInfo from "./GeneralInfo";
import axios from "axios";
import { GenerealContext } from "../../../../Context/GeneralContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Career from "./Career";
import Permissions from "./Permissions";

function General() {
  const { id } = useParams();

  const {
    employee,
    setEmployee,
    fetchEmployee,
    employeeInfo,
    setemployeeInfo,
    putInfo,
  } = useContext(GenerealContext);

  useEffect(() => {
    if (id) {
      fetchEmployee(id);
    }
  }, [id]);

  console.log("ID", id);
  useEffect(() => {
    console.log("employee:", employee);
  }, [employee]);

  const handleEmployeeSubmit = () => {
    axios
      .put(`http://localhost:3004/employees/${id}`, employeeInfo)
      .then((response) => {
        if (response.status === 200) {
          console.log("response:", response);
          toast.success("Çalışan bilgisi başarıyla güncellendi.");
        } else {
          toast.error("Çalışan bilgisi güncellenirken hata meydana geldi.");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  useEffect(() => {
    putInfo();
  }, [employee]);

  // Yeni bir durum tanımlayın
  const [activeTab, setActiveTab] = useState("general"); // Varsayılan olarak "general" seçili

  // Aktif sekme değiştiğinde çağrılacak fonksiyon
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    // Bağlantılara tıklandığında URL yolunu güncelle
  };

  return (
    <div>
      <div>
        <div>
          <div className="container-xxl" id="kt_content_container">
            <div className="infoCard mb-6">
              <div className="card-body pt-9 pb-0">
                <div className="d-flex flex-wrap flex-sm-nowrap">
                  <div className="me-7 mb-4">
                    <div className="symbol symbol-160px symbol-lg-10px symbol-fixed position-relative">
                      <img src={empPhoto} alt="image" />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                      {employee && (
                        <div className="d-flex flex-column">
                          <h1>
                            {" "}
                            {employeeInfo.firstName} {employeeInfo.lastName}
                          </h1>
                          <div className="align-items-center mb-2 mt-5 info-head">
                            <div className="d-flex">
                              {" "}
                              <p> Unvan: </p> <span>{employeeInfo.title}</span>
                            </div>
                            <div className="d-flex">
                              {" "}
                              <p> Departman: </p>{" "}
                              <span>{employeeInfo.departman}</span>
                            </div>

                            <div className="d-flex">
                              {" "}
                              <p> Telefon:</p>{" "}
                              <span> {employeeInfo.phoneNumber}</span>
                            </div>
                            <div className="d-flex">
                              <p> İşe Başlama Tarihi: </p>{" "}
                              <span> {employeeInfo.dateOfStart}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex infoBtn">
                    <div>
                      <button onClick={handleEmployeeSubmit}>KAYDET</button>
                    </div>
                    <div>
                      <button>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center empNavbar">
                  <ul className=" ">
                    {/*  <li className="">
                      <NavLink
                        to={`/employees/general/${id}`}
                        className={({ isActive }) =>
                          isActive ? "active" : "notActive"
                        }
                      >
                        Genel
                      </NavLink> 
                    </li>*/}

                    <li
                      className={
                        activeTab === "general" ? "active" : "notActive"
                      }
                      onClick={() => handleTabChange("general")}
                    >
                      <Link>Genel</Link>
                    </li>
                    <li
                      className={
                        activeTab === "personal" ? "active" : "notActive"
                      }
                      onClick={() => handleTabChange("personal")}
                    >
                      <Link>Kişisel Bilgiler</Link>
                    </li>
                    <li
                      className={
                        activeTab === "career" ? "active" : "notActive"
                      }
                      onClick={() => handleTabChange("career")}
                    >
                      <Link>Kariyer</Link>
                    </li>
                    <li
                      className={
                        activeTab === "permission" ? "active" : "notActive"
                      }
                      onClick={() => handleTabChange("permission")}
                    >
                      <Link>İzinler</Link>
                    </li>
                    <li
                      className={
                        activeTab === "expense" ? "active" : "notActive"
                      }
                      onClick={() => handleTabChange("expense")}
                    >
                      <Link>Ödemeler</Link>
                    </li>
                    <li
                      className={activeTab === "shift" ? "active" : "notActive"}
                      onClick={() => handleTabChange("shift")}
                    >
                      <Link>Mesailer</Link>
                    </li>
                    <li
                      className={
                        activeTab === "payroll" ? "active" : "notActive"
                      }
                      onClick={() => handleTabChange("payroll")}
                    >
                      <Link>Bordro</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl" id="kt_content_container">
          <div className="px-5 mb-6">
            <div className=" pt-9">
              {/* <Routes>
                <Route
                  path=""
                  Component={GeneralInfo} 
                />
                <Route
                  path="/employees/employee/personal-info/:id"
                  element={
                    <PersonalInfo
                      employee={employee}
                      handleEmployeeSubmit={handleEmployeeSubmit}
                    />
                  }
                />
              </Routes> */}
              {activeTab === "general" && <GeneralInfo />}
              {activeTab === "personal" && <PersonalInfo />}
              {activeTab === "career" && <Career />}
              {activeTab === "permission" && <Permissions />}
              {/* Diğer bileşenleri de benzer şekilde render edin */}
            </div>
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

export default General;
