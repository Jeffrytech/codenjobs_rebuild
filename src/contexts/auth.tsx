import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

// apiReqeust here is an axios instance which has the baseURL set according to the env.
import { encodedRequest, apiRequest, apiFormRequest } from "../../src/api/requests";

import AuthToken from "../../src/services/authToken";
import { userInformation } from "../api/auth";

const AuthContext = createContext({});

// Use this or just use the same logic for each page to get a user?
export const AuthProvider = ({ children }) => {
  // Include function to set only profile image and informations here?

  const [user, setUser] = useState(null); // Start
  const [loading, setLoading] = useState(true);

  // Extract this?
  // Should do something with /logout server side end point?
  const logout = () => {
    Cookies.remove("access_token");
    setUser(null);
    delete encodedRequest.defaults.headers.Authorization;
    delete apiRequest.defaults.headers.Authorization;
    delete apiFormRequest.defaults.headers.Authorization;

    // includes("account") because we logout users when they update email at /settings/account
    // if (window.location.pathname !== "/" || !(window.location.pathname.includes("account"))) {
    //   // window.location.pathname = "";
    //   // window.location.pathname = "/signin"; // with / it became relative
    //   // window.location.assign("/");
    //   window.location.assign("/signin");
    // }
    
    window.location.assign("/signin");
  };

  useEffect(() => {
    async function loadUserFromCookies() {
      try {
        const access_token = Cookies.get("access_token");
        if (access_token) {
          // console.log("There was a token in the user browser. Verify if it is valid.");

          const auth = new AuthToken(access_token);

          if (!auth.isValid) {
            logout();
          } else {
            encodedRequest.defaults.headers.Authorization = auth.authorizationString; // apiRequest.defaults.headers.Authorization = `Bearer ${access_token}`;
            apiRequest.defaults.headers.Authorization = auth.authorizationString; // apiRequest.defaults.headers.Authorization = `Bearer ${access_token}`;
            apiFormRequest.defaults.headers.Authorization = auth.authorizationString;

            // const { data: user } = await apiRequest.post("/me"); // Should build this.
            // Rename me to userInformation later?
            const { data: user } = await userInformation(); // Should build this.
            
            // console.log("user");
            // console.log(user);

            if (user.user_status === "Suspended") {
              logout();
              return;
            }

            if (user) {
              setUser(user); // End and user is not null
            } else {
              setLoading(false);
            }
            // user is null
          }
        }

        setLoading(false);
      } catch (e) {
        console.error(e);
        // To handle axios error
        logout();
        setLoading(false);
      }
    }

    loadUserFromCookies();

    // return () => {
    //   setLoading(false);
    // }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      setUser, // Export this not to reload the page after profile information update.
      loading,
      logout, // Extract this?
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// https://stackoverflow.com/questions/64662486/how-do-you-deal-with-public-and-private-routes-in-a-nextjs-app
// https://www.mikealche.com/software-development/how-to-implement-authentication-in-next-js-without-third-party-libraries
// https://jasonraimondi.com/posts/secure-a-next-js-application-with-jwt-and-a-private-route-higher-order-component/