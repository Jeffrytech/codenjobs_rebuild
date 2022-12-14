import { useCallback, useEffect, useMemo, useState } from "react";
import * as anchor from "@project-serum/anchor";

import Link from "next/link";

import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  Commitment,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

// import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  awaitTransactionSignatureConfirmation,
  CANDY_MACHINE_PROGRAM,
  CandyMachineAccount,
  createAccountsForMint,
  getCandyMachineState,
  getCollectionPDA,
  mintOneToken,
  SetupState,
} from "../candyMachine";
import { AlertState, formatNumber, getAtaForMint, toDate } from "../utils";
import { MintCountdown } from "../MintCountdown";
import { MintButton } from "../MintButton";

import { GatewayProvider } from "@civic/solana-gateway-react";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import { userProvider } from "../../../crypto/utils";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import SolanaImage from "../../SolanaImage";
import { MintButtonContainer, RedirectToSolanaNFTWallet, SolanaCandyMachineMintDetailsContainer } from "./MintCandyMachineNFTCSS";
import SolanaImage from "../../../../../crypto/SolanaImage";
import { clickSolanaWalletButton } from "../../../../../crypto/SolanaWalletConnection";
import { devUserProvider, userProvider } from "../../../../../crypto/utils";
import ExternalLink from "../../../../ExternalLink";
// import { clickSolanaWalletButton } from "../../../crypto/SolanaWallet";

export interface MintCandyMachineNFTProps {
  candyMachineId?: anchor.web3.PublicKey;
  // connection: anchor.web3.Connection;
  txTimeout: number;
  rpcHost: string;
  network: WalletAdapterNetwork;
  error?: string;

  gif?: string,
}

