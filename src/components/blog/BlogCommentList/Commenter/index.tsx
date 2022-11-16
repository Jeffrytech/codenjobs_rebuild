import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover } from "@material-ui/core";

import {
  UsernameWrapper,
} from "./UsernameCSS";
import UserProfileCard from "../../../UserProfileCard";
import { useRouter } from "next/router";
import { useShadow } from "../../../../contexts/shadow";

// import UserProfileCard from "../UserProfileCard";

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

// Username later?
const Username = ({
  commenter,

  color = "rgb(55, 66, 82)",
  opacity = "inherit",
}) => {
  const router = useRouter();
  // @ts-ignore
  const { setShowShadow } = useShadow();

  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const popoverEnter = ({ currentTarget }) => {
    setOpenedPopover(true);
  };

  const popoverLeave = ({ currentTarget }) => {
    setOpenedPopover(false);
  };

  const classes = useStyles();

  if (!commenter) {
    return null;
  }

  return (
    <div>
      <UsernameWrapper
        ref={popoverAnchor}
        aria-owns="mouse-over-popover"
        aria-haspopup="true"
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}

        // @ts-ignore
        $color={color}
        $opacity={opacity}
      >
        <span onClick={() => {
          setShowShadow(false);
          router.push(`/user/${commenter}`);
        }} >
          {commenter}
        </span>
      </UsernameWrapper>
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
        <UserProfileCard username={commenter} />
      </Popover>
    </div>
  );
};

export default Username;