import React, { createContext, useState, useContext, useEffect } from "react";

const SavedLinkToClipboardContext = createContext({});

// Use this or just use the same logic for each page to get a user?
export const SavedLinkToClipboardProvider = ({ children }) => {
  // Include function to set only profile image and informations here?

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // alert(snackbarOpen);

  return (
    <SavedLinkToClipboardContext.Provider value={{
      snackbarOpen,
      setSnackbarOpen,
    }}>
      {children}
    </SavedLinkToClipboardContext.Provider>
  );
};

export const useSavedLinkToClipboard = () => useContext(SavedLinkToClipboardContext);

// https://stackoverflow.com/questions/64662486/how-do-you-deal-with-public-and-private-routes-in-a-nextjs-app
// https://www.mikealche.com/software-development/how-to-implement-authentication-in-next-js-without-third-party-libraries
// https://jasonraimondi.com/posts/secure-a-next-js-application-with-jwt-and-a-private-route-higher-order-component/