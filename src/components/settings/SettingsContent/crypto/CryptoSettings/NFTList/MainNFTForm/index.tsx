import React, { useEffect, useState } from "react";

// import { Avatar } from "baseui/avatar";
// import { StyledSpinnerNext } from "baseui/spinner";

import { Tooltip } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/Create";
// import ErrorIcon from "@material-ui/icons/Error";

// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

// import EmailIcon from "@material-ui/icons/Email";

// import Button from "@material-ui/core/Button";

import {
  UpdateButton,
  UpdateButtonWrapper,
  SettingsContentInputWrapper,
  SettingsContentTextInput,
  SettingsContentErrorWrapper,
  ProfileImageDeleteButton,
  SettingsContentDetail,
  SettingsContentDetailLabel,
  SettingsContentDetailText,
  SettingsContentImageDetailWrapper,
  SettingsContentImageHeader,
  // ProfileEditLoading,
} from "../../../../SettingsContentCSS";
import { MainNFTPreviewLabel } from "./MainNFTFormCSS";
import { MainNFTPreviewImage } from "../../MainNFTCSS";
import BlackPreview from "../../../../../../BlackPreivew";
import useMainNFTForm from "./useMainNFTForm";
import { findUserMainNFTByUsername } from "../../../../../../../api/mainNFT";
import { deleteMainNFT } from "../../../../../../../api/privateMainNFT";
import ExternalLink from "../../../../../../ExternalLink";

// import {
//   // UpdateImageSpinnerWrapper,
//   UpdateImageSpinner
// } from "../../../../spinners/UpdateImageSpinner";

const MainNFTForm = ({
  publicKey: solanaWalletPublicKey,
  user,
  mainNFT,
  setMainNFT,
}) => {
  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    // // setFieldTouched,
    // setValues,

    setFieldError,

    isSubmitting,
    // submitForm,
  } = useMainNFTForm(
    solanaWalletPublicKey,
    setMainNFT, mainNFT,
  );

  // const { publicKey } = useSolanaWallet();
  
  // Should use it with the database later
  // This should be from the database with useEffect
  // const [mainNFT, setMainNFT] = useState(null);\
  useEffect(() => {
    findUserMainNFTByUsername(user.username).then(({ data }) => {
      // console.log("data");
      // console.log(data);
      if (data !== null) {
        setFieldValue("solanaMainNFTPublicKey", data.public_key);
        setMainNFT(data.link);
        // Use this later if you include ETH/BNB later?
        // and also send to https://solscan.io/token/${data.public_key}
        // setBlockchainType(data.blockchain_type);
      }
    }).catch(error => {
      console.log("error");
      console.log(error);
    });
  }, []);

  const {
    solanaMainNFTPublicKey,
  } = values;

  // Delete -> Create -> Update
  const handleDeleteProfileImage = async (e) => {
    e.preventDefault();

    const { data, error } = await deleteMainNFT();

    if (error) {
      setFieldError("solanaMainNFTPublicKey", "Fail to delete the main NFT");
      return;
    }

    if (data === true) {
      setFieldValue("solanaMainNFTPublicKey", "");
      setMainNFT(null);
    } else {
      setFieldError("solanaMainNFTPublicKey", "Something went wrong");
    }
  };

  // alert(mainNFT);

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <SettingsContentImageHeader>Main NFT</SettingsContentImageHeader>
      <SettingsContentImageDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            You can use one of your Solana NFT list
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {/* {solanaWalletPublicKey === null ? "Connect your Solana wallet first" : "It will be shown at your profile"} */}
            {solanaWalletPublicKey === null ? "Connect your Solana wallet first to update it" : "It will be shown at your profile"}
          </SettingsContentDetailText>
        </SettingsContentDetail>
        {
          mainNFT !== null && (
            <ProfileImageDeleteButton
              onClick={handleDeleteProfileImage}
            >
              {/* Delete */}
              Reset
            </ProfileImageDeleteButton>
          )
        }
      </SettingsContentImageDetailWrapper>
      
      <ExternalLink href={`/user/${user.username}`} >
        <Tooltip title="View your profile" arrow >
          <MainNFTPreviewLabel>
            {
              mainNFT !== null ? 
                <MainNFTPreviewImage src={mainNFT} />
                :
                <BlackPreview />
            }
          </MainNFTPreviewLabel>
        </Tooltip>
      </ExternalLink>


    </form>
  );
};

export default MainNFTForm;