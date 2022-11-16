import React from "react";
import Link from "@material-ui/core/Link";

import ErrorIcon from "@material-ui/icons/Error";

export default function NoFollower({
  username,
  isOwner
}) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      // padding: "1rem",
      padding: "1.5rem",
    }}>
      <ErrorIcon style={{
        color: "rgb(17, 160, 245)",
      }} />
      <Link style={{
        marginLeft: "0.5rem",
      }} href={`/user/${username}`} >
        <span style={{
          // marginLeft: "0.25rem",
          fontWeight: "normal",
          // color: "black",
          color: "rgb(17, 160, 245)",
        }}>
          {isOwner ? "You don't have any follower yet." : `u/${username} doesn't have any follower yet.`}
        </span>
      </Link>
    </div>
  );
}