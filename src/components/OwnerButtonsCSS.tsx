import { styled } from "baseui";
import { black, green } from "../design/colors";
import { hover } from "../design/common";

const OwnerButtonsContainer = styled("div", {
  display: "flex",
  marginTop: "0.5rem",
});

const OwnerEditButtonWrapper = styled("a", {
  display: "flex",
  alignItems: "center",

  color: "rgb(17, 160, 245)",
  marginRight: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  }
});

const UserButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  marginTop: "0.5rem",
});

const UserMoneyButtonWrapper = styled("div", ({ $moneyVote }) => {
  // alert($moneyVote);
  
  return {
    display: "flex",
    alignItems: "center",

    color: $moneyVote ? green : "inherit",
    // marginRight: "0.5rem",
    marginRight: "0.25rem",

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.8,
    }
  };
});

const UserProfileMoneyButtonWrapper = styled("div", ({ $isPublic }) => {
  // alert($moneyVote);
  
  return {
    display: "flex",
    alignItems: "center",

    color: "inherit",
    // marginRight: "0.5rem",
    marginRight: "0.25rem",

    ":hover": $isPublic ? hover : {},
  };
});

const UserCommentButtonWrapper = styled("div", () => {
  return {
    display: "flex",
    alignItems: "center",

    // marginRight: "0.5rem",
    marginRight: "auto",

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.8,
    }
  };
});

const UserProfileCommentButtonWrapper = styled("div", ({ $isPublic }) => {
  return {
    display: "flex",
    alignItems: "center",

    marginRight: "0.5rem",

    ":hover": $isPublic ? hover : {},
  };
});

const PollButtonWrapper = styled("div", () => {
  // alert($moneyVote);

  return {
    display: "flex",
    alignItems: "center",
    // marginLeft: "auto",

    color: black,
    // marginRight: "0.5rem",

    transition: "all 0.2s",
    cursor: "pointer",
    ":hover": {
      opacity: 0.8,
      // color: green,
      // color: blue,
    },

    // [MOBILE]: {
    //   display: "none",
    // }
  };
});

// const UserMoneyButtonWrapper = styled("a", {
//   display: "flex",
//   alignItems: "center",

//   // color: "rgb(17, 160, 245)",
//   marginRight: "0.5rem",

//   transition: "all 0.2s",
//   cursor: "pointer",
//   ":hover": {
//     opacity: 0.7,
//   }
// });

const OwnerClipboardButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  color: "rgb(17, 160, 245)",
  marginRight: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  }
});

const OwnerDeleteButtonWrapper = styled("a", {
  display: "flex",
  alignItems: "center",

  color: "#ff1676",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  }
});

export {
  OwnerButtonsContainer,
  OwnerEditButtonWrapper,
  OwnerDeleteButtonWrapper,

  OwnerClipboardButtonWrapper,

  UserButtonsContainer,
  
  UserMoneyButtonWrapper,
  UserProfileMoneyButtonWrapper,

  UserCommentButtonWrapper,
  UserProfileCommentButtonWrapper,
  
  PollButtonWrapper,
};