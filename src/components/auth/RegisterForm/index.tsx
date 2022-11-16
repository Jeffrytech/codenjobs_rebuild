import React from "react";

import RegisterForm from "./RegisterForm";

import CenteredInPage from "../../CenteredInPage";

// Use this to render fast with dynamic render instead of ssr
const Index = ({
  ref_username
}) => {
  // alert("ref_username");
  // alert(ref_username); ref_username || ""

  // const classes = useStyles();
  
  return (
    <>
      <CenteredInPage style={{
        // marginTop: "-5rem",
        // marginTop: "-4rem",
      }}>
        {/* <CssBaseline /> */}
        {/* <LoginFormContainer> */}
        <div style={{
          maxWidth: "21rem",
          minHeight: "100vh",

          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}>
          <RegisterForm ref_username={ref_username} />
        </div>
        {/* </LoginFormContainer> */}
        {/* <Box mt={5}>
          <Copyright />
        </Box> */}
      </CenteredInPage>
    </>
  );
};

export default Index;