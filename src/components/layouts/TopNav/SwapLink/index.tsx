import React from "react";

import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import {
  TopNavLinkContainer,
  TopNavLinkButtonWrapper,
  TopNavLinkButton,
} from "../TopNavLinkCSS";
import ExternalLink from "../../../ExternalLink";
import { SOLANA_DEX } from "../../../../config/environment";

// Categories and others?
// CryptoCategories later?
const Swap = () => {

  return (
    <TopNavLinkContainer>
      <TopNavLinkButtonWrapper>
        <ExternalLink href={`${SOLANA_DEX}/swap?inputCurrency=SOL&outputCurrency=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`}  >
          <TopNavLinkButton
            // style={{
            //     display: "flex",
            // }}
          >
            <span
              style={{
                marginRight: "0.25rem",
              }}
            >
              Swap
            </span>
            <SwapHorizIcon />
          </TopNavLinkButton>
        </ExternalLink>
      </TopNavLinkButtonWrapper>
    </TopNavLinkContainer>
  );

  // return (
  //     <TopNavLinkContainer>
  //         <TopNavLinkButtonWrapper>
  //             <ExternalLink href={`${COMPANY_DOCS_WEBSITE}/en`} >
  //                 <TopNavLinkButton>Docs</TopNavLinkButton>
  //             </ExternalLink>
  //         </TopNavLinkButtonWrapper>
  //     </TopNavLinkContainer>
  // );
};

export default Swap;