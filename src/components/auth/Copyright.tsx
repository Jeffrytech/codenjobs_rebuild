import React from "react";

import Link from "next/link";

// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import { COMPANY_NAME } from "../../config/environment";

import TextWrapper from "./TextWrapper";

function Copyright() {
  return (
    <Typography style={{
      // Remove this at mobile?
      marginBottom: "1rem",
    }} variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link href="/" >
        <TextWrapper>
          {COMPANY_NAME} {" "}
        </TextWrapper>
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;