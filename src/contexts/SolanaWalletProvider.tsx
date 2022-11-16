import type { WalletProviderProps } from "@solana/wallet-adapter-react";
import { WalletProvider } from "@solana/wallet-adapter-react";

import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  TorusWalletAdapter,
  // SolletExtensionWalletAdapter,
  // SolletWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { useMemo } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

// export function ClientWalletProvider(
export function SolanaWalletProvider(
  props: Omit<WalletProviderProps, "wallets">
): JSX.Element {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new LedgerWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    []
  );

  // const onSolanaWalletError = useCallback(
  //   (error) => {
  //     // enqueueSnackbar(
  //     //   error.message ? `${error.name}: ${error.message}` : error.name,
  //     //   { variant: "error" }
  //     // );
  //     // console.error(error);
  //   },
  //   // [enqueueSnackbar]
  // );

  return (
    <WalletProvider wallets={wallets} {...props}>
      {/* <WalletDialogProvider> */}
      {/* Make an image for this */}
      {/* <WalletModalProvider logo={COMPANY_LOGO_WHITE} {...props} /> */}
      <WalletModalProvider {...props} />
      {/* </WalletDialogProvider> */}
    </WalletProvider>
  );
}

export default SolanaWalletProvider;
