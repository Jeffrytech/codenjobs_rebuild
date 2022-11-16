import React from "react";

import { styled } from "baseui";

import Link from "@material-ui/core/Link";
import ErrorIcon from "@material-ui/icons/Error";

const NoListContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  // Include this for dropdown later and merge with NoList?
  // padding: "0 0 0 0rem",

  // [MOBILE]: {
  //   padding: "0 0 0 1rem",
  // }
});

export default function NoList({
  href, 
  message = "We couldn't find any job"
}) {
  return (
    <NoListContainer>
      <ErrorIcon style={{
        color: "rgb(17, 160, 245)",
      }} />
      <Link href={href} >
        <span style={{
          marginLeft: "0.25rem",
          fontWeight: "normal",
          // color: "black",
          color: "rgb(17, 160, 245)",
        }}>
          {message}
          {/* "We couldn't find any job" */}
        </span>
      </Link>
    </NoListContainer>
  );
}