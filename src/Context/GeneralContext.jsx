import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const GenerealContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [isClose, setIsClose] = useState(false);

  const CloseSidebar = () => {
    setIsClose(!isClose);
    console.log("isClose", isClose);
  };
  const [display, setDisplay] = useState("open"); //Sidebar açma-kapama state bilgisi
  const [modalIsOpen, setModalIsOpen] = useState(false); //çalışan ekle modalı için state

  const [employees, setEmployees] = useState([]); //Çalışanların bütün bilgilerinin yüklendiği state

  const [employeeInfo, setemployeeInfo] = useState({ // Çalışanların bilgilerini update etmek için kullanılan tablo, employees state'indeki bilgileri bu state üzerine yüklüyoruz ve o şekilde servera gönderiyoruz.
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
    dateOfFinish:"",
    status:""
  });

  const [addEmployee, setAddEmployee]= useState({
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
    dateOfFinish:"Devam Ediyor",
    status:"aktif",
  })


  const toggleModal = () => { //çalışan ekle modalı için
    setModalIsOpen(!modalIsOpen);
  };

  const putInfo =()=>{ //bu fonksiyon yapılan değişiklikleri employeeInfo stateine kaydetmek için kullanılıyor.
    if (employee) {
      setemployeeInfo({
        firstName: employee.firstName || "",
        lastName: employee.lastName || "",
        phoneNumber: employee.phoneNumber || "",
        title:employee.title || "",
        email: employee.email || "",
        departman: employee.departman || "",
        jobType: employee.jobType || "",
        accessType: employee.accessType || "",
        employeeType:employee.employeeType || "",
        dateOfStart: employee.dateOfStart || "",
        dateOfFinish:employee.dateOfFinish|| "",
        status:employee.status|| "",
      });
    }
  }

  const [employee, setEmployee] = useState(); //Tek bir kullanıcı bilgisini depolamak için

  const fetchEmployee = (id) => { //İd bilgisine göre çalışan bilgisi çekme fonksiyonu
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
  }

 
  const handleInputChange = (e) => { //çalışanlar sayfasındaki inputtaki değişiklikleri employeeInfoya kaydetmek için 
    setemployeeInfo({
      ...employeeInfo,
      [e.target.name]: e.target.value,
    });
    console.log("employeeInfo Change data :", { ...employeeInfo, [e.target.name]: e.target.value });
  };
  


  const values = {
    CloseSidebar,
    display,
    setDisplay,
  };

  return (
    <GenerealContext.Provider value={values}>
      {children}
    </GenerealContext.Provider>
  );
};
