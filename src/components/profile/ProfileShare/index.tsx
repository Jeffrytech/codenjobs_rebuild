import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// import { COMPANY_NAME } from "../../../config/environment";

import { Tooltip } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

import { ProfileShareWrapper } from "./ProfileShareCSS";

import SocialShare from "../../SocialShare";
import {
  HTTPS,
  COMPANY_NAME,
  COMPANY_WEBSITE,
} from "../../../config/environment";

const ProfileShare = ({ username, profile_image }) => {
  const [showShare, setShowShare] = useState(false);
  const handleClose = () => {
    setShowShare(false);
  };

  return (
    <>
      <ProfileShareWrapper
        onClick={() => {
          setShowShare(true);
        }}
      >
        <Tooltip title="Share the profile" arrow>
          <ShareIcon />
        </Tooltip>
      </ProfileShareWrapper>

      <Dialog
        open={showShare}
        onClose={handleClose}
        aria-labelledby="show-social-share-buttons"
      >
        {/* Include image here */}
        <DialogTitle id="change-email">
          <div
            style={{
              //  display: "flex",
              //  alignItems: "center",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Avatar
              alt={COMPANY_NAME}
              src={profile_image || "/static/logo.svg"}
            />
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              Share the profile
            </span>
          </div>
        </DialogTitle>

        <DialogContent>
          <section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SocialShare
              title={`${username} - Code&Jobs`}
              // Update this later?
              // This will work at the production anyway.
              url={`${HTTPS}${COMPANY_WEBSITE}/user/${username}`}
            />
          </section>

          {/* <DialogContentText>
            Share this profile with others
          </DialogContentText> */}
        </DialogContent>

        <DialogActions>
          <Button
            // disabled={isSubmitting}
            onClick={handleClose}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfileShare;
