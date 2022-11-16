import { styled } from "baseui";
import { MOBILE } from "../design/breakpoints";

// user/
const MainNFTImage = styled("img", ({ $isProfile = false, $isUserProfileCard = false }) => {
  return {
    width: "100%",
        
    // This will solve the CSS issue?
    minWidth: "100%",

    maxHeight: !$isProfile ? "8rem" : "16rem",
    // marginBottom: "1rem",
    // marginBottom: !$isProfile ? "0" : "1rem",
    
    marginTop: $isUserProfileCard ? "0.5rem" : "inherit",

    // marginBottom: 0,
    marginBottom: $isUserProfileCard ? "0" : "0.5rem",
    borderRadius: "0.5rem",
        
    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.7,
    },

    [MOBILE]: {
      maxHeight: "8rem",
    }
  };
});

export {
  MainNFTImage,
};