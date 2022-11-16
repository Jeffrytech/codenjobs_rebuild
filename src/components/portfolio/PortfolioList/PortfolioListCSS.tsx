import { styled } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { boxShadow } from "../../../design/common";

// Extract this?
const card = {
  color: "#374252",
  boxShadow,
  flexShrink: 0,
  // borderRadius: "0.5px",
  borderRadius: "0.5rem",
  marginBottom: "2rem",
  backgroundColor: "white",

  [MOBILE]: {
    marginBottom: "1rem",
  }
};

const PortfolioListContainer = styled("ul", {
  margin: "0",
  padding: "0",
  listStyle: "none",
});

// Think a better name for this?
const PortfolioCard = styled("li", {
  ...card,

  // padding: "32px 16px",
  position: "relative", // To use setting button inside
});

// const PortfolioImageLink = styled("a", {
//   transition: "all 0.2s",
//   ":hover": {
//     opactiy: 0.7,
//   }
// })

const PortfolioImageWrapper = styled("figure", {
  border: "2px solid white",

  margin: "0",
  padding: "0",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "0.5rem",
});

const PortfolioImage = styled("img", {
  height: "auto",
  maxWidth: "100%",
  borderRadius: "0.5rem",

  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
  },
  [MOBILE]: {
    maxHeight: "16rem",
  }
});

const PortfolioTitle = styled("h2", {
  textAlign: "center",
  padding: "0 1rem",
  // padding: "0 2rem",

  // color: "black",
  color: "rgb(55, 66, 82)",

  transition: "all 0.2s",
  ":hover": {
    color: "rgb(17, 160, 245)"
  },

  // [XS]: {
  //   textAlign: "center",
  //   padding: "0 1rem",
  // }
});

const PortfolioDescription = styled("p", ({ $isOwner }) => {
  return {
    padding: $isOwner ? "0 1.5rem 0 1.5rem" : "0 1.5rem 1.5rem 1.5rem",
    opacity: "0.8",
    fontSize: "1.1rem",
    lineHeight: "1.25rem",

    [XS]: {
      fontSize: "1rem",
    }
  };
});

export {
  PortfolioListContainer,

  PortfolioCard,

  // PortfolioImageLink,
  PortfolioImageWrapper,
  PortfolioImage,
  PortfolioTitle,
  PortfolioDescription,
};