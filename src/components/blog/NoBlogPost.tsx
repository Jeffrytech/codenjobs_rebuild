import React from "react";
// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";

import ErrorIcon from "@material-ui/icons/Error";

export default function NoBlogPost() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
    }}>
      <ErrorIcon style={{
        color: "rgb(17, 160, 245)",
      }} />
      <Link href="/jobs" >
        <span style={{
          marginLeft: "0.25rem",
          fontWeight: "normal",
          // color: "black",
          color: "rgb(17, 160, 245)",
        }}>
          {"We couldn't find any post"}
          {/* {"We couldn't find any job for this"} */}
        </span>
      </Link>
    </div>
  );
}

// import React from "react";
// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import Alert from "@material-ui/lab/Alert";
// import Link from "@material-ui/core/Link";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       backgroundColor: "white",
//     },
//   }),
// );

// export default function NoJob() {
//   const classes = useStyles();

//   return (
//     <Link href="/jobs" >
//       <Alert className={classes.root} severity="info">{"We couldn't find any job for this"}</Alert>
//     </Link>
//   );
// }