/* eslint-disable no-trailing-spaces */
import React from "react";
import Link from "next/link";

import { useOnOutsideClick } from "../../../useOutsideClick";

import NoteIcon from "@material-ui/icons/Note";

import LaunchIcon from "@mui/icons-material/Launch";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import WorkIcon from '@material-ui/icons/Work';
// import SearchIcon from "@material-ui/icons/Search";
// import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
// import SwapVertIcon from '@material-ui/icons/SwapVert';

// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import {
  SidebarListCotnainer,
  SidebarDropdownContainer,
  SidebarDropdownWrapper,
  SidebarDropdownLabel,
  SidebarMobileLinksContainer,
} from "./SidebarCSS";

// import env from "../../../config/environment";
import ExternalLink from "../../ExternalLink";

import {
  CODE_SOLANA_TOKEN,
  COMPANY_DOCS_WEBSITE,
  COMPANY_NAME,
  SOLSCAN,
} from "../../../config/environment";
import { useSidebar } from "../../../contexts/sidebar";
// import { useShadow } from "../../../contexts/shadow";
import { useSolanaCodeTokenDetails } from "../../../contexts/solanaCodeToken";
import { blue } from "../../../design/colors";
// const API = `${env.API}`;

const Sidebar = () => {
  // @ts-ignore
  const { showSidebar, setShowSidebar } = useSidebar();
  // @ts-ignore
  // const { showShadow, setShowShadow } = useShadow();

  // @ts-ignore
  const { solanaCodeTokenTotalHolders, solanaCodeTokenPrice } =
    useSolanaCodeTokenDetails();

  const closeSidebar = () => {
    setShowSidebar(false);
    // setShowShadow(false);
  };

  const { innerBorderRef } = useOnOutsideClick(() => {
    closeSidebar();
  });

  // @ts-ignore
  // Sidebar.handleClickOutside = closeSidebar;

  // const solanaCodeTokenPrice = "0.00000003";

  return (
    <>
      {/* <Shadow /> */}
      <SidebarListCotnainer ref={innerBorderRef}>
        {showSidebar && (
          <SidebarDropdownContainer>
            <SidebarMobileLinksContainer>
              <div onClick={closeSidebar}>
                <Link href="/">
                  <SidebarDropdownWrapper>
                    {/* <SearchIcon /> */}
                    <b
                      style={{
                        color: blue,
                      }}
                    >
                      {COMPANY_NAME}
                    </b>
                  </SidebarDropdownWrapper>
                </Link>
              </div>
            </SidebarMobileLinksContainer>

            {/* <div onClick={() => {
            // setShowShadow(false);
          }}>
            <ExternalLink href={`${SOLSCAN}/token/${CODE_SOLANA_TOKEN}`} >
              <UserDropdownWrapper>
                <img src="/static/logos/solana.png" style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginLeft: "0.15rem",
                  marginRight: "0.1rem",
                }} />
                <UserDropdownLabel>
                  <span>
                    ${solanaCodeTokenPrice}
                  </span>
                </UserDropdownLabel>
              </UserDropdownWrapper>
            </ExternalLink>
          </div> */}

            <div onClick={closeSidebar}>
              {/* <Link href="/settings/profile" > */}
              {/* <ExternalLink href={`${SOLSCAN}/token/${CODE_SOLANA_TOKEN}#holders`} > */}
              <ExternalLink href={`${SOLSCAN}/token/${CODE_SOLANA_TOKEN}`}>
                <SidebarDropdownWrapper>
                  {/* <Settings /> */}
                  {/* <MonetizationOnIcon /> */}
                  <img
                    src="/static/logos/solana.png"
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      marginLeft: "0.15rem",
                      marginRight: "0.1rem",
                    }}
                  />
                  <SidebarDropdownLabel>
                    <span>
                      {/* {solanaCodeTokenTotalHolders} Holders */}$
                      {solanaCodeTokenPrice}
                    </span>
                  </SidebarDropdownLabel>
                </SidebarDropdownWrapper>
              </ExternalLink>

              {/* </Link> */}
            </div>

            {/* <div onClick={closeSidebar} >
            <Link href="/company/whitepaper" >
              <SidebarDropdownWrapper>
                <NoteIcon />
                <SidebarDropdownLabel>
                  Whitepaper
                </SidebarDropdownLabel>
              </SidebarDropdownWrapper>
            </Link>
          </div> */}

            <div onClick={closeSidebar}>
              <ExternalLink href={`${COMPANY_DOCS_WEBSITE}`}>
                <SidebarDropdownWrapper>
                  <NoteIcon />
                  <SidebarDropdownLabel>Docs</SidebarDropdownLabel>
                </SidebarDropdownWrapper>
              </ExternalLink>
            </div>

            {/* <div
            onClick={closeSidebar}
          >
            <ExternalLink href={`${SOLANA_DEX}/swap?inputCurrency=SOL&outputCurrency=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`} >
              <SidebarDropdownWrapper>
                <SwapHorizIcon />
                <SidebarDropdownLabel>
                  Swap
                </SidebarDropdownLabel>
              </SidebarDropdownWrapper>
            </ExternalLink>
          </div> */}

            <div onClick={closeSidebar}>
              {/* <ExternalLink href={`${SOLANA_DEX}/swap?inputCurrency=SOL&outputCurrency=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`} > */}
              {/* <ExternalLink href="https://solana.codenjobs.com/nft/projects" > */}
              <ExternalLink href="/nft/projects">
                <SidebarDropdownWrapper>
                  <LaunchIcon />
                  <SidebarDropdownLabel>NFT</SidebarDropdownLabel>
                </SidebarDropdownWrapper>
              </ExternalLink>
            </div>

            <SidebarDropdownWrapper>
              <ExitToAppIcon />
              <SidebarDropdownLabel onClick={closeSidebar}>
                Close
              </SidebarDropdownLabel>
            </SidebarDropdownWrapper>
          </SidebarDropdownContainer>
        )}
      </SidebarListCotnainer>
    </>
  );
};

// const clickOutsideConfig = {
//   // @ts-ignore
//   handleClickOutside: () => Sidebar.handleClickOutside
// };

// export default onClickOutside(Sidebar, clickOutsideConfig);
export default Sidebar;
