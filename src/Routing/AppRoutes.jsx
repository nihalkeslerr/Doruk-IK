import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PersonalInfo from "../component/Wrapper/Content/Employees/PersonalInfo";
import GeneralInfo from "../component/Wrapper/Content/Employees/GeneralInfo";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <GeneralInfo
            />
          }
        />
        <Route
          path="personal-info/:id"
          element={
            <PersonalInfo
            />
          }
        />
      </Routes>
    </div>
  );
}

export default AppRoutes;
