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


// import { deleteCompanyByIdForOwner } from "../../../../api/privateCompany";

import { 
  OwnerButtonsContainer, 
  // OwnerEditButtonWrapper, 
  OwnerDeleteButtonWrapper 
} from "../../../OwnerButtonsCSS";
import { useAuth } from "../../../../contexts/auth";
import { deleteCompanyByIdForOwner } from "../../../../api/privateCompany";


// Extract CSS for this and make the delete button work with confirm
const ProfileJCompaniesForOwnerButtons = ({
  numberOfJobsForCompanyByOwner,
  // company_name,
  company_id,
}) => {
  const {
    // @ts-ignore
    user
  } = useAuth();

  if (numberOfJobsForCompanyByOwner === 0) {
    return (
      <OwnerButtonsContainer>
        {/* <Link href={`company/&name=${pageTitle(company_name)}&id=${company_id}`}> */}
        {/* <Link> */}

        {/* <Link href={`/company/post?&company_name=${pageTitle(company_name)}&id=${company_id}`}>
          <OwnerEditButtonWrapper 
            // onClick={() => {
            //   alert("unimplemented");
            // }}
          >
            <CreateIcon style={{
              fontSize: "1rem",
            }} />
            <span style={{
              marginLeft: "0.25rem",
            }}>
              Edit
            </span>
          </OwnerEditButtonWrapper>
        </Link> */}

        <OwnerDeleteButtonWrapper onClick={async (e) => {
          e.preventDefault();

          // // @ts-ignore
          // // eslint-disable-next-line no-undef
          const confirmed = confirm("Do you really want to delete it?");
          // // eslint-disable-next-line no-undef
          if (confirmed) {
            const { data, error } = await deleteCompanyByIdForOwner(company_id);

            // if (error) {
            //   // Show error message
            // }

            if (data) {
              window.location.href = `/user/${user.username}/companies`;
              // window.location.reload();
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
  } else {
    return null;
  }
};

export default ProfileJCompaniesForOwnerButtons;