import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../component/Wrapper/Content/Main/Main";
import Calendar from "../component/Wrapper/Content/Calendar/Calendar";
import Employees from "../component/Wrapper/Content/Employees/Employees";
import GeneralPer from "../component/Wrapper/Content/Permissions/General";
import Expenses from "../component/Wrapper/Content/Expenses/Expenses";
import Reports from "../component/Wrapper/Content/Reports/Reports";
import General from "../component/Wrapper/Content/Employees/General";
import AddEmployees from "../component/Wrapper/Content/Employees/AddEmployees";
import PersonalInfo from "../component/Wrapper/Content/Employees/PersonalInfo";
import GeneralInfo from "../component/Wrapper/Content/Employees/GeneralInfo";
import Career from "../component/Wrapper/Content/Employees/Career/Career";
import PermissionsEmp from "../component/Wrapper/Content/Employees/Permission/Permission";
import Payments from "../component/Wrapper/Content/Employees/Payment/Payments";
import Shift from "../component/Wrapper/Content/Employees/Shift/Shift";
import Payroll from "../component/Wrapper/Content/Employees/Payroll/Payroll";
import ReportsPer from "../component/Wrapper/Content/Permissions/Reports/Reports";
import PermissionsPer from "../component/Wrapper/Content/Permissions/Permissions/Permissions";
import Rules from "../component/Wrapper/Content/Permissions/Rules/Rules"

function PrivateRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/*" element={<Main />}></Route>
        <Route path="calendar/*" element={<Calendar />}></Route>
        <Route path="employees/*" element={<Employees />}>
          {" "}
        </Route>
        <Route path="permissions/*" element={<GeneralPer />}>
          <Route path="permission" element={<PermissionsPer />} />
          <Route path="reports" element={<ReportsPer />} />
          <Route path="rules" element={<Rules />} />
        </Route>

        <Route path="expenses/*" element={<Expenses />}></Route>
        <Route path="reports/*" element={<Reports />}></Route>
        <Route path="employees/:id" element={<General />}>
          <Route path="general" element={<GeneralInfo />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="career" element={<Career />} ></Route>
          <Route path="permissions" element={<PermissionsEmp />} />
          <Route path="payments" element={<Payments />} />
          <Route path="shift" element={<Shift />} />
          <Route path="payroll" element={<Payroll />} />
        </Route>
      </Routes>
    </div>
  );
}

export default PrivateRoutes;
