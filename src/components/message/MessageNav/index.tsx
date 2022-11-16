import React from "react";

import Link from "next/link";

import {
  MessageNavContainer,
  MessageNavListWrapper,
  MessageNavLinkWrapper,
  MessageNavLink,
} from "./MessageNavCSS";

import InboxNav from "./InboxNav";

const NotificationNav = ({
  // username,
  lastPath,
}) => {
  // alert(lastPath);

  return (
    <>
      <MessageNavContainer>
        <MessageNavListWrapper>
          <MessageNavLinkWrapper
            // $style={{
            //   marginLeft: "2rem",
            // }}
            // @ts-ignore
            $activeLink={lastPath.includes("compose")}
          >
            <Link href="/message/compose" >
              <MessageNavLink
                // @ts-ignore
                $activeLink={lastPath.includes("compose")}
              >
                Send a message
              </MessageNavLink>
            </Link>
          </MessageNavLinkWrapper>

          <MessageNavLinkWrapper
            $style={{
              // marginLeft: "1rem",
            }}
            // @ts-ignore
            $activeLink={lastPath.includes("inbox") || lastPath === "unread" || lastPath.includes("messages")} // Doesn't work, use query instead for path?
          >
            <Link href="/message/inbox" >
              <MessageNavLink
                // @ts-ignore
                $activeLink={lastPath.includes("inbox") || lastPath === "unread" || lastPath.includes("messages")}
              >
                Inbox
              </MessageNavLink>
            </Link>
          </MessageNavLinkWrapper>

          <MessageNavLinkWrapper
            $style={{
              // marginLeft: "1rem",
            }}
            // @ts-ignore
            $activeLink={lastPath.includes("sent")}
          >
            <Link href="/message/sent" >
              <MessageNavLink
                // @ts-ignore
                $activeLink={lastPath === lastPath.includes("sent")}
              >
                Sent
              </MessageNavLink>
            </Link>
          </MessageNavLinkWrapper>

        </MessageNavListWrapper>
      </MessageNavContainer>
      <InboxNav lastPath={lastPath} />
    </>
  );
};

export default NotificationNav;