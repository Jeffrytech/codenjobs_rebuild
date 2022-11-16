import { styled } from "baseui";
import { blue } from "../../../design/colors";

const BlogVoteMoneyuserListCardContainer = styled("div", {
  display: "flex",
  
  color: "#374252",
  border: "1px solid #eee",
  padding: "0.5rem",
  // padding: "0.5rem",
  position: "relative",
  // transition: "all 0.2s",
  textDecoration: "none",
  backgroundColor: "white",

  cursor: "pointer",
  transition: "all 0.2s",

  ":hover": {
    opacity: 0.8, 
    color: blue
  }

  
});

export {
  BlogVoteMoneyuserListCardContainer,
};