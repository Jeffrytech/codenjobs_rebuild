import React, { createContext, useState, useContext, useEffect } from "react";

const SidebarContext = createContext({});

// Use this or just use the same logic for each page to get a user?
export const SidebarProvider = ({ children }) => {
  // Include function to set only profile image and informations here?

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{
      showSidebar, 
      setShowSidebar,
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);

// https://stackoverflow.com/questions/64662486/how-do-you-deal-with-public-and-private-routes-in-a-nextjs-app
// https://www.mikealche.com/software-development/how-to-implement-authentication-in-next-js-without-third-party-libraries
// https://jasonraimondi.com/posts/secure-a-next-js-application-with-jwt-and-a-private-route-higher-order-component/