import { styled, withStyle } from "baseui";
import { MOBILE, XS } from "../../../design/breakpoints";
import { blue, discord, solana } from "../../../design/colors";

const SettingsContentContainer = styled("div", {
  margin: "auto",
  maxWidth: "64rem",
});

const SettingsContentWrapper = styled("div", {
  maxWidth: "44rem",
  minHeight: "100vh",
  
});

const CryptoSettingsWrapper = styled("div", {
  maxWidth: "44rem",
  minHeight: "100vh",
});

const SettingsContentPreferencesHeader = styled("h2", {
  margin: "0",
  padding: "1.5rem 0.8rem",
  fontSize: "1.25rem",
  // fontWeight: "normal",
});

const SettingsContentImageHeader = styled("h2", {
  margin: "0",
  padding: "1.5rem 0.8rem",
  fontSize: "1.25rem",
  // fontWeight: "normal",

  // [MOBILE]: {
  //   marginTop: "4rem",
  // }
});

const SettingsContentHeader = styled("h2", {
  margin: "0",
  padding: "0 0.8rem",
  fontSize: "1.25rem",
});

const SettingsContentPreferencesDetailWrapper = styled("div", {
  display: "flex",
  flexFlow: "row",
  margin: "0 1rem 1.5rem 1rem",

  [XS]: {
    flexFlow: "column",
  }
});

const SettingsContentImageDetailWrapper = styled("div", {
  display: "flex",
  flexFlow: "row",
  margin: "0 1rem 1.5rem 1rem",

  [XS]: {
    flexFlow: "column",
  }

});

const SettingsContentDetailWrapper = styled("div", {
  display: "flex",
  flexFlow: "row",
  margin: 0,
  // padding: "1.5rem 1rem 0.5rem",
  // padding: "1.5rem 1rem 0.5rem",
  padding: "1.5rem 1rem 0.5rem 1rem",
  // padding: "1.5rem 1rem 1.5rem 1rem",

  [XS]: {
    flexFlow: "column",
  }
});

const SettingsContentDetail = styled("div", {
  display: "flex",
  flexFlow: "column",
  marginRight: "auto",
});

const SettingsContentDetailLabel = styled("label", {
  marginBottom: "0.25rem",
});

const SettingsContentDetailText = styled("span", {
  opacity: 0.5,
  fontSize: "0.85rem",
  wordBreak: "break-all",
});

const SettingsContentButton = styled("button", ({
  // @ts-ignore
  $color,
}) => {
  return {
    marginRight: "1rem",

    color: $color || "rgb(17, 160, 245)",
    background: "white",
    border: `1px solid ${$color || "rgb(17, 160, 245)"}`,
    borderRadius: "0.5rem",
    padding: "0 0.5rem",
    fontWeight: "bold",

    transition: "all 0.2s",
    cursor: "pointer",

    ":hover": {
      opacity: 0.7,
      // background: "#efefef",
    },
    ":focus": {
      outline: "none",
    },

    [XS]: {
      marginTop: "1rem",
      padding: "0.5rem",
    }
  };
});

const SettingsContentDeleteButton = withStyle(SettingsContentButton, {
  // @ts-ignore
  color: "#ff1676",
  border: "1px solid #ff1676",

  [XS]: {
    marginTop: "1rem",
    padding: "0.5rem",
  }
});

const ProfileImageDeleteButton = styled("button", {
  marginRight: "1rem",

  // color: $color || "rgb(17, 160, 245)",
  background: "white",
  // border: `1px solid ${$color || "rgb(17, 160, 245)"}`,
  borderRadius: "0.5rem",
  padding: "0 0.5rem",
  fontWeight: "bold",

  transition: "all 0.2s",
  cursor: "pointer",

  ":hover": {
    opacity: 0.7,
    // background: "#efefef",
  },
  ":focus": {
    outline: "none",
  },

  // [XS]: {
  //   marginTop: "2rem",
  // },

  color: "#ff1676",
  border: "1px solid #ff1676",

  [XS]: {
    marginTop: "2rem",
    padding: "0.5rem",
  }
});

const SettingsContentGitHubButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  marginRight: "1rem",

  color: "white",
  background: "black",
  border: "none",
  borderRadius: "0.5rem",
  padding: "0 0.5rem",
  fontWeight: "bold",

  transition: "all 0.2s",
  cursor: "pointer",

  ":hover": {
    opacity: 0.7,
    // background: "#efefef",
  },
  ":focus": {
    outline: "none",
  },

  [XS]: {
    marginTop: "1rem",
    padding: "0.5rem",
  }
});

const SettingsContentDiscordButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginRight: "1rem",

  color: "white",
  background: discord,
  border: "none",
  borderRadius: "0.5rem",
  padding: "0 0.5rem",
  fontWeight: "bold",

  transition: "all 0.2s",
  cursor: "pointer",

  ":hover": {
    opacity: 0.7,
    // background: "#efefef",
  },
  ":focus": {
    outline: "none",
  },

  [XS]: {
    marginTop: "1rem",
    padding: "0.5rem",
  }
});

const SettingsContentTwitterButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginRight: "1rem",

  color: "white",
  // background: discord,
  background: blue,
  border: "none",
  borderRadius: "0.5rem",
  padding: "0 0.5rem",
  fontWeight: "bold",

  transition: "all 0.2s",
  cursor: "pointer",

  ":hover": {
    opacity: 0.7,
    // background: "#efefef",
  },
  ":focus": {
    outline: "none",
  },

  [XS]: {
    marginTop: "1rem",
    padding: "0.5rem",
  }
});

// const SettingsContentSolanaButton = styled("button", {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",

//   marginRight: "1rem",

//   color: "white",
//   background: solana,
//   border: "none",
//   borderRadius: "0.5rem",
//   padding: "0 0.5rem",
//   fontWeight: "bold",

//   transition: "all 0.2s",
//   cursor: "pointer",

//   ":hover": {
//     opacity: 0.7,
//     // background: "#efefef",
//   },
//   ":focus": {
//     outline: "none",
//   },

//   [XS]: {
//     marginTop: "1rem",
//     padding: "0.5rem",
//   }
// });

const ProfileImageInputLabel = styled("label", {
  display: "block",

  borderRadius: "0.5rem",
  border: "1px solid #efefef",
  width: "7rem",
  padding: "0.5rem",
  margin: "1.5rem 1rem",
  cursor: "pointer",
  position: "relative",
});

const ProfileImageInput = styled("input", {
  display: "none",
});

const ProfileEditButton = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "absolute",
  top: "5rem",
  right: "1rem",

  padding: "0.5rem",

  background: "white",
  color: "rgb(17, 160, 245)",
  border: "1px solid rgb(17, 160, 245)",

  borderRadius: "50%",
});

const ProfileEditLoading = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "absolute",
  top: "5rem",
  right: "1rem",

  padding: "0.5rem",

  background: "white",
  color: "rgb(17, 160, 245)",
  border: "1px solid rgb(17, 160, 245)",

  borderRadius: "50%",
});

const SettingsContentInputDetaillWrapper = styled("div", {
  display: "flex",
  flexFlow: "row",
  margin: "1rem",
});

const SettingsContentInputWrapper = styled("div", {
  marginTop: "0.5rem",
  marginLeft: "1rem",
  marginRight: "2rem",
});

const SettingsContentErrorWrapper = styled("div", {
  marginTop: "0.5rem",
  // marginLeft: "1rem",
  marginLeft: "1.25rem",
  marginRight: "2rem",
});

const SettingsContentErrorDetaillWrapper = styled("div", {
  display: "flex",
  flexFlow: "row",
  margin: "1rem",
});


const SettingsContentTextInput = styled("input", {
  width: "100%",
  margin: "0 0 0.5rem 0",
  boxSizing: "border-box",
  borderRadius: "0.5rem",
  fontSize: "1rem",
  padding: "0.5rem",
  backgroundColor: "#fff",
  border: "2px solid #efefef",

  [XS]: {
    fontSize: "0.8rem"
  }
});

const SettingsContentSkillInput = styled("input", {
  width: "100%",
  margin: "0 0 0 0",
  boxSizing: "border-box",
  borderRadius: "0.5rem",
  fontSize: "1rem",
  padding: "0.5rem",
  backgroundColor: "#fff",
  border: "2px solid #efefef",

  [XS]: {
    fontSize: "0.8rem"
  }
});

