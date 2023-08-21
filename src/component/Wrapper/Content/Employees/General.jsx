import React, {  useEffect, useState } from "react";
import { useParams,Outlet } from "react-router-dom";
import empPhoto from "../../../../assets/media/avatars/300-12.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function General() {
  const { id } = useParams();
  
  const [employee, setEmployee] = useState(); //Tek bir kullanıcı bilgisini depolamak için

  const fetchEmployee = () => { //İd bilgisine göre çalışan bilgisi çekme fonksiyonu
    setEmployee();
    axios
      .get(`http://localhost:3004/employees/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("response:", response);
          setEmployee(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const [employeeInfo, setemployeeInfo] = useState({ // Çalışanların bilgilerini update etmek için kullanılan tablo, employees state'indeki bilgileri bu state üzerine yüklüyoruz ve o şekilde servera gönderiyoruz.
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phoneNumber: "",
    departman: "",
    jobType: "",
    accessType: "",
    employeeType: "",
    dateOfStart: "",
    dateOfFinish:"",
    status:""
  });

  const putInfo =()=>{ //bu fonksiyon yapılan değişiklikleri employeeInfo stateine kaydetmek için kullanılıyor.
    if (employee) {
      setemployeeInfo({
        firstName: employee.firstName || "",
        lastName: employee.lastName || "",
        phoneNumber: employee.phoneNumber || "",
        title:employee.title || "",
        email: employee.email || "",
        departman: employee.departman || "",
        jobType: employee.jobType || "",
        accessType: employee.accessType || "",
        employeeType:employee.employeeType || "",
        dateOfStart: employee.dateOfStart || "",
        dateOfFinish:employee.dateOfFinish|| "",
        status:employee.status|| "",
      });
    }
  }

  useEffect(() => {
    if (id) {
      fetchEmployee(id);
    }
  }, [id]);

  console.log("ID", id);
  useEffect(() => {
    console.log("employee:", employee);
  }, [employee]);

  useEffect(() => {
    putInfo();
  }, [employee]);

  const [activeTab, setActiveTab] = useState("general");
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
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
                  <div className="d-flex settingEmp">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </div>
                <div className="d-flex justify-content-center empNavbar">
                  <ul className=" ">
                    <li className={
                       activeTab === "general" ? "active" : "notActive"}
                      onClick={() => handleTabChange("general")}>
                      <NavLink
                        to={`/employees/${id}/general`}
                      >
                        Genel
                      </NavLink>
                    </li>

                    <li className={
                       activeTab === "personal" ? "active" : "notActive"}
                      onClick={() => handleTabChange("personal")}>
                      <NavLink
                        to={`/employees/${id}/personal-info`}
                        className={({ isActive }) =>
                          isActive ? "active" : "notActive"
                        }
                      >
                        Kişisel Bilgiler
                      </NavLink>
                    </li>
                    <li className={
                       activeTab === "career" ? "active" : "notActive"}
                      onClick={() => handleTabChange("career")}>
                      <NavLink
                        to={`/employees/${id}/career`}
                        className={({ isActive }) =>
                          isActive ? "active" : "notActive"
                        }
                      >
                        Kariyer
                      </NavLink>
                    </li>
                    <li className={
                       activeTab === "permission" ? "active" : "notActive"}
                      onClick={() => handleTabChange("permission")}>
                      <NavLink
                        to={`/employees/${id}/permission`}
                        className={({ isActive }) =>
                          isActive ? "active" : "notActive"
                        }
                      >
                        İzinler
                      </NavLink>
                    </li>
                    <li className={
                       activeTab === "expense" ? "active" : "notActive"}
                      onClick={() => handleTabChange("expense")}>
                      <NavLink
                        to={`/employees/${id}/expense`}
                        className={({ isActive }) =>
                          isActive ? "active" : "notActive"
                        }
                      >
                        Ödemeler
                      </NavLink>
                    </li>
                    <li className={
                       activeTab === "shift" ? "active" : "notActive"}
                      onClick={() => handleTabChange("shift")}>
                      <NavLink
                        to={`/employees/${id}/shift`}
                        className={({ isActive }) =>
                          isActive ? "active" : "notActive"
                        }
                      >
                        Mesailer
                      </NavLink>
                    </li>
                    <li className={
                       activeTab === "payroll" ? "active" : "notActive"}
                      onClick={() => handleTabChange("payroll")}>
                      <NavLink
                        to={`/employees/${id}/payroll`}
                        className={({ isActive }) =>
                          isActive ? "active" : "notActive"
                        }
                      >
                        Bordro
                      </NavLink>
                    </li>

                    <div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl" id="kt_content_container">
          <div className="px-5 mb-6">
            <div>
             <Outlet></Outlet>
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
