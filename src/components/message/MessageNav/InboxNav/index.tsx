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
  // alert(lastPath);
  // alert(lastPath.includes("inbox"));

  if (lastPath.includes("inbox") || lastPath === "unread" || lastPath.includes("messages")) {
    return (
      <InboxNavContainer>
        <InboxNavListWrapper>
          <InboxNavLinkWrapper
            // $style={{
            //   marginLeft: "2rem",
            // }}
            // @ts-ignore
            $activeLink={lastPath.includes("inbox")}
          >
            <Link href="/message/inbox" >
              <InboxNavLink
                // @ts-ignore
                $activeLink={lastPath.includes("inbox")}
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
            <Link href="/message/inbox/unread" >
              <InboxNavLink
                // @ts-ignore
                $activeLink={lastPath === "unread"}
              >
                Unread
              </InboxNavLink>
            </Link>
          </InboxNavLinkWrapper>

          <InboxNavLinkWrapper
            $style={{
              // marginLeft: "1rem",
            }}
            // @ts-ignore
            $activeLink={lastPath.includes("messages")}
          >
            {/* <Link href="/message/messages" > */}
            <a
              style={{
                textDecoration: "none",
              }}
              href="/message/messages"
              rel="noopener noreferrer"
            >
              <InboxNavLink
                // @ts-ignore
                $activeLink={lastPath.includes("messages")}
              >
                Messages
              </InboxNavLink>
            </a>

            {/* </Link> */}
          </InboxNavLinkWrapper>
        </InboxNavListWrapper>
      </InboxNavContainer>
    );
  } else {
    return null;
  }
};

export default InboxNav;