const MintCandyMachineNFT = (props: MintCandyMachineNFTProps) => {

  // alert(props.candyMachineId);

  const { connection } = useConnection();
  const walletContextState = useWallet();
  // const provider = userProvider(walletContextState.wallet);
  const provider = devUserProvider(walletContextState.wallet);
  
  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  // const [redirect, setRedriect] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [endDate, setEndDate] = useState<Date>();
  const [itemsRemaining, setItemsRemaining] = useState<number>();
  const [isWhitelistUser, setIsWhitelistUser] = useState(false);
  const [isPresale, setIsPresale] = useState(false);
  const [isValidBalance, setIsValidBalance] = useState(false);
  const [discountPrice, setDiscountPrice] = useState<anchor.BN>();
  const [needTxnSplit, setNeedTxnSplit] = useState(true);
  const [setupTxn, setSetupTxn] = useState<SetupState>();

  const rpcUrl = props.rpcHost;
  // const wallet = useWallet();
  const cluster = props.network;

  // useEffect(() => {
  //   // setAlertState({
  //   //   open: true,
  //   //   message: `Couldn't fetch candy machine state from candy machine with address: ${props.candyMachineId}, using rpc: ${props.rpcHost}! You probably typed the REACT_APP_CANDY_MACHINE_ID value in wrong in your .env file, or you are using the wrong RPC!`,
  //   //   severity: "error",
  //   //   hideDuration: null,
  //   // });

  //   // setRedriect("/nft/wallet");
  //   // setAlertState({
  //   //   open: true,
  //   //   message: "Congratulations! Mint succeeded!",
  //   //   severity: "success",
  //   //   hideDuration: 7000,
  //   // });
  // }, []);

  const anchorWallet = useMemo(() => {
    if (
      !walletContextState ||
      !walletContextState.publicKey ||
      !walletContextState.signAllTransactions ||
      !walletContextState.signTransaction
    ) {
      return;
    }

    return {
      publicKey: walletContextState.publicKey,
      signAllTransactions: walletContextState.signAllTransactions,
      signTransaction: walletContextState.signTransaction,
    } as anchor.Wallet;
  }, [walletContextState]);

  const refreshCandyMachineState = useCallback(
    async (commitment: Commitment = "confirmed") => {
      if (!anchorWallet) {
        return;
      }
      if (props.error !== undefined) {
        setAlertState({
          open: true,
          message: props.error,
          severity: "error",
          hideDuration: null,
        });
        return;
      }

      // const connection = new Connection(props.rpcHost, commitment);

      if (props.candyMachineId) {
        try {
          const cndy = await getCandyMachineState(
            // anchorWallet,
            provider,
            props.candyMachineId,
            connection
          );
          
          // console.log("Candy machine state: ", cndy);

          let active = cndy?.state.goLiveDate
            ? cndy?.state.goLiveDate.toNumber() < new Date().getTime() / 1000
            : false;
          let presale = false;

          // duplication of state to make sure we have the right values!
          let isWLUser = false;
          let userPrice = cndy.state.price;

          // whitelist mint?
          if (cndy?.state.whitelistMintSettings) {
            // is it a presale mint?
            if (
              cndy.state.whitelistMintSettings.presale &&
              (!cndy.state.goLiveDate ||
                cndy.state.goLiveDate.toNumber() > new Date().getTime() / 1000)
            ) {
              presale = true;
            }
            // is there a discount?
            if (cndy.state.whitelistMintSettings.discountPrice) {
              setDiscountPrice(cndy.state.whitelistMintSettings.discountPrice);
              userPrice = cndy.state.whitelistMintSettings.discountPrice;
            } else {
              setDiscountPrice(undefined);
              // when presale=false and discountPrice=null, mint is restricted
              // to whitelist users only
              if (!cndy.state.whitelistMintSettings.presale) {
                cndy.state.isWhitelistOnly = true;
              }
            }
            // retrieves the whitelist token
            const mint = new anchor.web3.PublicKey(
              cndy.state.whitelistMintSettings.mint
            );
            const token = (
              await getAtaForMint(mint, anchorWallet.publicKey)
            )[0];

            try {
              const balance = await connection.getTokenAccountBalance(token);
              isWLUser = parseInt(balance.value.amount) > 0;
              // only whitelist the user if the balance > 0
              setIsWhitelistUser(isWLUser);

              if (cndy.state.isWhitelistOnly) {
                active = isWLUser && (presale || active);
              }
            } catch (e) {
              setIsWhitelistUser(false);
              // no whitelist user, no mint
              if (cndy.state.isWhitelistOnly) {
                active = false;
              }
              console.log(
                "There was a problem fetching whitelist token balance"
              );
              console.log(e);
            }
          }
          userPrice = isWLUser ? userPrice : cndy.state.price;

          if (cndy?.state.tokenMint) {
            // retrieves the SPL token
            const mint = new anchor.web3.PublicKey(cndy.state.tokenMint);
            const token = (
              await getAtaForMint(mint, anchorWallet.publicKey)
            )[0];
            try {
              const balance = await connection.getTokenAccountBalance(token);

              const valid = new anchor.BN(balance.value.amount).gte(userPrice);

              // only allow user to mint if token balance >  the user if the balance > 0
              setIsValidBalance(valid);
              active = active && valid;
            } catch (e) {
              setIsValidBalance(false);
              active = false;
              // no whitelist user, no mint
              console.log("There was a problem fetching SPL token balance");
              console.log(e);
            }
          } else {
            const balance = new anchor.BN(
              await connection.getBalance(anchorWallet.publicKey)
            );
            const valid = balance.gte(userPrice);
            setIsValidBalance(valid);
            active = active && valid;
          }

          // datetime to stop the mint?
          if (cndy?.state.endSettings?.endSettingType.date) {
            setEndDate(toDate(cndy.state.endSettings.number));
            if (
              cndy.state.endSettings.number.toNumber() <
              new Date().getTime() / 1000
            ) {
              active = false;
            }
          }
          // amount to stop the mint?
          if (cndy?.state.endSettings?.endSettingType.amount) {
            const limit = Math.min(
              cndy.state.endSettings.number.toNumber(),
              cndy.state.itemsAvailable
            );
            if (cndy.state.itemsRedeemed < limit) {
              setItemsRemaining(limit - cndy.state.itemsRedeemed);
            } else {
              setItemsRemaining(0);
              cndy.state.isSoldOut = true;
            }
          } else {
            setItemsRemaining(cndy.state.itemsRemaining);
          }

          if (cndy.state.isSoldOut) {
            active = false;
          }

          const [collectionPDA] = await getCollectionPDA(props.candyMachineId);
          const collectionPDAAccount = await connection.getAccountInfo(
            collectionPDA
          );

          setIsActive((cndy.state.isActive = active));
          setIsPresale((cndy.state.isPresale = presale));
          setCandyMachine(cndy);

          const txnEstimate =
            892 +
            (!!collectionPDAAccount && cndy.state.retainAuthority ? 182 : 0) +
            (cndy.state.tokenMint ? 66 : 0) +
            (cndy.state.whitelistMintSettings ? 34 : 0) +
            (cndy.state.whitelistMintSettings?.mode?.burnEveryTime ? 34 : 0) +
            (cndy.state.gatekeeper ? 33 : 0) +
            (cndy.state.gatekeeper?.expireOnUse ? 66 : 0);

          setNeedTxnSplit(txnEstimate > 1230);
        } catch (e) {
          if (e instanceof Error) {
            if (
              e.message === `Account does not exist ${props.candyMachineId}`
            ) {
              setAlertState({
                open: true,
                message: `Couldn't fetch candy machine state from candy machine with address: ${props.candyMachineId}, using rpc: ${props.rpcHost}! You probably typed the REACT_APP_CANDY_MACHINE_ID value in wrong in your .env file, or you are using the wrong RPC!`,
                severity: "error",
                hideDuration: null,
              });
            } else if (
              e.message.startsWith("failed to get info about account")
            ) {
              setAlertState({
                open: true,
                message: `Couldn't fetch candy machine state with rpc: ${props.rpcHost}! This probably means you have an issue with the REACT_APP_SOLANA_RPC_HOST value in your .env file, or you are not using a custom RPC!`,
                severity: "error",
                hideDuration: null,
              });
            }
          } else {
            setAlertState({
              open: true,
              message: `${e}`,
              severity: "error",
              hideDuration: null,
            });
          }
          console.log(e);
        }
      } else {
        setAlertState({
          open: true,
          message: `Your REACT_APP_CANDY_MACHINE_ID value in the .env file doesn't look right! Make sure you enter it in as plain base-58 address!`,
          severity: "error",
          hideDuration: null,
        });
      }
    },
    [anchorWallet, props.candyMachineId, props.error, props.rpcHost]
  );

  const onMint = async (
    beforeTransactions: Transaction[] = [],
    afterTransactions: Transaction[] = []
  ) => {
    try {
      // alert("onMint");
      
      setIsUserMinting(true);

      if (walletContextState.connected && candyMachine?.program && walletContextState.publicKey) {

        console.log("needTxnSplit, setupTxn");
        console.log(needTxnSplit, setupTxn); // false, undefined

        let setupMint: SetupState | undefined;
        if (needTxnSplit && setupTxn === undefined) {
          setAlertState({
            open: true,
            message: "Please sign account setup transaction",
            severity: "info",
          });

          // alert("candyMachine");
          // alert(candyMachine);
          // alert("walletContextState.publicKey");
          // alert(walletContextState.publicKey);
          
          setupMint = await createAccountsForMint(
            candyMachine,
            walletContextState.publicKey
          );

          // alert("setupMint");
          // alert(setupMint);

          let status: any = { err: true };
          if (setupMint.transaction) {
            status = await awaitTransactionSignatureConfirmation(
              setupMint.transaction,
              props.txTimeout,
              // props.connection,
              connection,
              true
            );
          }
          if (status && !status.err) {
            setSetupTxn(setupMint);
            setAlertState({
              open: true,
              message:
                "Setup transaction succeeded! Please sign minting transaction",
              severity: "info",
            });
          } else {
            // alert("Mint failed at status && !status.err");

            setAlertState({
              open: true,
              message: "Mint failed! Please try again!",
              severity: "error",
            });

            setIsUserMinting(false);
            return;
          }
        } else {
          // alert here
          setAlertState({
            open: true,
            message: "Please sign minting transaction",
            severity: "info",
            hideDuration: 2000,
          });
        }

        // alert("mintResult before");

        // TODO
        // This is null currently
        // Solve this
        // Fails here
        const mintResult = await mintOneToken(
          candyMachine,
          walletContextState.publicKey,
          walletContextState,
          beforeTransactions,
          afterTransactions,
          setupMint ?? setupTxn
        );

        // alert("mintResult"); 
        // alert(mintResult); // it shouldn't be null

        let status: any = { err: true };
        let metadataStatus = null;
        if (mintResult) {
          // alert("status before");

          // It stops here currently

          // console.log("mintResult");
          // console.log(mintResult); // { mintTxId: undefined, metadataKey: PublicKey }

          status = await awaitTransactionSignatureConfirmation(
            mintResult.mintTxId,
            props.txTimeout,
            // props.connection,
            connection,
            true
          );

          // alert("status");
          // alert(status);

          metadataStatus =
            await candyMachine.program.provider.connection.getAccountInfo(
              mintResult.metadataKey,
              "processed"
            );
          console.log("Metadata status: ", !!metadataStatus);

          // setRedriect("/nft/wallet");
        }

        // console.log("status && !status.err && metadataStatus");
        // console.log(status, !status.err, metadataStatus); // {err: true} false null

        if (status && !status.err && metadataStatus) {
          // setRedriect("/nft/wallet");

          // manual update since the refresh might not detect
          // the change immediately
          const remaining = itemsRemaining! - 1;
          setItemsRemaining(remaining);
          setIsActive((candyMachine.state.isActive = remaining > 0));
          candyMachine.state.isSoldOut = remaining === 0;
          setSetupTxn(undefined);

          // PAYLOAD
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
            hideDuration: 7000,
          });

          // Show redirect link?

          refreshCandyMachineState("processed");
        } else if (status && !status.err) {
          setAlertState({
            open: true,
            message:
              "Mint likely failed! Anti-bot SOL 0.01 fee potentially charged! Check the explorer to confirm the mint failed and if so, make sure you are eligible to mint before trying again.",
            severity: "error",
            hideDuration: 8000,
          });
          refreshCandyMachineState();
        } else {
          // alert("Mint failed before catch");

          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
          refreshCandyMachineState();
        }
      }
    } catch (error: any) {
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (!error.message) {
          message = "Transaction timeout! Please try again.";
        } else if (error.message.indexOf("0x137")) {
          console.log(error);
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          console.log(error);
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
      // updates the candy machine state to reflect the latest
      // information on chain
      refreshCandyMachineState();
    } finally {
      setIsUserMinting(false);

      // setRedriect("");
    }
  };

  const toggleMintButton = () => {
    let active = !isActive || isPresale;

    if (active) {
      if (candyMachine!.state.isWhitelistOnly && !isWhitelistUser) {
        active = false;
      }
      if (endDate && Date.now() >= endDate.getTime()) {
        active = false;
      }
    }

    if (
      isPresale &&
      candyMachine!.state.goLiveDate &&
      candyMachine!.state.goLiveDate.toNumber() <= new Date().getTime() / 1000
    ) {
      setIsPresale((candyMachine!.state.isPresale = false));
    }

    setIsActive((candyMachine!.state.isActive = active));
  };

  useEffect(() => {
    refreshCandyMachineState();
  }, [
    anchorWallet,
    props.candyMachineId,
    // props.connection,
    connection,
    refreshCandyMachineState,
  ]);

  useEffect(() => {
    (function loop() {
      setTimeout(() => {
        refreshCandyMachineState();
        loop();
      }, 20000);
    })();
  }, [refreshCandyMachineState]);

  useEffect(() => {
    if (!walletContextState.connected) {
      clickSolanaWalletButton();
    }
  }, []);

  return (
    <>
      <SolanaCandyMachineMintDetailsContainer
        $walletConnected={walletContextState.connected}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "center",
            // padding: 24,
            // paddingBottom: 24,
            // backgroundColor: "#151A1F",
            // borderRadius: 6,
            
            // width: walletContextState.connected === true ? "25rem" : "inherit",

            // justifyContent: "center",
          }}
        >
          {!walletContextState.connected ? (
            // <ConnectButton>Connect Wallet</ConnectButton>
            <WalletMultiButton
              startIcon={<SolanaImage />}
            />
          ) : (
            <>
              {props.gif && <img 
                // src="https://media2.giphy.com/media/2skGaGNteJvSuitF1S/200.webp" 
                src={props.gif}
                style={{
                  marginBottom: "2rem",
                  width: "100%",
                  objectFit: "fill",
                  borderRadius: "0.5rem 0.5rem 0 0",

                  // padding: "1rem",
                }}
              />}

              {candyMachine && (
                <div
                  style={{
                    width: "calc(100% - 2.5rem)",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    wrap="nowrap"

                    // style={{
                    //   width: "100%",
                    // }}
                  >
                    <Grid
                      item xs={3}

                      style={{
                        marginRight: "1rem",
                      }}
                    >
                      <Typography variant="body2" color="textSecondary">
                          Remaining
                      </Typography>
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        style={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <span style={{
                          fontSize: "1rem",
                        }}>
                          {`${itemsRemaining}`}
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" color="textSecondary">
                        {isWhitelistUser && discountPrice
                          ? "Discount Price"
                          : "Price"}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        style={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <SolanaImage />
                        <span
                          style={{
                            fontSize: "1rem",
                            marginLeft: "0.25rem",
                          }}
                        >
                          {isWhitelistUser && discountPrice
                            ? `${formatNumber.asNumber(discountPrice)}`
                            : `${formatNumber.asNumber(
                              candyMachine.state.price
                            )}`}
                        </span>

                        {/* {isWhitelistUser && discountPrice
                        ? `??? ${formatNumber.asNumber(discountPrice)}`
                        : `??? ${formatNumber.asNumber(
                          candyMachine.state.price
                        )}`} */}
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      {isActive && endDate && Date.now() < endDate.getTime() ? (
                        <>
                          <MintCountdown
                            key="endSettings"
                            date={getCountdownDate(candyMachine)}
                            style={{ justifyContent: "flex-end" }}
                            status="COMPLETED"
                            onComplete={toggleMintButton}
                          />
                          <Typography
                            variant="caption"
                            align="center"
                            display="block"
                            style={{ fontWeight: "bold" }}
                          >
                              TO END OF MINT
                          </Typography>
                        </>
                      ) : (
                        <>
                          <MintCountdown
                            key="goLive"
                            date={getCountdownDate(candyMachine)}
                            style={{ justifyContent: "flex-end" }}
                            status={
                              candyMachine?.state?.isSoldOut ||
                                  (endDate && Date.now() > endDate.getTime())
                                ? "COMPLETED"
                                : isPresale
                                  ? "PRESALE"
                                  : "LIVE"
                            }
                            onComplete={toggleMintButton}
                          />
                          {isPresale &&
                              candyMachine.state.goLiveDate &&
                              candyMachine.state.goLiveDate.toNumber() >
                              new Date().getTime() / 1000 && (
                            <Typography
                              variant="caption"
                              align="center"
                              display="block"
                              style={{ fontWeight: "bold" }}
                            >
                                  UNTIL PUBLIC MINT
                            </Typography>
                          )}
                        </>
                      )}
                    </Grid>
                  </Grid>
                </div>
              )}
              {candyMachine && <MintButtonContainer>
                <ExternalLink
                  href="/solana/wallet"
                >
                  <RedirectToSolanaNFTWallet>
                    You can see your balance here after you mint NFTs
                  </RedirectToSolanaNFTWallet>
                </ExternalLink>

                {candyMachine?.state.isActive &&
                  candyMachine?.state.gatekeeper &&
                  walletContextState.publicKey &&
                  walletContextState.signTransaction ? (
                    <GatewayProvider
                      wallet={{
                        publicKey:
                        walletContextState.publicKey ||
                        new PublicKey(CANDY_MACHINE_PROGRAM),
                        //@ts-ignore
                        signTransaction: wallet.signTransaction,
                      }}
                      gatekeeperNetwork={
                        candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                      }
                      clusterUrl={rpcUrl}
                      cluster={cluster}
                      options={{ autoShowModal: false }}
                    >
                      <MintButton
                        candyMachine={candyMachine}
                        isMinting={isUserMinting}
                        setIsMinting={(val) => setIsUserMinting(val)}
                        onMint={onMint}
                        isActive={
                          isActive ||
                        (isPresale && isWhitelistUser && isValidBalance)
                        }
                      />
                    </GatewayProvider>
                  ) : (
                    <MintButton
                      candyMachine={candyMachine}
                      isMinting={isUserMinting}
                      setIsMinting={(val) => setIsUserMinting(val)}
                      onMint={onMint}
                      isActive={
                        isActive ||
                      (isPresale && isWhitelistUser && isValidBalance)
                      }
                    />
                  )}
              </MintButtonContainer>}
            </>
          )}
        </div>

        <Snackbar
          open={alertState.open}
          autoHideDuration={
            alertState.hideDuration === undefined ? 6000 : alertState.hideDuration
          }
          onClose={() => setAlertState({ ...alertState, open: false })}
        >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>
      </SolanaCandyMachineMintDetailsContainer>
    </>
   
  );
};

const getCountdownDate = (
  candyMachine: CandyMachineAccount
): Date | undefined => {
  if (
    candyMachine.state.isActive &&
    candyMachine.state.endSettings?.endSettingType.date
  ) {
    return toDate(candyMachine.state.endSettings.number);
  }

  return toDate(
    candyMachine.state.goLiveDate
      ? candyMachine.state.goLiveDate
      : candyMachine.state.isPresale
        ? new anchor.BN(new Date().getTime() / 1000)
        : undefined
  );
};

export default MintCandyMachineNFT;
