import React from "react";
// import Link from "next/link";

// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Link, Typography } from "@material-ui/core";

import TextWrapper from "./TextWrapper";

const LinkToRegister = () => {
  return (
    <Grid item>
      <Link href="/register" >
        <TextWrapper>
          <Typography variant="body2" color="primary" >
            {"Don't have an account yet?"}
          </Typography>
        </TextWrapper>
      </Link>
      {/* <Link href="/register" variant="body2"> */}
      {/* {"Don't have an account yet?"} */}
      {/* </Link> */}
      {/* <Link href="/register" variant="body2">
        {"Don't have an account yet?"}
      </Link> */}
    </Grid>
  );
};

export default LinkToRegister;