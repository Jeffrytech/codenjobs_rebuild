import { styled, withStyle } from "baseui";

const CenteredInPageBase = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const CenteredInPage = withStyle(CenteredInPageBase, {
  // height: "100vh",
  // width: "100vw"

  // @ts-ignore
  width: "100vw",
  height: "100vh",
  minHeight: "100vh",
});

// const CenteredInPageAuth = withStyle(CenteredInPageBase, {
//   height: "100%",
//   width: "100%",
// });

export default CenteredInPage;
