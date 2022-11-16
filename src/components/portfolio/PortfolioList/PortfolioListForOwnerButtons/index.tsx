import React from "react";
// import Link from "next/link";
// import Search from 'baseui/icon/search'

import CreateIcon from "@material-ui/icons/Create";

// import LockIcon from "@material-ui/icons/Lock";
// import NoEncryptionIcon from "@material-ui/icons/NoEncryption";
// import VisibilityIcon from "@material-ui/icons/Visibility";

// import { Tooltip } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
// import CloseIcon from '@material-ui/icons/Close';

import {
  ProfileJobsOwnerButtonsContainer,
  ProfileJobsOwnerEditButtonWrapper,
  ProfileJobsOwnerDeleteButtonWrapper,

  // ProfileJobsStatusButtonWrapper,
} from "./ProfileJobsForOwnerButtonsCSS";
// import { JobPostStatusWrapper } from "../ProfileJobsForOwnerCSS";

// import {
//   CentralizeChildren
// } from "../../../Centralize";

import { deletePortfoiloByIdForOwner } from "../../../../api/privatePortfolio";

// Extract CSS for this and make the delete button work with confirm
const PortfolioListForOwnerButtons = ({
  portfoilo_id,

  // portfolioList,
  // setPortfolioList,

  setPortfolioIdToUpdate,
  setShowUpdatePortfolioForm,
}) => {
  // const [remove, setRemove] = useState(false);
  // // const [delete, setDelete] = useState(false);

  // if (remove) {
  //   return null;
  // }

  return (
    <ProfileJobsOwnerButtonsContainer>
      {/* <Link href={`/job/post?&title=${jobPageTitle(job_title)}&id=${job_id}`}> */}
      <ProfileJobsOwnerEditButtonWrapper onClick={(e) => {
        e.preventDefault();

        // alert(portfoilo_id);

        setPortfolioIdToUpdate(portfoilo_id);
        setShowUpdatePortfolioForm(true);
      }}>
        <CreateIcon style={{
          fontSize: "1rem",
        }} />
        <span style={{
          marginLeft: "0.25rem",
        }}>
          Edit
        </span>
      </ProfileJobsOwnerEditButtonWrapper>
      {/* </Link> */}
      <ProfileJobsOwnerDeleteButtonWrapper onClick={async (e) => {
        e.preventDefault();

        // @ts-ignore
        // eslint-disable-next-line no-undef
        const confirmed = confirm("Do you really want to delete it?");
        // eslint-disable-next-line no-undef
        if (confirmed) {
          const { data, error } = await deletePortfoiloByIdForOwner(portfoilo_id);

          if (data) {
            // Remove from the portfolio list instead of reload later?
            // const newPortfolioList = portfolioList.map(portfolio => {
            //   return portfolio.id !== portfoilo_id;
            // });
            // setPortfolioList(newPortfolioList);
            // setRemove(true);

            window.location.reload();
          }

          if (error) {
            console.log("error");
            console.error(error);
            // Show error message
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
      </ProfileJobsOwnerDeleteButtonWrapper>
    </ProfileJobsOwnerButtonsContainer>
  );
};

export default PortfolioListForOwnerButtons;