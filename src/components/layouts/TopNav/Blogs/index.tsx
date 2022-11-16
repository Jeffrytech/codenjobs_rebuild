import React, { useState } from "react";
import Link from "next/link";


import {
  TopNavLinkContainer,
  TopNavLinkButtonWrapper,
  TopNavLinkButton,
} from "../TopNavLinkCSS";

// Categories and others?
// CryptoCategories later?
const Blog = () => {

  return (
    <TopNavLinkContainer>
      <TopNavLinkButtonWrapper>
        <Link href="/blogs" >
          <TopNavLinkButton>Blogs</TopNavLinkButton>
        </Link>
      </TopNavLinkButtonWrapper>
    </TopNavLinkContainer>
  );
};

export default Blog;