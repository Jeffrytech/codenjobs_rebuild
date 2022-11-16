import React, { useState } from "react";
import Link from "next/link";

import { useOnOutsideClick } from "../../../../useOutsideClick";

import TriangleDown from "baseui/icon/triangle-down";

import { 
  TopNavDropdownContainer, TopNavDropdownButtonWrapper, TopNavDropdownButton, TopNavDropdownContent, TopNavDropdownContentLinkWrapper 
} from "../TopNavDropdownCSS";

// Categories and others?
const BlogCategories = () => {
  const [showBlogCategoriesDropdown, setShowBlogCategoriesDropdown] = useState(false);

  // @ts-ignore
  // BlogCategories.handleClickOutside = () => setShowBlogCategoriesDropdown(false);

  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowBlogCategoriesDropdown(false);
  });

  return (
    <TopNavDropdownContainer>
      <TopNavDropdownButtonWrapper onClick={(e) => {
        e.preventDefault();

        setShowBlogCategoriesDropdown(true);
      }} >
        <TopNavDropdownButton>Blog</TopNavDropdownButton>
        {/* <TopNavDropdownButton>Find a Blog</TopNavDropdownButton> */}
        {/* <TopNavDropdownButton>TopNavDropdown</TopNavDropdownButton> */}
        <TriangleDown />
      </TopNavDropdownButtonWrapper>
      {showBlogCategoriesDropdown && <TopNavDropdownContent
        ref={innerBorderRef}
      >
        <Link href="/blogs" >
          <TopNavDropdownContentLinkWrapper>All</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/blogs?category=Programming" >
          <TopNavDropdownContentLinkWrapper>Programming</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/blogs?category=Blockchain" >
          <TopNavDropdownContentLinkWrapper>Blockchain</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/blogs?category=Design" >
          <TopNavDropdownContentLinkWrapper>Design</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/blogs?category=Marketing" >
          <TopNavDropdownContentLinkWrapper>Marketing</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/blogs?category=Customer%20Support" >
          <TopNavDropdownContentLinkWrapper>Customer Support</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/blogs?category=Writing" >
          <TopNavDropdownContentLinkWrapper>Writing</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/blogs?category=Product" >
          <TopNavDropdownContentLinkWrapper>Product</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/blogs?category=Human%20Resource" >
          <TopNavDropdownContentLinkWrapper>Human Resource</TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/blogs?category=Else" >
          <TopNavDropdownContentLinkWrapper>Not in the list</TopNavDropdownContentLinkWrapper>
        </Link>
      </TopNavDropdownContent>}
    </TopNavDropdownContainer>
  );
};

export default BlogCategories;


