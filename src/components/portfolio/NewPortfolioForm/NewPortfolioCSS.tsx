import { styled } from "baseui";

const NewPortfolioButton = styled("a", {
  width: "100%",
  // This will solve the CSS issue?
  // minWidth: "100%",

  display: "block",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  textAlign: "center",
  lineHeight: "1rem",
  borderRadius: "0.5rem",
  letterSpacing: "0.7px",
  textDecoration: "none",

  // Use theme instead?
  color: "#fff",
  backgroundColor: "rgb(17, 160, 245)",
  border: "1px solid rgb(17, 160, 245)",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7
  }
});

const NewPortfolioButtonText = styled("span", {
// const NewPortfolioButtonText = styled("button", {
  marginLeft: "0.25rem",
});

// Extract this
const PortfolioImageWrapper = styled("figure", {
  margin: "1rem 0 0 0",
  // margin: "1rem 0 1rem 0",
  padding: "0",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Extract this
const PortfolioImage = styled("img", {
  height: "auto",
  maxHeight: "16rem",
  
  maxWidth: "100%",
  borderRadius: "0.5rem",

  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    opacity: 0.7,
  },
});

export {
  NewPortfolioButton,
  NewPortfolioButtonText,

  PortfolioImageWrapper,
  PortfolioImage,
};