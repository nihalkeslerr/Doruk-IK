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
