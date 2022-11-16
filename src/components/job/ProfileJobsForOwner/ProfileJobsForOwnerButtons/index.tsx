import React from "react";
import Link from "next/link";
// import Search from 'baseui/icon/search'

import CreateIcon from "@material-ui/icons/Create";

// import LockIcon from "@material-ui/icons/Lock";
// import NoEncryptionIcon from "@material-ui/icons/NoEncryption";
// import VisibilityIcon from "@material-ui/icons/Visibility";

// import { Tooltip } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
// import CloseIcon from '@material-ui/icons/Close';

import { deleteJobByIdForOwner } from "../../../../api/privateJob";
import { OwnerButtonsContainer, OwnerDeleteButtonWrapper, OwnerEditButtonWrapper } from "../../../OwnerButtonsCSS";
import { formatPathTitle } from "../../../../title/path";

// import { OwnerButtonsContainer, OwnerEditButtonWrapper, OwnerDeleteButtonWrapper } from "../../../OwnerButtonsCSS";


// Extract CSS for this and make the delete button work with confirm
const ProfileJobsForOwnerButtons = ({
  job_id,
  job_status,

  job_title,
  company_name,

  setJobList,
}) => {
  if (job_status === "Draft") {
    return (
      <OwnerButtonsContainer>
        <Link href={`/job/post?&title=${formatPathTitle(job_title)}&id=${job_id}`}>
          <OwnerEditButtonWrapper>
            <CreateIcon style={{
              fontSize: "1rem",
            }} />
            <span style={{
              marginLeft: "0.25rem",
            }}>
              Edit
            </span>
          </OwnerEditButtonWrapper>
        </Link>
        <OwnerDeleteButtonWrapper onClick={async (e) => {
          e.preventDefault();

          // @ts-ignore
          // eslint-disable-next-line no-undef
          const confirmed = confirm("Do you really want to delete it?");
          // eslint-disable-next-line no-undef
          if (confirmed) {
            // alert(job_id);

            const { data, error } = await deleteJobByIdForOwner(job_id);

            if (error) {
              console.log("deleteJobByIdForOwner error");
              console.error(error);
              // Show error message

              return;
            }

            // alert(data);

            if (data) {
              setJobList(jobList => {
                return jobList.filter(job => {
                  return job.job_id !== job_id;
                });
              });
            }

            
          }
        }}>
          <CancelIcon style={{
            fontSize: "1rem",
          }} />
          <span style={{
            marginLeft: "0.25rem",
          }}>
            Delete
          </span>
        </OwnerDeleteButtonWrapper>
      </OwnerButtonsContainer>
    );
  }

  if (job_status === "Confirmed") {
    return (
      null
      // <OwnerButtonsContainer>
      //   <Link href={`/job?&title=${formatPathTitle(job_title)}&id=${job_id}`}>
      //     {/* <Link href={`/job?&title=${jobPageTitle(job_title, company_name)}&id=${job_id}`}> */}
      //     <OwnerEditButtonWrapper>
      //       {/* <VisibilityIcon style={{
      //         fontSize: "1rem",
      //       }} /> */}
      //       <span style={{
      //         marginLeft: "0.25rem",
      //       }}>
      //         {/* Read */}
      //         {/* View */}
      //       </span>
      //     </OwnerEditButtonWrapper>
      //   </Link>
      // </OwnerButtonsContainer>
    );
  }

  if (job_status === "Hold") {
    return null;
    
    // return (
    //   <OwnerButtonsContainer>
    //     {/* Set it to draft again? */}

    //     <Link href={`/job/post?&title=${formatPathTitle(job_title)}&id=${job_id}`}>
    //       <OwnerEditButtonWrapper>
    //         <CreateIcon style={{
    //           fontSize: "1rem",
    //         }} />
    //         {/* <ErrorIcon style={{
    //           color: blue,
    //           width: "1rem",
    //         }} /> */}
    //         <span style={{
    //           marginLeft: "0.25rem",
    //         }}>
    //           Edit
    //           {/* Please, submit your job post again */}
    //         </span>
    //       </OwnerEditButtonWrapper>
    //     </Link>

    //   </OwnerButtonsContainer>
    // );
  }

  // if (job_status === "Review") {
  //   return (
  //     <ProfileJobsOwnerButtonsContainer>
  //       <Link href={`/job/post?&id=${job_id}`}>
  //         <ProfileJobsOwnerEditButtonWrapper>
  //           <CreateIcon style={{
  //             fontSize: "1rem",
  //           }} />
  //           <span style={{
  //             marginLeft: "0.25rem",
  //           }}>
  //             Edit
  //           </span>
  //         </ProfileJobsOwnerEditButtonWrapper>
  //       </Link>
  //       <ProfileJobsStatusButtonWrapper>
  //         <Tooltip title="It is not visible for others until you edit and pass our confirmation" arrow >
  //           <CentralizeChildren>
  //             {/* <NoEncryptionIcon style={{
  //               fontSize: "1rem",
  //               marginRight: "0.25rem",
  //               opacity: 0.5,
  //             }} /> */}
  //             <LockIcon style={{
  //               fontSize: "1rem",
  //               marginRight: "0.25rem",
  //               opacity: 0.5,
  //             }} />
  //             Hold
  //           </CentralizeChildren>
  //         </Tooltip>
  //       </ProfileJobsStatusButtonWrapper>
  //     </ProfileJobsOwnerButtonsContainer>
  //   );
  // }

  if (job_status === "Paid") {
    return (
      null
    );
  }

  if (job_status === "Closed") {
    return null;

    // return (
    //   <OwnerButtonsContainer>
    //     {/* Set it to draft again? */}
        
    //     {/* <Link href={`/job/post?&title=${formatPathTitle(job_title)}&id=${job_id}`}>
    //       <OwnerEditButtonWrapper>
    //         <CreateIcon style={{
    //           fontSize: "1rem",
    //         }} />
    //         <span style={{
    //           marginLeft: "0.25rem",
    //         }}>
    //           Edit
    //         </span>
    //       </OwnerEditButtonWrapper>
    //     </Link> */}

    //     <OwnerDeleteButtonWrapper onClick={async (e) => {
    //       e.preventDefault();

    //       // @ts-ignore
    //       // eslint-disable-next-line no-undef
    //       const confirmed = confirm("Do you really want to delete it?");
    //       // eslint-disable-next-line no-undef
    //       if (confirmed) {
    //         const { data, error } = await deleteJobByIdForOwner(job_id);

    //         // if (data) {
    //         window.location.reload();
    //         // }

    //         // if (error) {
    //         //   // Show error message
    //         // }
    //       }
    //     }}>
    //       <CancelIcon style={{
    //         fontSize: "1rem",
    //       }} />
    //       <span style={{
    //         marginLeft: "0.25rem",
    //       }}>
    //         Delete
    //       </span>
    //     </OwnerDeleteButtonWrapper>
    //   </OwnerButtonsContainer>
    // );
  }

  // if (job_status === "Closed") {
  //   return (
  //     <ProfileJobsOwnerButtonsContainer>
  //       <Link href={`/job/closed?&id=${job_id}`}>
  //         <ProfileJobsOwnerEditButtonWrapper>
  //           <CreateIcon style={{
  //             fontSize: "1rem",
  //           }} />
  //           <span style={{
  //             marginLeft: "0.25rem",
  //           }}>
  //             Edit
  //         </span>
  //         </ProfileJobsOwnerEditButtonWrapper>
  //       </Link>
  //       <ProfileJobsOwnerDeleteButtonWrapper onClick={async (e) => {
  //         e.preventDefault();

  //         // @ts-ignore
  //         // eslint-disable-next-line no-undef
  //         const confirmed = confirm("Do you really want to delete it?");
  //         // eslint-disable-next-line no-undef
  //         if (confirmed) {
  //           const { data, error } = await deleteJobByIdForOwner(job_id);

  //           // if (data) {
  //           window.location.reload();
  //           // }

  //           // if (error) {
  //           //   // Show error message
  //           // }
  //         }
  //       }}>
  //         <CancelIcon style={{
  //           fontSize: "1rem",
  //         }} />
  //         <span style={{
  //           marginLeft: "0.25rem",
  //         }}>
  //           Delete
  //         </span>
  //       </ProfileJobsOwnerDeleteButtonWrapper>
  //         <Tooltip title="It is not visible for others" arrow >
  //           <CentralizeChildren>
  //             {/* <NoEncryptionIcon style={{
  //               fontSize: "1rem",
  //               marginRight: "0.25rem",
  //               opacity: 0.5,
  //             }} /> */}
  //             <LockIcon style={{
  //               fontSize: "1rem",
  //               marginRight: "0.25rem",
  //               opacity: 0.5,
  //             }} />
  //             Closed
  //           </CentralizeChildren>
  //         </Tooltip>
  //       </ProfileJobsStatusButtonWrapper>
  //     </ProfileJobsOwnerButtonsContainer>
  //   );
  // }

  return null;
};

export default ProfileJobsForOwnerButtons;