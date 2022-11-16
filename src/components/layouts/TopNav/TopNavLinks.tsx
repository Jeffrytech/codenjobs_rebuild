import React from "react";

// import CryptoCategories from "./CryptoCategories";
import JobCategories from "./JobCategories";
// import BlogCategories from "./BlogCategories";

import PeopleCategories from "./PeopleCategories";
import Docs from "./Docs";

// Should be the dropdown later?
// import NFT from "./NFT";
// import Swap from "./Swap";
// import Blog from "./Blog";
import Blogs from "./Blogs";
import NFTProjectListLink from "./NFTProjectListLink";
// import Roadmap from "./Roadmap";
// import Whitepaper from "./Whitepaper";

// Categories and others?
const TopNavLinks = () => {
  return <>
    {/* <CompanyCategories /> */}
    {/* <CryptoCategories /> */}
        
    {/* <Whitepaper /> */}

    {/* <Roadmap /> */}

    {/* <CompanyCategories /> */}

    {/* <Docs /> */}
    <div
      style={{
        marginRight: "auto",
        marginLeft: "1rem",
      }}
    >
      {/* <SwapLink /> */}
      <NFTProjectListLink />
    </div>

    <Docs />
    <Blogs />
    <JobCategories />
        
    {/* <CommunityCategories /> */}
    {/* <BlogCategories /> */}

    {/* Improve listing first and reinclude */}
    <PeopleCategories />
  </>;
};

export default TopNavLinks;