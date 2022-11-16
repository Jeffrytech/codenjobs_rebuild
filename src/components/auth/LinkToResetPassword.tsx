import React from "react";

import Link from "next/link";

// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import TextWrapper from "./TextWrapper";

const LinkToResetPassword = () => {
  return (
    <Grid item xs>
      {/* <Link href="/reset-password" variant="body2">
        Reset password?
      </Link> */}
      <Link href="/reset-password" >
        <TextWrapper>
          <Typography variant="body2" color="primary" >
            {"Reset Password?"}
          </Typography>
        </TextWrapper>
      </Link>
    </Grid>
  );
};

export default LinkToResetPassword;