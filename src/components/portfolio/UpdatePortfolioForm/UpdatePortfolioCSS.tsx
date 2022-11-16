import { styled } from "baseui";

// Extract this
const PortfolioImageWrapper = styled("figure", {
  margin: "0.5rem 0 0 0",
  // margin: "1rem 0 0 0",
  // margin: "1rem 0 1rem 0",
  padding: "0",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Extract this
const PortfolioImage = styled("img", {
  height: "auto",
  maxWidth: "100%",
  borderRadius: "0.5rem",

  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
  }
});

export {
  PortfolioImageWrapper,
  PortfolioImage,
};