import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import empPhoto from "../../../../assets/media/avatars/300-1.jpg";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import GeneralInfo from "./GeneralInfo";
import axios from "axios";

function General() {
  const { id } = useParams();

  const [employee, setEmployee] =useState();

  useEffect(() => {
    const fetchEmployee = () => {
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
    };
    console.log("ID", id);
    fetchEmployee();
  }, [id]);

  useEffect(()=>{
    console.log("employee:", employee);
  },[employee])


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
                        <h1> {employee.firstName} {employee.lastName}</h1>
                        <div className="align-items-center mb-2 mt-5 info-head">
                          <div className="d-flex">
                            {" "}
                            <p> Unvan: </p> <span >{employee.title}</span>
                          </div>
                          <div className="d-flex">
                            {" "}
                            <p> Departman: </p> <span>{employee.departman}</span>
                          </div>

                          <div className="d-flex">
                            {" "}
                            <p> Telefon:</p> <span> {employee.phoneNumber}</span>
                          </div>
                          <div className="d-flex">
                            <p> İşe Başlama Tarihi: </p>{" "}
                            <span> {employee.dateOfStart}</span>
                          </div>
                        </div>
                      </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center empNavbar">
                  <ul className=" ">
                    <li className="">
                      <Link className="" to="" active>
                        Genel
                      </Link>
                    </li>
                    <li className="">
                      <Link className="" to="/personal-info">
                        Kişisel Bilgiler
                      </Link>
                    </li>
                    <li className="">
                      <Link className="" to="#">
                        Diğer Bilgiler
                      </Link>
                    </li>
                    <li className="">
                      <Link className="" to="#">
                        İzinler
                      </Link>
                    </li>
                    <li className="">
                      <Link className="" to="#">
                        Ödemeler
                      </Link>
                    </li>
                    <li className="">
                      <Link className=" " to="#">
                        Mesailer
                      </Link>
                    </li>
                    <li className="">
                      <Link className=" " to="#">
                        Bordro
                      </Link>
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
              <GeneralInfo />
              <Routes>
                <Route path="/general" element={<GeneralInfo />}></Route>
                <Route path="/personal-info" element={<PersonalInfo />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default General;
