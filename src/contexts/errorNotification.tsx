import React, { createContext, useState, useContext, useEffect } from "react";

const ErrorNotificationContext = createContext({});

// Use this or just use the same logic for each page to get a user?
export const ErrorNotificationProvider = ({ children }) => {
  // Include function to set only profile image and informations here?

  // showError,
  // closeModal,
  // title, message, open,
  // button = null,
  const defaultErrorNotification = {
    show: false,

    title: "",
    message: "",
    button: null,
  };

  const [errorNotification, setErrorNotification] = useState(defaultErrorNotification);

  return (
    <ErrorNotificationContext.Provider value={{
      errorNotification,
      setErrorNotification,
    }}>
      {children}
    </ErrorNotificationContext.Provider>
  );
};

export const useErrorNotification = () => useContext(ErrorNotificationContext);