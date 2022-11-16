import { styled } from "baseui";

const ProfileBlogStatusButton = styled("div", {
  display:"flex",
  alignItems: "center",
  justifyContent: "center",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  }
});

export {
  ProfileBlogStatusButton,
};