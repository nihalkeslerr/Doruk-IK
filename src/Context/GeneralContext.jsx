import React, { createContext, useState } from 'react'

export const GenerealContext =createContext();

export const GeneralProvider =({children})=>{
    const [isClose, setIsClose ] = useState(false);

    const CloseSidebar =()=>{
        setIsClose(!isClose);
        console.log("isClose",isClose);
    }
    const [display, setDisplay] = useState("open");

    const [employees, setEmployees] = useState([
        {
          fullName: "Nihal Selma KESLER",
          title: "Front-End Developer",
          email: "nihal@gmail.com",
          phoneNumber: "507-097-17-29",
        },
        {
          fullName: "Hilal ORUÇ",
          title: "iOS Developer",
          email: "hilal@gmail.com",
          phoneNumber: "5433456543",
        },
        {
          fullName: "Melahat Şeyma KESLER",
          title: "Architect",
          email: "mel@gmail.com",
          phoneNumber: "5439871627",
        },
      ]);

    const [employeeInfo, setemployeeInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    })

    const onChangeInput =(e)=>{
        setemployeeInfo({...employeeInfo, [e.target.name]: e.target.value});
    }

    const values={
        CloseSidebar,
        display, setDisplay,
        employeeInfo, setemployeeInfo,
        onChangeInput,employees,setEmployees

    }

    return (
        <GenerealContext.Provider value={values}>{children}</GenerealContext.Provider>
    )
}