import { styled } from "baseui";
import { XS } from "../../../design/breakpoints";
import { card } from "../../../design/common";

const JobShareCard = styled("div", {
  ...card
});

const JobShareContainer = styled("div", {
  padding: "0.5rem",
  
  borderTop: "1px solid #efefef",
});

const JobShareWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

const JobShareText = styled("span", {
  marginLeft: "0.25rem",

  [XS]: {
    display: "none",
  }
});

const SocialShareWrapper = styled("section", {
  display: "flex",
  marginLeft: "auto",
});

export {
  JobShareCard,
  
  JobShareContainer,
  JobShareWrapper,
  JobShareText,
  SocialShareWrapper,
};