import React from "react";
import Link from "next/link";
// import Search from 'baseui/icon/search'

import CreateIcon from "@material-ui/icons/Create";

// import LockIcon from "@material-ui/icons/Lock";
// import NoEncryptionIcon from "@material-ui/icons/NoEncryption";
// import VisibilityIcon from "@material-ui/icons/Visibility";

// import { Tooltip } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { OwnerButtonsContainer, OwnerDeleteButtonWrapper, OwnerEditButtonWrapper } from "../../../OwnerButtonsCSS";
import { deleteBlogByIdForOwner } from "../../../../api/privateBlog";
import { formatPathTitle } from "../../../../title/path";
// import CloseIcon from '@material-ui/icons/Close';

// Extract CSS for this and make the delete button work with confirm
const ProfileBlogPostsForOwnerButtons = ({
  id,
  status,

  title,

  blogList,
  setBlogList,
  // company_name,
}) => {
  // console.log("blogList");
  // console.log(blogList);

  if (status === "Draft") {
    return (
      <OwnerButtonsContainer>
        <Link href={`/blog/post?&title=${formatPathTitle(title)}&id=${id}`}>
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
            const { data, error } = await deleteBlogByIdForOwner(id);

            // alert(data);

            if (data === true) {
              const newBlogList = blogList.filter(blog => blog.id !== id);
              // console.log("newBlogList");
              // console.log(newBlogList);
              setBlogList(newBlogList.length === 0 ? null : newBlogList);
            // window.location.reload();
            }

            // if (error) {
            //   // Show error message
            // }
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

  if (status === "Public") {
    return (
      <OwnerButtonsContainer>
        <Link href={`/blog/post?&title=${formatPathTitle(title)}&id=${id}`}>
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
            const { data, error } = await deleteBlogByIdForOwner(id);

            // alert(data);

            if (data === true) {
              const newBlogList = blogList.filter(blog => blog.id !== id);
              // console.log("newBlogList");
              // console.log(newBlogList);
              setBlogList(newBlogList.length === 0 ? null : newBlogList);
              // window.location.reload();
            }

            // if (error) {
            //   // Show error message
            // }
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

  // if (job_status === "Hold") {
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

  // if (job_status === "Cancelled") {
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

  return null;
};

export default ProfileBlogPostsForOwnerButtons;