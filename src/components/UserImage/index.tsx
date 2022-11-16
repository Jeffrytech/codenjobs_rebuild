import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover } from "@material-ui/core";

// import {
//   UserImageWrapper,
// } from "./UserImageCSS";

import UserProfileCard from "../UserProfileCard";
import { Avatar } from "baseui/avatar";

// import { findProfile } from "../../api/profile";
// import { API } from "../../../config/environment";
// import Link from "next/link";

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none",
  },
  popoverContent: {
    pointerEvents: "auto",
    padding: theme.spacing(1)
  },
}));

// UserImage later?
const UserImage = ({
  username,
  image,
}) => {
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const popoverEnter = ({ currentTarget }) => {
    setOpenedPopover(true);
  };

  const popoverLeave = ({ currentTarget }) => {
    setOpenedPopover(false);
  };

  const classes = useStyles();

  if (!username) {
    return null;
  }

  return (
    <div>
      <span
        ref={popoverAnchor}
        aria-owns="mouse-over-popover"
        aria-haspopup="true"
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
      >
        <Avatar
          name={username}
          size="scale800"
          src={image}
        />
      </span>

      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.popoverContent,
        }}
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
      >
        <UserProfileCard username={username} />
      </Popover>
    </div>
  );
};

export default UserImage;