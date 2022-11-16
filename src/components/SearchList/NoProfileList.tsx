import React from "react";

import { styled } from "baseui";

// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import ErrorIcon from "@material-ui/icons/Error";
import { MOBILE } from "../../design/breakpoints";

const NoProfileListContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  padding: "1.5rem 1.5rem 1.5rem 1.75rem",

  [MOBILE]: {
    padding: "1.5rem 1.5rem 1.5rem 1rem",
  }
});

export default function NoProfileList({
  href, 
  message = "We couldn't find any job"
}) {
  return (
    <NoProfileListContainer>
      <ErrorIcon style={{
        color: "rgb(17, 160, 245)",
      }} />
      <Link href={href} >
        <span style={{
          marginLeft: "0.25rem",
          fontWeight: "normal",
          // color: "black",
          color: "rgb(17, 160, 245)",
          display: "flex",
        }}>
          {message}
          {/* "We couldn't find any job" */}
        </span>
      </Link>
    </NoProfileListContainer>
  );
}