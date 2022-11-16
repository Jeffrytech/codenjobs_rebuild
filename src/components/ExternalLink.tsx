import React from "react";
import { black } from "../design/colors";

const ExternalLink = ({
  href = "/",
  children,
  style = {},
}) => {
  return <a
    href={href}
    target="_blank"

    rel="noopener noreferrer"

    style={{
      // display: "flex",
      // alignItems: "center",
            
      textDecoration: "none",
      color: black,

      ...style,
    }}
  >
    {children}
  </a>;
};

export default ExternalLink;