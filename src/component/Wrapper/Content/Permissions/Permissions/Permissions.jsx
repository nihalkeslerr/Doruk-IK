import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Upcoming from "./Upcoming";
import AwaitingApproval from "./AwaitingApproval";
import Approved from "./Approved";
import Rejects from "./Rejects";

function Permissions() {

  const [activeTab, setActiveTab] = useState("upcoming");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="d-flex align-items-start justify-content-between pb-8">
        <div className="permitMenu d-flex">
          <div
            className={
              activeTab === "upcoming"
                ? "active"
                : "notActive"
            }
            onClick={() => handleTabChange("upcoming")}
          >
            {" "}
            Yaklaşanlar
          </div>
          <div
            className={activeTab === "awaitingApproval" ? "active" : "notActive"}
            onClick={() => handleTabChange("awaitingApproval")}
          >
           Onay Bekleyenler
          </div>
          <div
            className={activeTab === "approved" ? "active" : "notActive"}
            onClick={() => handleTabChange("approved")}
          >
            {" "}
            Onaylananlar
          </div>
          <div
            className={activeTab === "rejects" ? "active" : "notActive"}
            onClick={() => handleTabChange("rejects")}
          >
            {" "}
            Reddedilenler
          </div>
        </div>
        
      </div>


      <div className="careerTable">
        {activeTab === "upcoming" && (
          <Upcoming />
        )}

        {activeTab === "awaitingApproval" && (
          <AwaitingApproval/>
        )}

        {activeTab === "approved" && (
          <Approved/>
        )}
        {activeTab === "rejects" && (
          <Rejects/>
        )}
      </div>
    </div>
  );
}

export default Permissions