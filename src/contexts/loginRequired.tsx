import React, { createContext, useState, useContext, useEffect } from "react";

const LoginRequiredContext = createContext({});

// Use this or just use the same logic for each page to get a user?
export const LoginRequiredProvider = ({ children }) => {
  // Include function to set only profile image and informations here?

  const defaultLoginRequired = {
    show: false,
    title: "Login Required",
    description: "Login or register to the website first.",
    // description: "Please, login or register first.",
    // description: "Please, register or login to our website first.",
    from: null,
  };

  const [loginRequired, setLoginRequired] = useState(defaultLoginRequired);

  return (
    <LoginRequiredContext.Provider value={{
      loginRequired,
      setLoginRequired,
    }}>
      {children}
    </LoginRequiredContext.Provider>
  );
};

export const useLoginRequired = () => useContext(LoginRequiredContext);