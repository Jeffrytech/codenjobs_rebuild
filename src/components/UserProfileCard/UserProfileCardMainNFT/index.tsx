import React, { useEffect, useState } from "react";

import { MainNFTImage } from "../../../crypto/MainNFTImage";
import { findUserMainNFTByUsername } from "../../../api/mainNFT";

const ProfileMainNFT = ({
  username,
  isProfile = false,
  isUserProfileCard = false,
}) => {
  const [mainNFT, setMainNFT] = useState(null);

  useEffect(() => {
    findUserMainNFTByUsername(username).then(({ data }) => {
      if (data !== null) {
        setMainNFT(data);
      }
    }).catch(error => {
      console.log("error");
      console.log(error);
    });
  }, []);

  if (mainNFT === null) {
    return null;
  }

  return (
    <MainNFTImage
      $isProfile={isProfile}
      $isUserProfileCard={isUserProfileCard}
      src={mainNFT.link}
      alt={`Main NFT from ${username}`}
    />
  );
};

export default ProfileMainNFT;
