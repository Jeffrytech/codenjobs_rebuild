import { styled } from "baseui";

const PageviewsContainer = styled("div", {
  backgroundColor: "white",
  width: "44rem",
  maxWidth: "100%",
  marginTop: "2rem",
  marginBottom: "2rem",
  borderRadius: "0.1rem",
});

const PageviewsSection = styled("section", {
  padding: "1rem 2rem 2rem 2rem",
});

const PageViewsDescription = styled("p", {
  opacity: 0.7,
  lineHeight: "1.25rem",
});

export {
  PageviewsContainer,
  PageviewsSection,

  PageViewsDescription,
};