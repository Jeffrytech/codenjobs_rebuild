import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from "next/head";

import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, createTheme } from "baseui";

import { styletron, debug } from "../styletron";
const theme = createTheme({}, {});

import { ShadowProvider } from "../contexts/shadow";
import { AuthProvider } from "../contexts/auth";
import { SavedLinkToClipboardProvider } from "../contexts/savedLinkToClipboard";
import { SidebarProvider } from "../contexts/sidebar";
import { SolanaCodeTokenDetailsProvider } from "../contexts/solanaCodeToken";
import { BlogCommentProvider } from "../contexts/blogComment";
import { LoginRequiredProvider } from "../contexts/loginRequired";
import { SolanaNotificationProvider } from "../contexts/solanaNotification";
import { ErrorNotificationProvider } from "../contexts/errorNotification";

import { MetamaskWalletProvider } from "../contexts/MetamaskWalletProvider";


// // https://github.com/buildo/react-placeholder
import "react-placeholder/lib/reactPlaceholder.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@solana/wallet-adapter-react-ui/styles.css";

import '../styles/globals.css';
import "../styles/about.css";
import "../styles/crypto.css";

const MetatagList = () => {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
      />

      <link rel="shortcut icon" href="/static/favioncs/favicon.ico" />

      {/* TODO */}
      {/* Improve this part */}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/static/favicons/favicon-96x96.png"
      />
    </Head>
  </>);
};

{/* https://nextjs.org/docs/basic-features/script#application-scripts */ }
const ScriptList = () => {
  return (<>
    <Script id="googletagmanager" async src="https://www.googletagmanager.com/gtag/js?id=G-FFPYFZCMXG" />
    <Script id="gtag" dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-FFPYFZCMXG');
        gtag('config', 'UA-207308902-1');
      `,
    }}
    />
  </>);
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration >
      <BaseProvider
        // @ts-ignore
        theme={theme}
      // theme={MyTheme}
      >
        <AuthProvider>
          <ShadowProvider>
            <SidebarProvider>
              <BlogCommentProvider>
                <SolanaCodeTokenDetailsProvider>
                  <SavedLinkToClipboardProvider>
                    <LoginRequiredProvider>
                      <SolanaNotificationProvider>
                        <ErrorNotificationProvider>
                          <MetamaskWalletProvider>
                            <MetatagList />
                            <ScriptList />

                            <Component 
                              {...pageProps} 
                            />

                          </MetamaskWalletProvider>
                        </ErrorNotificationProvider>
                      </SolanaNotificationProvider>
                    </LoginRequiredProvider>
                  </SavedLinkToClipboardProvider>
                </SolanaCodeTokenDetailsProvider>
              </BlogCommentProvider>
            </SidebarProvider>
          </ShadowProvider>
        </AuthProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}