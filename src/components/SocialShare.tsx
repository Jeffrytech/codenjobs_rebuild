import React from "react";
import { styled } from "baseui";

import LinkIcon from "@material-ui/icons/Link";

// import Button from "@material-ui/core/Button";
// import Snackbar from "@material-ui/core/Snackbar";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";

import {
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,

  TwitterIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share"; // https://github.com/nygardk/react-share/

import SavedLinkToClipboard from "./SavedLinkToClipboard";

import { useSavedLinkToClipboard } from "../contexts/savedLinkToClipboard";
import copyToClipboard from "../browser/copyToClipboard";
// import { SnackbarContent } from "@material-ui/core";
// import { SavedLinkToClipboardProvider } from "../contexts/savedLinkToClipboard";

const LinkWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "0.25rem",
  background: "#efefef",
  padding: "0.25rem",
  borderRadius: "50%",
  color: "rgb(17, 160, 245)",

  // margin: "0 0.5rem",

  cursor: "pointer",
});

const SocialShare = ({
  title,
  url,
  // isProfile = false
  // image,
}) => {
  const {
    // @ts-ignore
    setSnackbarOpen,
  } = useSavedLinkToClipboard();

  return (
    <>
      <LinkWrapper onClick={(e) => {
        e.preventDefault();

        copyToClipboard(url);
        setSnackbarOpen(true);
      }}>
        <LinkIcon
          size={"2rem"}
          round
        />
      </LinkWrapper>
      
      <TwitterShareButton
        url={url}
      >
        <TwitterIcon
          size={"2rem"}
          round

          style={{
            display: "flex",
            marginRight: "0.25rem",
          }}
        />
      </TwitterShareButton>

      {/* <LinkedinShareButton
        url={url}
        title={title}
        windowWidth={750}
        windowHeight={600}
      >
        <LinkedinIcon
          size={"2rem"}
          round

          style={{
            display: "flex",
            marginRight: "0.25rem",
          }}
        />
      </LinkedinShareButton> */}

      <WhatsappShareButton
        url={url}
        title={title}
        separator=":: "
      >
        <WhatsappIcon
          size={"2rem"}
          round

          style={{
            display: "flex",
            marginRight: "0.25rem",
          }}
        />
      </WhatsappShareButton>

      <EmailShareButton
        url={url}
        subject={title}
        body=""
      >
        <EmailIcon
          size={"2rem"}
          round

          style={{
            display: "flex",
            marginRight: "0.25rem",
          }}
        />
      </EmailShareButton>

      <SavedLinkToClipboard />
    </>
  );
};

export default SocialShare;