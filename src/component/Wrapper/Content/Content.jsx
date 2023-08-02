import React from "react";
import {Navigate, Route, Routes} from 'react-router-dom'
import Main from "./Main/Main";
import Calendar from "./Calendar/Calendar";
import Employees from "./Employees/Employees";
import Permissions from "./Permissions/Permissions";
import Expenses from "./Expenses/Expenses";
import Reports from "./Reports/Reports";
function Content() {
  return (
    <>
     <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
    <Routes>
      <Route path='main/*' element={<Main />}  ></Route>
      <Route path='calendar/*' element={<Calendar />}  ></Route>
      <Route path='employees/*' element={<Employees />}  ></Route>
      <Route path='permissions/*' element={<Permissions />}  ></Route>
      <Route path='expenses/*' element={<Expenses />}  ></Route>
      <Route path='reports/*' element={<Reports />}  ></Route>
    </Routes>


    </div>
    </>
  );
}

export default Content;
