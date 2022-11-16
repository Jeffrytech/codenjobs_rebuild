import React, { useState } from "react";
import Link from "next/link";

import TriangleDown from "baseui/icon/triangle-down";

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import { TopNavDropdownContainer, TopNavDropdownButtonWrapper, TopNavDropdownButton, TopNavDropdownContent, TopNavDropdownContentLinkWrapper } from "../TopNavDropdownCSS";
import { useOnOutsideClick } from "../../../../useOutsideClick";

// Categories and others?
const PeopleCategories = () => {
  const [showPeopleCategoriesDropdown, setShowPeopleCategoriesDropdown] = useState(false);

  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowPeopleCategoriesDropdown(false);
  });

  return (
    <TopNavDropdownContainer>
      <TopNavDropdownButtonWrapper onClick={(e) => {
        e.preventDefault();

        setShowPeopleCategoriesDropdown(true);
      }} >
        <TopNavDropdownButton>People</TopNavDropdownButton>
        <TriangleDown />
      </TopNavDropdownButtonWrapper>
      {showPeopleCategoriesDropdown && <TopNavDropdownContent
        ref={innerBorderRef}
      >
        <Link href="/hiring" >
          <TopNavDropdownContentLinkWrapper>
            <MonetizationOnIcon />
            <span style={{
              marginLeft: "0.25rem",
            }}>
              Hiring
              {/* Recruiters */}
            </span>
          </TopNavDropdownContentLinkWrapper>
        </Link>
        <Link href="/forhire" >
          <TopNavDropdownContentLinkWrapper>
            <PeopleAltIcon />
            <span style={{
              marginLeft: "0.25rem",
            }}>
              For Hire
              {/* Candidates */}
            </span>
          </TopNavDropdownContentLinkWrapper>
        </Link>
        {/* <a
                    href="https://www.nft.codenjobs.com/#/artists"
                    target="_blank"
                    rel="noopener noreferrer"

                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                        textDecoration: "none",
                    }}
                >
                    <TopNavDropdownContentLinkWrapper>
                        <span style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "1.75rem",
                            justifyContent: "center",
                            marginLeft: "0.1rem",
                        }}>
                            ©️
                        </span>
                        <span style={{
                            marginLeft: "0.45rem",
                        }}>
                            NFT Creators
                        </span>
                    </TopNavDropdownContentLinkWrapper>
                </a> */}
      </TopNavDropdownContent>}
    </TopNavDropdownContainer>
  );
};

export default PeopleCategories;

//           <MonetizationOnIcon />
//           <UserDropdownLabel>
//             Hiring
//           </UserDropdownLabel>
//         </UserDropdownWrapper >
//       </Link >
// <Link href="/forhire" >
//     <UserDropdownWrapper>
//         <PeopleAltIcon />