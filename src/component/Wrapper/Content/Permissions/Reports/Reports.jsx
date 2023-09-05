import React, { useEffect, useState } from "react";
import MonthlyLeave from "./MonthlyLeave";
import RemainingLeave from "./RemainingLeave";

function Reports() {

  const [activeTab, setActiveTab] = useState("remainingLeave");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="d-flex align-items-start justify-content-between pb-8">
        <div className="permitMenu d-flex">
          <div
            className={
              activeTab === "remainingLeave"
                ? "active"
                : "notActive"
            }
            onClick={() => handleTabChange("remainingLeave")}
          >
            {" "}
            Kalan İzinler
          </div>
          <div
            className={activeTab === "monthlyLeave" ? "active" : "notActive"}
            onClick={() => handleTabChange("monthlyLeave")}
          >
          Aylık İzin Raporu
          </div>
        </div>

        {activeTab === "monthlyLeave" && (
          <div className="d-flex infoBtn justify-content-end">
            <button
              style={{ padding: "11px 60px !important" }}
              
            >
              Oluştur
            </button>
          </div>
        )}
        {activeTab === "remainingLeave" && (
          <div className="d-flex infoBtn justify-content-end">
            <button
              style={{ padding: "11px 60px !important" }}
         
            >
              Oluştur
            </button>
          </div>
        )}
      </div>

      <div className="careerTable">
        {activeTab === "monthlyLeave" && (
          <MonthlyLeave />
        )}

        {activeTab === "remainingLeave" && (
          <RemainingLeave/>
        )}

      </div>
    </div>
  );
}

export default Reports