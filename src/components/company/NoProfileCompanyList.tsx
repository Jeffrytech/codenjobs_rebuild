import React from "react";

import { styled } from "baseui";

// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import Alert from "@material-ui/lab/Alert";
// import Link from "@material-ui/core/Link";
import Link from "@material-ui/core/Link";
import ErrorIcon from "@material-ui/icons/Error";
import { MOBILE, XS } from "../../design/breakpoints";
// import { MOBILE } from "../design/breakpoints";

const NoProfileCompanyListContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  padding: "1.5rem 1.5rem 1.5rem 2.5rem",

  background: "white",
  border: "1px solid rgb(238, 238, 238)",
  borderRadius: "0.5rem 0.5rem 0 0",

  [XS]: {
    // padding: "1.5rem 1.5rem 1.5rem 1rem",
    padding: "1rem",
  }
});

export default function NoProfileCompanyList({
  href,
  message,
}) {
  return (
    <NoProfileCompanyListContainer>
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
        </span>
      </Link>
    </NoProfileCompanyListContainer>
  );
}