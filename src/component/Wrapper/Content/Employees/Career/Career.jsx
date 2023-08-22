import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddPosition from "./AddPosition";
import Salary from "./Salary";
import Position from "./Position";
import axios from "axios";
function Career() {
  
  const { id } = useParams();
  const [employee, setEmployee] = useState(); //Tek bir kullanıcı bilgisini depolamak için

  const fetchEmployee = () => {
    //İd bilgisine göre çalışan bilgisi çekme fonksiyonu
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
  };

  useEffect(() => {
    if (id) {
      fetchEmployee(id);
    }
  }, [id]);

  const [activeTab, setActiveTab] = useState("position");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };



  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="permitMenu d-flex">
          <div
            className={
              activeTab === "position" || activeTab === "addPosition"
                ? "active"
                : "notActive"
            }
            onClick={() => handleTabChange("position")}
          >
            {" "}
            Pozisyon
          </div>
          <div
            className={activeTab === "salary" ? "active" : "notActive"}
            onClick={() => handleTabChange("salary")}
          >
            {" "}
            Maaş{" "}
          </div>
          <div
            className={activeTab === "Çalışma" ? "active" : "notActive"}
            onClick={() => handleTabChange("Çalışma")}
          >
            {" "}
            Çalışma Takvimleri
          </div>
        </div>
        {activeTab === "position" && (
          <div className="d-flex infoBtn justify-content-end">
            <button
              style={{ padding: "11px 60px !important" }}
              className={activeTab === "addPosition" ? "active" : "notActive"}
              onClick={() => handleTabChange("addPosition")}
            >
              Pozisyon Ekle
            </button>
          </div>
        )}
        {activeTab === "salary" && (
          <div className="d-flex infoBtn justify-content-end">
            <button
              style={{ padding: "11px 60px !important" }}
              className={activeTab === "addPosition" ? "active" : "notActive"}
              onClick={() => handleTabChange("addPosition")}
            >
              Maaş Ekle
            </button>
          </div>
        )}
        {activeTab === "addPosition" && (
          <div className="d-flex infoBtn justify-content-end">
          {/*   <button style={{ padding: "11px 60px !important" }}>Kaydet</button> */}
          </div>
        )}
      </div>
      <div className="careerTable">
        {activeTab === "position" && (
          <Position employee={employee} setEmployee={setEmployee} />
        )}

        {activeTab === "addPosition" && (
          <AddPosition/>
        )}

        {activeTab === "salary" && (
          <Salary/>
        )}
      </div>
    </div>
  );
}

export default Career;
