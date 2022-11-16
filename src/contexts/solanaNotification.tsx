import React, { createContext, useState, useContext, useEffect } from "react";

const SolanaNotificationContext = createContext({});

// Use this or just use the same logic for each page to get a user?
export const SolanaNotificationProvider = ({ children }) => {
  // Include function to set only profile image and informations here?

  const defaultSolanaNotification = {
    show: false,
    title: "",
    message: "",
  };

  const [solanaNotification, setSolanaNotification] = useState(defaultSolanaNotification);

  return (
    <SolanaNotificationContext.Provider value={{
      solanaNotification,
      setSolanaNotification,
    }}>
      {children}
    </SolanaNotificationContext.Provider>
  );
};

export const useSolanaNotification = () => useContext(SolanaNotificationContext);