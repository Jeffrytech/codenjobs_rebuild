import React, { createContext, useState, useContext, useEffect } from "react";

const BlogCommentContext = createContext({});

// Use this or just use the same logic for each page to get a user?
export const BlogCommentProvider = ({ children }) => {
  // Include function to set only profile image and informations here?

  const [showBlogComment, setShowBlogComment] = useState(false);
  
  return (
    <BlogCommentContext.Provider value={{
      showBlogComment, 
      setShowBlogComment,
    }}>
      {children}
    </BlogCommentContext.Provider>
  );
};

export const useBlogComment = () => useContext(BlogCommentContext);

// https://stackoverflow.com/questions/64662486/how-do-you-deal-with-public-and-private-routes-in-a-nextjs-app
// https://www.mikealche.com/software-development/how-to-implement-authentication-in-next-js-without-third-party-libraries
// https://jasonraimondi.com/posts/secure-a-next-js-application-with-jwt-and-a-private-route-higher-order-component/