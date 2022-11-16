// This should be protected.

// Refer to these.
// https://github.com/settings/profile
// https://www.reddit.com/settings/profile

import React from "react";
import Link from "next/link";

import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";
import {
  WalletMultiButton,
  // WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";

// import { styled } from "baseui";

// import "./crypto.css";

import Settings from "@material-ui/icons/Settings";

import {
  UserSettingsContainer,
  UserSettingsWrapper,
  UserSettings,
  UserSettingsText,

  SettingsNavContainer,
  SettingsNavWrapper,
  SettingsNavList,
  SettingsNavLink,
} from "./SettingsNavCSS";
import SolanaImage from "../../../crypto/SolanaImage";

const SettingsNav = ({
  lastPath = ""
  // lastPath = ""
}) => {
  const isCrypto = lastPath === "crypto";

  return (
    <>
      <UserSettingsContainer>
        <UserSettingsWrapper>
          <UserSettings>
            <Settings /> <UserSettingsText>Settings</UserSettingsText>
            {/* <Settings /> <UserSettingsText>User Settings</UserSettingsText> */}
          </UserSettings>

          {/* <WalletConnectButton /> */}
          {isCrypto && <div style={{
            marginRight: "1.25rem",
          }} ><WalletMultiButton
              startIcon={<SolanaImage />}
            // className="solana-wallet-button"
            // style={{
            //   height: "2.5rem",
            //   marginRight: "5rem",
            //   // marginRight: "1.25rem",
            //   // marginRight: "1rem",
            //   padding: "1rem",
            //   fontSize: "0.75rem",
            //   opacity: 0,
            //   // marginTop: "1rem",
            // }}
            /></div>}
        </UserSettingsWrapper>
      </UserSettingsContainer>

      <SettingsNavContainer>
        <SettingsNavWrapper>
          <SettingsNavList>
            {/* Use this because of github username */}
            <SettingsNavLink
              href="/settings/account"
              rel="noopener noreferrer"

              style={{
                color: "black",
                textDecoration: "none",
              }}

              // @ts-ignore
              // $activeLink={lastPath === "account"}
              $activeLink={lastPath?.includes("account")}
            >
              Account
            </SettingsNavLink>

            {/* <Link href="/settings/account" >
              <SettingsNavLink
                // @ts-ignore
                // $activeLink={lastPath === "account"}
                $activeLink={lastPath?.includes("account")}
              >
                Account
                </SettingsNavLink>
            </Link> */}

            <Link href="/settings/profile" >
              <SettingsNavLink
                // @ts-ignore
                $activeLink={lastPath === "profile"}
              >
                Profile
              </SettingsNavLink>
            </Link>
            <Link href="/settings/privacy" >
              <SettingsNavLink
                // @ts-ignore
                $activeLink={lastPath === "privacy"}
              >
                Privacy
              </SettingsNavLink>
            </Link>
            <Link href="/settings/email-and-message" >
              <SettingsNavLink
                // @ts-ignore
                $activeLink={lastPath === "email-and-message"}
              >
                {"Email & Message"}
              </SettingsNavLink>
            </Link>
            <Link href="/settings/notification" >
              <SettingsNavLink
                // @ts-ignore
                $activeLink={lastPath === "notification"}
              >
                Notification
              </SettingsNavLink>
            </Link>
            <Link href="/settings/job" >
              <SettingsNavLink
                // @ts-ignore
                $activeLink={lastPath === "job"}
              >
                Job
              </SettingsNavLink>
            </Link>
            <Link href="/settings/ref" >
              <SettingsNavLink
                // @ts-ignore
                $activeLink={lastPath === "ref"}
              >
                Ref
              </SettingsNavLink>
            </Link>
            {/* This doesn't work because the Solana wallet connection is not persiting because of the meta data issue */}
            <Link href="/settings/crypto" >
              <SettingsNavLink
                // @ts-ignore
                $activeLink={isCrypto}
              >
                Crypto
              </SettingsNavLink>
            </Link>
          </SettingsNavList>
        </SettingsNavWrapper>
      </SettingsNavContainer>
    </>
  );
};

export default SettingsNav;