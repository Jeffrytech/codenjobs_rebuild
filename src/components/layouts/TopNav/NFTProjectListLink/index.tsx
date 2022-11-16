import React from "react";

import LaunchIcon from '@mui/icons-material/Launch';

import {
  TopNavLinkContainer,
  TopNavLinkButtonWrapper,
  TopNavLinkButton,
} from "../TopNavLinkCSS";
import ExternalLink from "../../../ExternalLink";

// Categories and others?
// CryptoCategories later?
const NFT = () => {

  return (
    <TopNavLinkContainer>
      <TopNavLinkButtonWrapper>
        {/* <ExternalLink href={`${SOLANA_DEX}/swap?inputCurrency=SOL&outputCurrency=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`}  > */}
        {/* <ExternalLink href="https://solana.codenjobs.com/nft/projects" > */}
        <ExternalLink href="/nft/projects" >
          <TopNavLinkButton
            // style={{
            //     display: "flex",
            // }}
          >
            {/* @ts-ignore */}
            <span
              style={{
                marginRight: "0.25rem",
              }}
            >
              NFT
            </span>
            <LaunchIcon 
              style={{
                fontSize: "1.25rem",
              }}
            />
          </TopNavLinkButton>
        </ExternalLink>
      </TopNavLinkButtonWrapper>
    </TopNavLinkContainer>
  );
};

export default NFT;