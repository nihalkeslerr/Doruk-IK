import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddPosition from "./AddPosition";
import Salary from "./Salary";
import Position from "./Position";
import AddSalary from "./AddSalary";
import axios from "axios";
function Career() {
  
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("position");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };



  return (
    <div>
      <div className="d-flex align-items-start justify-content-between pb-8">
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
            className={activeTab === "salary" ||activeTab === "addSalary" ? "active" : "notActive"}
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
              className={activeTab === "addPosition"  ? "active" : "notActive"}
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
              className={activeTab === "addSalary" ? "active" : "notActive"}
              onClick={() => handleTabChange("addSalary")}
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
          <Position />
        )}

        {activeTab === "addPosition" && (
          <AddPosition/>
        )}

        {activeTab === "salary" && (
          <Salary/>
        )}
        {activeTab === "addSalary" && (
          <AddSalary/>
        )}
      </div>
    </div>
  );
}

export default Career;
