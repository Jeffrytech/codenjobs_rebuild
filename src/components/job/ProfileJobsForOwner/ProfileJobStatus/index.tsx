import React  from "react";

import { Tooltip } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import NoEncryptionIcon from "@material-ui/icons/NoEncryption";
import CentralizeChildren from "../../../CentralizeChildren";

// Should handle all these for buttons, time and link etc.
// DRAFT = "Draft"
// CONFIRM = "Confirm"

// HOLD = "Hold"
// REVIEW = "Review"

// CANCELLED = "Cancelled"
// PAID = "Paid"

// CLOSED = "Closed"

// Should include edit and delete.
const ProfileJobStatus = ({
  job_status,
}) => {
  // console.log(jobList);

  if (job_status === "Draft") {
    return (
      <Tooltip title="It is not visible for others until you pay." arrow >
        <CentralizeChildren>
          <NoEncryptionIcon style={{
            fontSize: "1rem",
            marginRight: "0.25rem",
            opacity: 0.7,
          }} />
          <span style={{
            opacity: 0.7,
          }}>
            Draft
          </span>
        </CentralizeChildren>
      </Tooltip>
    );
  } else if (job_status === "Paid") {
    return (
      <Tooltip title="The job post is public but still needs for our confirmation" arrow >
        {/* <Tooltip title="We confirmed your post and payment" arrow > */}
        <CentralizeChildren>
          <LockIcon style={{
            fontSize: "1rem",
            marginRight: "0.25rem",
            opacity: 0.7,
          }} />
          <span style={{
            opacity: 0.7,
          }}>
            Paid
          </span>
        </CentralizeChildren>
      </Tooltip>
    );
  } else if (job_status === "Hold") {
    return (
      <Tooltip title="You need to edit and submit again to make it public" arrow >
        {/* <Tooltip title="We confirmed your post and payment" arrow > */}
        <CentralizeChildren>
          <NoEncryptionIcon style={{
            fontSize: "1rem",
            marginRight: "0.25rem",
            opacity: 0.7,
          }} />
          <span style={{
            opacity: 0.7,
          }}>
            Hold
          </span>
        </CentralizeChildren>
      </Tooltip>
    );
  } else if (job_status === "Review") {
    return (
      <Tooltip title="Please, wait until an admin confirm your job post or refund it" arrow >
        {/* <Tooltip title="We confirmed your post and payment" arrow > */}
        <CentralizeChildren>
          <LockIcon style={{
            fontSize: "1rem",
            marginRight: "0.25rem",
            opacity: 0.7,
          }} />
          <span style={{
            opacity: 0.7,
          }}>
            Review
          </span>
        </CentralizeChildren>
      </Tooltip>
    );
  } else if (job_status === "Confirmed") {
    return (
      // <Tooltip title="It is visible for others but still needs for our confirmation" arrow >
      <Tooltip title="It was confirmed and will be public for 4 weeks" arrow >
        <CentralizeChildren>
          <LockIcon style={{
            fontSize: "1rem",
            marginRight: "0.25rem",
            opacity: 0.7,
          }} />
          <span style={{
            opacity: 0.7,
          }}>
            Confirmed
          </span>
        </CentralizeChildren>
      </Tooltip>
    );
  } else if (job_status === "Closed") {
    return (
      // <Tooltip title="It is visible for others but still needs for our confirmation" arrow >
      // <Tooltip title="Users can still see this at your profile" arrow >
      <Tooltip title="The job post is not public anymore" arrow >
        <CentralizeChildren>
          <LockIcon style={{
            fontSize: "1rem",
            marginRight: "0.25rem",
            opacity: 0.7,
          }} />
          <span style={{
            opacity: 0.7,
          }}>
            Closed
          </span>
        </CentralizeChildren>
      </Tooltip>
    );
  } else {
    return null;
  }
  
};

export default ProfileJobStatus;
