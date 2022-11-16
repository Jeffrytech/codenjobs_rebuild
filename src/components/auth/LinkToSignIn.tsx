import React from "react";

// import Link from "next/link";

// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Link, Typography } from "@material-ui/core"; // Link here helped ReCAPTCHA work.

import TextWrapper from "./TextWrapper";

const LinkToSignIn = () => {
  return (
    <div
      style={{
        marginBottom: "0.25rem",
        // marginLeft: "auto",
        // marginRight: "0.25rem",
        marginRight: "auto",
        marginLeft: "0.25rem",
      }}
    >
      <Grid container justify="flex-end">
        <Grid item>
          {/* <Link href="/signin" variant="body2">
          Already have an account? Sign in
        </Link> */}
          <Link href="/signin" >
            <TextWrapper>
              <Typography variant="body2" color="primary" >
                {/* {"Already have an account? Sign in"} */}
                {/* {"Have an account? Sign in"} */}
                {"Have an account?"}
              </Typography>
            </TextWrapper>
          </Link>
        </Grid>
      </Grid>
    </div>

  );
};

export default LinkToSignIn;