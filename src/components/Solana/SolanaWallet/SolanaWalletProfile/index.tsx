import { useEffect, useState } from "react";

import { Avatar } from "baseui/avatar";

import {
  SolanaWalletProfileContainer,
  // SolanaWalletProfileImage,
  SolanaWalletProfileDetails,
  SolanaWalletShortend,
  SolanaBalance,
  CodeBalance,
  SolanaWalletProfileImageWrapper,
  ExploreCollectionsRedirectButton,
} from "./SolanaWalletProfileCSS";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { shortenAddress } from "../../../../crypto/utils";
import { SOLSCAN } from "../../../../config/environment";
import Link from "next/link";
import { findCodeTokenBalance } from "../../../../crypto/solana/spl";
import ExternalLink from "../../../ExternalLink";

const SolanaWalletProfile = ({
  solanaWalletUserPublicKey,
  solanaConnection,
  userSolanaNftList = "",
}) => {

  const [profile, setProfile] = useState(null);

  async function fetchSolanaWalletDetails() {
    try {
      const solanaBalance = await solanaConnection.getBalance(solanaWalletUserPublicKey);
      const currentSolanaBalance = solanaBalance / LAMPORTS_PER_SOL;
      const currentCodeTokenBalance = await findCodeTokenBalance(solanaWalletUserPublicKey);

      const solanaWalletShortend = shortenAddress(solanaWalletUserPublicKey.toString());

      setProfile({
        solanaWalletShortend,
        currentSolanaBalance,
        currentCodeTokenBalance,
      });

    } catch (error) {
      console.log("fetchSolanaWalletDetails error");
      console.error(error);
    }

  }

  useEffect(() => {
    fetchSolanaWalletDetails();
  }, [solanaWalletUserPublicKey]);

  if (profile === null) {
    return null;
  }
    
  return (
    <>
      <SolanaWalletProfileContainer>
        <SolanaWalletProfileImageWrapper>
          <Avatar
            name={solanaWalletUserPublicKey.toString()}
            size="6rem"
            src={"/static/solscan.png"}
          />
        </SolanaWalletProfileImageWrapper>

        <SolanaWalletProfileDetails>
          <ExternalLink
            href={`${SOLSCAN}/account/${solanaWalletUserPublicKey.toString()}`}
          >
            <SolanaWalletShortend>{profile.solanaWalletShortend}</SolanaWalletShortend>
          </ExternalLink>
          <SolanaBalance>
            <img
              src="/static/logos/solana.png"
              style={{
                width: "1rem",
                height: "1rem",
                marginRight: "0.25rem",
              }}
              alt="solana logo"
            />
            {profile.currentSolanaBalance.toFixed(2)} Sol
          </SolanaBalance>
          <CodeBalance>
            <img
              src="/static/logo_white.png"
              style={{
                width: "1rem",
                height: "1rem",
                marginRight: "0.25rem",
              }}
            />
            {profile.currentCodeTokenBalance.toFixed(2)} CODE
          </CodeBalance>
        </SolanaWalletProfileDetails>
      </SolanaWalletProfileContainer>

      {userSolanaNftList === "No user solana nft list" && <div
        style={{
          padding: "1rem",
          background: "white",
          borderRadius: "0.5rem",
          margin: "2rem"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            margin: "0 0 0.5rem 0",
          }}
        >
          You don't have any NFT
        </h2>
        <p
          style={{
            opacity: "0.7",
          }}
        >
          You can purchase NFTs from our projects
        </p>

        <Link
          href="/nft/projects"
        >
          <ExploreCollectionsRedirectButton>
            Explore collections
          </ExploreCollectionsRedirectButton>
        </Link>
      </div>}
    </>
  );
   
};

export default SolanaWalletProfile;

