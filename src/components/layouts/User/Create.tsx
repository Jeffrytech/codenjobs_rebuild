/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from "react";

// https://material-ui.com/pt/api/tooltip/
import { Tooltip } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
import CodeIcon from "@material-ui/icons/Code";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogContentText from "@material-ui/core/DialogContentText";

import DialogTitle from "@material-ui/core/DialogTitle";

import {
  UserIconWrapper,
  NewBlogPostButton,
  NewJobPostButton,
} from "./UserCSS";

const Create = ({ username, image }) => {
  const [showUserCreateForm, setShowUserCreateForm] = useState(false);

  const handleClose = () => {
    setShowUserCreateForm(false);
  };

  return (
    <>
      <Tooltip title="Create a post" arrow>
        <UserIconWrapper
          onClick={(e) => {
            e.preventDefault();

            setShowUserCreateForm(true);
          }}
        >
          <CreateIcon />
        </UserIconWrapper>
      </Tooltip>

      <Dialog
        open={showUserCreateForm}
        onClose={handleClose}
        aria-labelledby="create-new-post"
      >
        {/* Include image here */}
        <DialogTitle id="create-new-post">
          <div
            style={{
              //  display: "flex",
              //  alignItems: "center",

              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              marginTop: "1rem",
              marginLeft: "-0.5rem",
            }}
          >
            <div>
              <Avatar alt={username} src={image || "/static/logo.svg"} />
            </div>

            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              New Post
            </span>
          </div>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>Post a new blog or job post.</DialogContentText>

          <div
            style={{
              display: "flex",
              flexFlow: "column",
            }}
          >
            <NewBlogPostButton href="/blog/post">
              <CodeIcon />
              <span
                style={{
                  marginLeft: "0.25rem",
                }}
              >
                Post a blog
              </span>
            </NewBlogPostButton>

            <NewJobPostButton href="/job/post">
              <MonetizationOnIcon />
              <span
                style={{
                  marginLeft: "0.25rem",
                }}
              >
                Post a job
              </span>
            </NewJobPostButton>
          </div>
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

export default Create;

// {/* <Tooltip title="Create a post" arrow >
//         <UserIconWrapper>
//           <a
//             href="/job/post"
//             style={{
//               textDecoration: "none",
//               color: "black",
//             }}
//             // target="_blank"
//             rel="noopener noreferrer"
//           >
//             <CreateIcon />
//           </a>
//         </UserIconWrapper>
//       </Tooltip> */}