const SettingsContentTextarea = styled("textarea", {
  width: "100%",
  margin: "0",
  boxSizing: "border-box",
  borderRadius: "0.5rem",
  fontSize: "1.2rem",
  padding: "0.5rem",
  backgroundColor: "#fff",
  border: "2px solid #efefef",

  resize: "both",

  [XS]: {
    fontSize: "1rem"
    // fontSize: "0.8rem"
  }
});

const CharactersLeftWrapper = styled("span", {
  opacity: 0.5,
  marginLeft: "1.1rem",
  fontSize: "0.8rem",
});

const ErrorMessageWrapper = styled("span", {
  marginLeft: "1.1rem",
  fontSize: "0.8rem",
  color: "#ff1676",
});

const UpdateButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // marginLeft: "1rem",
  marginRight: "2rem",
  marginTop: "1rem",

  marginBottom: "1.5rem",
});

const UpdateButton = styled("button", {
  display: "flex",
  
  background: "rgb(37, 191, 161)",
  color: "white",
  padding: "0.5rem 2rem",
  border: "2px solid #efefef",
  borderRadius: "0.5rem",

  transition: "all 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 0.7,
  },
  ":focus": {
    outline: "none",
  },

  [MOBILE]: {
    width: "100%",
    marginLeft: "1rem",
    justifyContent: "center",
  }
});

// const SkillsLeftWrapper = withStyle(CharactersLeftWrapper, {
// const SkillsLeftWrapper = styled("span", {
//   marginTop: "0.5rem 0 0.25rem",
//   opacity: 0.5,
//   fontSize: "0.8rem",
//   display: "flex",
//   // margin: "1rem 0 0 0.5rem",
// });

// opacity: 0.5,
//   marginLeft: "1.1rem",
//     fontSize: "0.8rem",

// const SkillsLeftWrapper = withStyle(CharactersLeftWrapper, {
const SkillsLeftWrapper = styled("span", {
  margin: "0.5rem 0 0 0.25rem",
  opacity: 0.5,
  display: "flex",
  fontSize: "0.8rem",
  // margin: "1rem 0 0 0.5rem",
});
// const SkillsLeftWrapper = withStyle(CharactersLeftWrapper, {
//   margin: "0.5rem 0 0 0.25rem",
//   display: "flex",
//   // margin: "1rem 0 0 0.5rem",
// });

const SettingsSkillsWrapper = styled("div", {
  display: "flex",
  // marginTop: "0.25rem",
  flexWrap: "wrap",

  marginTop: "1rem",
  marginBottom: "0.5rem",
});

const SettingsSkill = styled("div", {
  marginRight: "0.25rem",
  marginBottom: "0.5rem",
});

export {
  SettingsContentContainer,
  SettingsContentWrapper,
  CryptoSettingsWrapper,

  SettingsContentPreferencesHeader,
  SettingsContentImageHeader,
  SettingsContentHeader,

  SettingsContentPreferencesDetailWrapper,
  SettingsContentImageDetailWrapper,
  SettingsContentDetailWrapper,
  SettingsContentDetail,
  SettingsContentDetailLabel,
  SettingsContentDetailText,
  SettingsContentButton,
  SettingsContentDeleteButton,

  ProfileImageDeleteButton,

  SettingsContentGitHubButton,
  SettingsContentDiscordButton,
  SettingsContentTwitterButton,

  // SettingsContentSolanaButton,

  ProfileImageInputLabel,
  ProfileImageInput,

  ProfileEditButton,
  ProfileEditLoading,

  SettingsContentInputDetaillWrapper,
  SettingsContentErrorDetaillWrapper,

  SettingsContentInputWrapper,
  SettingsContentTextInput,
  SettingsContentTextarea,
  SettingsContentSkillInput,

  SettingsContentErrorWrapper,

  CharactersLeftWrapper,
  ErrorMessageWrapper,

  UpdateButtonWrapper,
  UpdateButton,

  SkillsLeftWrapper,

  SettingsSkillsWrapper,
  SettingsSkill,
};