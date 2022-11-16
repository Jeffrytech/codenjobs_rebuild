import React, { useState }  from "react";
import { useRouter } from "next/router";

import { Tooltip } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import NoEncryptionIcon from "@material-ui/icons/NoEncryption";
import { setBlogStatusToPublic, setBlogStatusToDraft } from "../../../api/privateBlog";
import { ProfileBlogStatusButton } from "./ProfileBlogStatusCSS";
import CentralizeChildren from "../../CentralizeChildren";

// Should handle all these for buttons, time and link etc.
// DRAFT = "Draft"
// PUBLIC = "Public"

// Should include edit and delete.
const ProfileBlogStatus = ({
  status,
  id,

  username,
}) => {
  const router = useRouter();
  
  const [localStatus, setLocalStatus] = useState(status);

  // console.log(jobList);

  // To public on click with CSS
  if (localStatus === "Draft") {
  // if (status === "Draft") {
    return (
      <Tooltip title="It is not visible for others. Click this to publish it." arrow >
        <CentralizeChildren onClick={async (e) => {
          e.preventDefault();

          const confirmed = confirm("Do you really want to publish it?");

          if (confirmed) {
            const { data, error } = await setBlogStatusToPublic(id);

            if (error) {
              console.log("error");
              console.error(error);
            }

            if (data === true) {
              // setLocalStatus("Public");

              // TODO
              // To use this, you need to update the frontend also
              // router.push(`/user/${username}/posts?&status=Public`);

              window.location.href = `/user/${username}/posts?&status=Public`;

              // Need to change the app also?
            }
          }

        }}>
          <ProfileBlogStatusButton>
            <LockIcon style={{
              fontSize: "1rem",
              marginRight: "0.25rem",
              opacity: 0.5,
            }} />
            Draft
          </ProfileBlogStatusButton>
        </CentralizeChildren>
      </Tooltip>
    );
  // } else if (status === "Public") {
  } else if (localStatus === "Public") {
    // To draft on clikc with CSS
    return (
      <Tooltip title="It is visible for others. Click this to unpublish it." arrow >
        <CentralizeChildren onClick={async (e) => {
          e.preventDefault();

          const confirmed = confirm("Do you really want to unpublish it?");

          if (confirmed) {
            const { data, error } = await setBlogStatusToDraft(id);

            // window.location.reload();

            if (error) {
              console.log("error");
              console.error(error);
            }

            if (data === true) {
              // setLocalStatus("Draft");
              // window.location.reload();

              // TODO, 
              // To use this, you need to change the app also
              // router.push(`/user/${username}/posts?&status=Draft`);
              
              window.location.href = `/user/${username}/posts?&status=Draft`;
              // https://www.codenjobs.com/]

            }
          }

        }} style={{
          // color: "rgb(37, 191, 161)",
          // color: "rgb(17, 160, 245)",
        }}>
          <ProfileBlogStatusButton>
            <NoEncryptionIcon style={{
              fontSize: "1rem",
              marginRight: "0.25rem",
              opacity: 0.5,
            }} />
            Public
          </ProfileBlogStatusButton>
        </CentralizeChildren>
      </Tooltip>
    );
  } else {
    return null;
  }
  
};

export default ProfileBlogStatus;
