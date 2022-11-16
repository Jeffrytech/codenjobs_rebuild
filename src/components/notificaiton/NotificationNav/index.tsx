import React from "react";

import Link from "next/link";

import {
  InboxNavContainer,
  InboxNavListWrapper,
  InboxNavLinkWrapper,
  InboxNavLink,
} from "./InboxNavCSS";

const InboxNav = ({
  // username,
  lastPath,
}) => {

  return (
    <InboxNavContainer>
      <InboxNavListWrapper>
        <InboxNavLinkWrapper
          // $style={{
          //   marginLeft: "2rem",
          // }}
          // @ts-ignore
          $activeLink={lastPath === "all"}
        >
          <Link href="/notifications/all" >
            <InboxNavLink
              // @ts-ignore
              $activeLink={lastPath === "all"}
            >
              All
            </InboxNavLink>
          </Link>
        </InboxNavLinkWrapper>

        <InboxNavLinkWrapper
          $style={{
            // marginLeft: "1rem",
          }}
          // @ts-ignore
          $activeLink={lastPath === "unread"}
        >
          <Link href="/notifications/unread" >
            <InboxNavLink
              // @ts-ignore
              $activeLink={lastPath === "unread"}
            >
              Unread
            </InboxNavLink>
          </Link>
        </InboxNavLinkWrapper>
      </InboxNavListWrapper>
    </InboxNavContainer>
  );
};

export default InboxNav;