import { styled } from "baseui";
import { DESKTOP } from "../../design/breakpoints";
import { white } from "../../design/colors";
import { hover } from "../../design/common";
// import { XS } from "../breakpoints";

const ListBySortOptionNavbarContainer = styled("nav", {
  display: "flex",
  justifyContent: "space-around",
  width: "100vw",
  marginTop: "-2rem",
  marginBottom: "0.5rem",
});

const ListBySortOptionNavbarWrapper = styled("div", {
  margin: "0 auto",
  width: "64rem",
  color: white,
  fontSize: "1rem",
});

const ListBySortNavbarOptionContainer = styled("div", {
  marginLeft: "0.75rem",

  [DESKTOP]: {
    marginLeft: "1.75rem",
  }
});

const ListBySortNavbarOption = styled("span", ({ $selected }) => {
  // const ListBySortNavbarOption = styled("a", ({ $selected }) => {
  // const ListBySortNavbarOptionDefaultCSS = {
  //     marginRight: "1rem",
  //     borderBottom: "2px solid white",
  //     paddingBottom: "0.1rem"
  // };

  // alert($selected);

  if ($selected) {
    return {
      borderBottom: "2px solid white",
      paddingBottom: "0.25rem",
      marginRight: "1.5rem",
      // ...ListBySortNavbarOptionDefaultCSS,
      ":hover": hover,
    };
  } else {
    return {
      // opacity: 0.5,
      opacity: 0.8,
      // opacity: 1,
      marginRight: "1.5rem",

      ":hover": hover,


    };
  }
});

export {
  ListBySortOptionNavbarContainer,
  ListBySortOptionNavbarWrapper,

  ListBySortNavbarOptionContainer,
  ListBySortNavbarOption,
};