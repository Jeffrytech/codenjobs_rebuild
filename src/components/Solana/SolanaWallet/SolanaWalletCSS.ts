import { styled } from "baseui";
import { DESKTOP } from "../../../design/breakpoints";

const SolanaNFTWalletContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: "center",

  // @ts-ignore
  // width: "100vw",
  // height: "100vh",

  // paddingTop: "3.75rem",
  minHeight: "100vh",

  backgroundColor: "#efefef",
});

const SolanaNFTWalletListContainer = styled("ul", ({
  $includeDesktopMoreList,
  $includeMobileMoreList,
}) => {
  // alert($includeMoreList);

  // alert($includeDesktopMoreList)

  let desktopFlexBasis = "0";
  if ($includeDesktopMoreList === 1) {
    desktopFlexBasis = "48rem";
  } else if ($includeDesktopMoreList === 2) {
    desktopFlexBasis = "32rem";
  } else if ($includeDesktopMoreList === 3) {
    desktopFlexBasis = "16rem";
  }

  let mobileFlexBasis = "0";
  if ($includeMobileMoreList === 1) {
    mobileFlexBasis = "32rem";
  } else if ($includeMobileMoreList === 2) {
    mobileFlexBasis = "16rem";
  }

  // alert($includeMobileMoreList);
  // alert(mobileFlexBasis);

  return {
    width: "64rem",
    display: "flex",
    // flexFlow: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",

    listStyle: "none",

    padding: "0 1rem 0 1rem",
    // gap: "1rem",

    ":after": {
      content: '""',
      // flexBasis: "18.125rem",
      // flexBasis: "36rem",
      flexBasis: desktopFlexBasis,
    },

    [DESKTOP]: {
      // width: "48rem",
      width: "calc(100% - 6rem)",

      ":after": {
        content: '""',
        flexBasis: mobileFlexBasis,
        // flexBasis: "16rem",
      },
    },

    // [MOBILE]: {
    //   width: "calc(100% - 6rem)",


    //   ":after": {
    //       content: '""',
    //       flexBasis: "28rem",
    //   },
    // },

    // [XS]: {
    //   width: "100%",
    //   // width: "21rem",

    //   // ":after": {
    //   //     content: '""',
    //   //     flexBasis: "21rem",
    //   // },
    // },

    // [XXS]: {
    //   width: "18rem",

    //   // ":after": {
    //   //     content: '""',
    //   //     flexBasis: "18rem",
    //   // },
    // },
  };

});


export {
  SolanaNFTWalletContainer,
  SolanaNFTWalletListContainer,
};