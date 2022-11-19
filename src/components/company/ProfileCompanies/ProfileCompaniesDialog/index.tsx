import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// import { COMPANY_NAME } from "../../../config/environment";

import { DialogContentText, Tooltip } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

// import {
//   ProfileShareWrapper
// } from "./ProfileShareCSS";

// import SocialShare from "../../SocialShare";
import {
  HTTPS,
  COMPANY_NAME,
  COMPANY_WEBSITE,
} from "../../../../config/environment";

const ProfileCompaniesDialog = ({
  // username,
  // profile_image,
  showProfileCompaniesDialog,
  setShowProfileCompaniesDialog,

  // dialogCompanyLogo,
  // dialogCompanyName,
  dialogNumberOfJobs,
}) => {
  // const [showShare, setShowShare] = useState(false);

  const handleClose = () => {
    setShowProfileCompaniesDialog(false);
  };

  return (
    <>
      <Dialog
        open={showProfileCompaniesDialog}
        onClose={handleClose}
        aria-labelledby="show-profile-company-list-dialog"
      >
        {/* <Dialog open={showProfileCompaniesDialog} onClose={handleClose} aria-labelledby="show-profile-companies-dialgo"> */}
        {/* Include image here */}
        <DialogTitle id="profile-company-list-dialog-title">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Avatar
              alt={COMPANY_NAME}
              src={"/static/logo.svg"}
              // src={dialogCompanyLogo || "/static/logo.svg"}
            />
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              {/* {dialogNumberOfJobs} */}
              {dialogNumberOfJobs}
              {/* used for {dialogNumberOfJobs} */}
              {/* 2 Jobs */}
              {/* Share the profile */}
            </span>
          </div>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            You can't remove the company information when there is one or more
            job posts are used with it.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfileCompaniesDialog;
