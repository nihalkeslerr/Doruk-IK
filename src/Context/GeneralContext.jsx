import React, { createContext, useState } from "react";

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
    setModalIsOpen,
  };

  return (
    <GenerealContext.Provider value={values}>
      {children}
    </GenerealContext.Provider>
  );
};
