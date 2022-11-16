import React, { useState } from "react";

import { BsDiscord, BsTwitter } from "react-icons/bs";
import GitHubIcon from "@material-ui/icons/GitHub";

import {
  SettingsContentHeader,

  SettingsContentDetailWrapper,

  SettingsContentDetail,
  SettingsContentDetailLabel,

  SettingsContentDetailText,
  SettingsContentGitHubButton,
  SettingsContentDiscordButton,
  SettingsContentTwitterButton,

  // SettingsContentSolanaButton,
} from "../../SettingsContentCSS";

import {
  githubLogin,
  githubDisconnect, // Remove github at the database
} from "../../../../../api/privateGithub";
import { useAuth } from "../../../../../contexts/auth";
import { discordDisconnect, discordLogin } from "../../../../../api/privateDiscord";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import SolanaImage from "../../../../../crypto/SolanaImage";
import { twitterLogin, twitterDisconnect } from "../../../../../api/privateTwitter";

// import GitHubConnectErrorMessage from "../../../../error/GitHubConnectErrorMessage";
// import SolanaImage from "../../../../../crypto/SolanaImage";

const Connect = ({
  github_username,
}) => {
  const [githubEndpointError, setGithubEndpointError] = useState(null);
  const [discordEndpointError, setEndpointError] = useState(null);

  const {
    // @ts-ignore
    user
  } = useAuth();

  console.log("user");
  console.log(user);

  // const {
  //   github_username,
  // } = user;

  return (
    <>
      <SettingsContentHeader>
        Connect
      </SettingsContentHeader>

      <SettingsContentDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Your Discord account
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {user.discord_user_details === null ? "Its username will be shown at your profile" : `${user.discord_user_details.discord_username}#${user.discord_user_details.discriminator}`}
          </SettingsContentDetailText>
        </SettingsContentDetail>

        <SettingsContentDiscordButton onClick={async () => {
          if (!user.discord_user_details) {
            // if (true) {
            // try {
            const { data: redirect, error } = await discordLogin();

            if (error) {
              console.log("Discord login response error");
              console.error(error);
              const errorDetail = error.response.data.detail;
              console.error(errorDetail);

              // alert(errorDetail);
              // setGithubEndpointError(errorDetail);
            }

            if (redirect) {
              window.location.href = redirect;
            }


            // } catch (catchError) {
            //   console.log("Discord login request catch error");
            //   console.error(catchError);

            //   // setGithubEndpointError(errorDetail);
            // }
          } else {
            try {
              const { data: disconnected, error } = await discordDisconnect();

              if (error) {
                console.log("Discord disconnect response error");
                console.log(error);
                const errorDetail = error.response.data.detail;
                console.error(errorDetail);

                // alert(errorDetail);
                return;

                // setGithubEndpointError(errorDetail);
              }

              if (disconnected === true) {
                // window.location = redirect;
                window.location.href = "/settings/account";
              } else {
                // Should improve this later
                alert("Something went wrong while removing your Discord account from our server");
                return;
              }
            } catch (catchError) {
              console.log("Discord disconnect request catch error");
              console.error(catchError);
            }
          }
        }}>
          <BsDiscord style={{
            marginLeft: "0.25rem",
            fontSize: "1rem",
          }} /> <span style={{
            marginLeft: "0.5rem",
            marginRight: "0.25rem",
          }}>
            {(user.discord_user_details !== null) ? "Disconnect" : "Connect"}
          </span>
        </SettingsContentDiscordButton>
      </SettingsContentDetailWrapper>

      <SettingsContentDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Your GitHub account
          </SettingsContentDetailLabel>
          {/* {githubEndpointError === null ? <SettingsContentDetailText>
            {github_username || user.github_username || "Its username will be shown at your profile"}
          </SettingsContentDetailText>
          : <GitHubConnectErrorMessage 
            responseError={githubEndpointError}
          />} */}
          <SettingsContentDetailText>
            {github_username || user.github_username || "Its username will be shown at your profile"}
          </SettingsContentDetailText>
        </SettingsContentDetail>

        <SettingsContentGitHubButton onClick={async () => {
          setGithubEndpointError(null);
          
          if (!(github_username || user.github_username)) {
            try {
              const { data: redirect, error } = await githubLogin();

              // alert(redirect);

              if (error) {
                console.log("GitHub login response error");
                console.log(error);
                const errorDetail = error.response.data.detail;
                console.error(errorDetail);

                alert(errorDetail);

                setGithubEndpointError(errorDetail);

                return;
              }

              if (redirect) {
                window.location.href = redirect;
              }

            } catch (catchError) {
              console.log("GitHub login request catch error");
              console.error(catchError);

              // setGithubEndpointError(errorDetail);
            }
          } else {
            try {
              const { data: disconnected, error } = await githubDisconnect();

              if (error) {
                console.log("GitHub disconnect response error");
                console.log(error);
                const errorDetail = error.response.data.detail;
                console.error(errorDetail);

                alert(errorDetail);

                setGithubEndpointError(errorDetail);
              }

              if (disconnected === true) {
                // window.location = redirect;
                window.location.href = "/settings/account";
              } else {
                // Should improve this later
                alert("Something went wrong while removing your GitHub account from our server");
                return;
              }


            } catch (catchError) {
              console.log("GitHub disconnect request catch error");
              console.error(catchError);
            }
          }
        }}>
          <GitHubIcon style={{
            marginLeft: "0.25rem",
            fontSize: "1rem",
          }} /> <span style={{
            marginLeft: "0.5rem",
            marginRight: "0.25rem",
          }}>
            {(github_username || user.github_username) ? "Disconnect" : "Connect"}
          </span>
        </SettingsContentGitHubButton>
      </SettingsContentDetailWrapper>

      {/* <SettingsContentDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Your Twitter account
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {user.twitter_screename === null ? "Its username will be shown at your profile" : user.twitter_screename}
          </SettingsContentDetailText>
        </SettingsContentDetail>

        <SettingsContentTwitterButton onClick={async () => {
          if (!user.twitter_screename) {
            const { data: redirect, error } = await twitterLogin();

            if (error) {
              console.log("Twitter login response error");
              console.error(error);
              const errorDetail = error.response.data.detail;
              console.error(errorDetail);
            }

            if (redirect) {
              window.location.href = redirect;
            }

          } else {
            try {
              const { data: disconnected, error } = await twitterDisconnect();

              if (error) {
                console.log("Twitter disconnect response error");
                console.log(error);
                const errorDetail = error.response.data.detail;
                console.error(errorDetail);

                // alert(errorDetail);
                return;

                // setGithubEndpointError(errorDetail);
              }

              if (disconnected === true) {
                // window.location = redirect;
                window.location.href = "/settings/account";
              } else {
                // Should improve this later
                alert("Something went wrong while removing your Twitter account from our server");
                return;
              }
            } catch (catchError) {
              console.log("Twitter disconnect request catch error");
              console.error(catchError);
            }
          }
        }}>
          <BsTwitter style={{
            marginLeft: "0.25rem",
            fontSize: "1rem",
          }} /> <span style={{
            marginLeft: "0.5rem",
            marginRight: "0.25rem",
          }}>
            {(user.twitter_screename !== null) ? "Disconnect" : "Connect"}
          </span>
        </SettingsContentTwitterButton>
      </SettingsContentDetailWrapper> */}

    </>
  );
};

export default Connect;

// {/* <SettingsContentDetailWrapper>
//         <SettingsContentDetail>
//           <SettingsContentDetailLabel>
//             Your Solana Wallet
//           </SettingsContentDetailLabel>
//           {/* {githubEndpointError === null ? <SettingsContentDetailText>
//             {github_username || user.github_username || "Its username will be shown at your profile"}
//           </SettingsContentDetailText>
//           : <GitHubConnectErrorMessage 
//             responseError={githubEndpointError}
//           />} */}
// <SettingsContentDetailText>
//   It will be shown at your profile
//   {/* {github_username || user.github_username || "Its username will be shown at your profile"} */}
// </SettingsContentDetailText>
//         </SettingsContentDetail >

//   <div>
//     <WalletMultiButton
//       startIcon={<SolanaImage />}
//       // className="solana-wallet-button"
//       style={{
//         height: "2.5rem",
//         marginRight: "1.25rem",
//         // marginRight: "1rem",
//         padding: "1rem",
//         fontSize: "0.75rem",
//         // marginTop: "1rem",
//       }}
//     />
//     {/* <WalletDisconnectButton /> */}
//   </div>
//       </SettingsContentDetailWrapper > * /}
