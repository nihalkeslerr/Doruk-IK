import React, { useState } from 'react'

function Permissions() {
  const [activeTab, setActiveTab] = useState("summary");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="permitMenu d-flex">
          <div
            className={
              activeTab === "summary" 
                ? "active"
                : "notActive"
            }
            onClick={() => handleTabChange("summary")}
          >
            {" "}
            Özet
          </div>
          <div
            className={activeTab === "permission"  ? "active" : "notActive"}
            onClick={() => handleTabChange("permission")}
          >
            {" "}
            İzinler{" "}
          </div>
          <div
            className={activeTab === "extraPer" ? "active" : "notActive"}
            onClick={() => handleTabChange("extraPer")}
          >
            {" "}
            Ekstra İzinler
          </div>
        </div>
        {activeTab === "permission" && (
          <div className="d-flex infoBtn justify-content-end">
            <button
              style={{ padding: "11px 60px !important" }}
              className={activeTab === "permission"  ? "active" : "notActive"}
              onClick={() => handleTabChange("permission")}
            >
              İzin Talebi Oluştur
            </button>
          </div>
        )}
        {activeTab === "extraPer" && (
          <div className="d-flex infoBtn justify-content-end">
            <button
              style={{ padding: "11px 60px !important" }}
              className={activeTab === "addSalary" ? "active" : "notActive"}
              onClick={() => handleTabChange("addSalary")}
            >
             Ekstra İzin Ekle
            </button>
          </div>
        )}
        {activeTab === "addPosition" && (
          <div className="d-flex infoBtn justify-content-end">
          {/*   <button style={{ padding: "11px 60px !important" }}>Kaydet</button> */}
          </div>
        )}
      </div>
     {/*  <div className="careerTable">
        {activeTab === "position" && (
          <Position employee={employee} setEmployee={setEmployee} />
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
      </div> */}
    </div>
  )
}

export default Permissions