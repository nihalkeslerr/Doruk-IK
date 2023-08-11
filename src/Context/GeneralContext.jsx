import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const GenerealContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [isClose, setIsClose] = useState(false);

  const CloseSidebar = () => {
    setIsClose(!isClose);
    console.log("isClose", isClose);
  };
  const [display, setDisplay] = useState("open");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [employees, setEmployees] = useState([]);

  const [employeeInfo, setemployeeInfo] = useState({
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
  });

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };



  const [employee, setEmployee] = useState();


  const fetchEmployee = (id) => {
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


  const handleInputChange = (e) => {
    setemployeeInfo({
      ...employeeInfo,
      [e.target.name]: e.target.value,
    });
    console.log("employee Change data :", { ...employeeInfo, [e.target.name]: e.target.value });
  };





  const values = {
    CloseSidebar,
    display,
    setDisplay,
    employeeInfo,
    setemployeeInfo,
    employees,
    setEmployees,
    toggleModal,
    modalIsOpen,
    setModalIsOpen,employee, setEmployee,
    fetchEmployee,
    handleInputChange
  };

  return (
    <GenerealContext.Provider value={values}>
      {children}
    </GenerealContext.Provider>
  );
};
