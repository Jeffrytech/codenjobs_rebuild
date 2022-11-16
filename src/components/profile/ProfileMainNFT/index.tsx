import React, { useEffect, useState } from "react";

import { Tooltip } from "@material-ui/core";
import { MainNFTImage } from "../../../crypto/MainNFTImage";
import { findUserMainNFTByUsername } from "../../../api/mainNFT";
import ExternalLink from "../../ExternalLink";

const ProfileMainNFT = ({
  username,
  isProfile = false,
  isUserProfileCard = false,
}) => {
  const [mainNFT, setMainNFT] = useState(null);

  useEffect(() => {
    findUserMainNFTByUsername(username).then(({ data }) => {
      if (data !== null) {
        // alert(data);
        // alert(data.link);
        // console.log("data");
        // console.log(data);
        setMainNFT(data);
      }
    }).catch(error => {
      console.log("error");
      console.log(error);
    });
  }, [username]);

  if (mainNFT === null) {
    return null;
  }

  const tokenDetail = `https://solscan.io/token/${mainNFT.public_key}`;

  return (
    <ExternalLink
      href={tokenDetail}
    >
      <Tooltip
        title={tokenDetail}
        arrow
      >
        <MainNFTImage
          $isProfile={isProfile}
          src={mainNFT.link}
          alt={`Main NFT from ${username}`}
        />
      </Tooltip>
    </ExternalLink>
  );
};

export default ProfileMainNFT;
