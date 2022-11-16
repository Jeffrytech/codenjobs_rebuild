import React from "react";

// import { useRouter } from "next/router";

import PolicyCSS from "./PolicyCSS";

import PostRenderer from "../markdown/PostRenderer";

const Policy = ({
  input
}) => {
  
  return (
    <PolicyCSS>
      <PostRenderer input={input} />
    </PolicyCSS>
  );
};

export default Policy;