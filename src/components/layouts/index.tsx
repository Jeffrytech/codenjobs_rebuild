/* eslint-disable no-trailing-spaces */
import React, { useEffect } from "react";

import { styled } from "baseui";
import { Layer } from "baseui/layer";

import { scrollToTop } from "../../browser/scroll";

import Header from "./Header";
import TopNav from "./TopNav";

import Sidebar from "./Sidebar";

import Footer from "./Footer";
import {
  MOBILE,
  // XS
} from "../../design/breakpoints";
import SolanaNotification from "../../crypto/SolanaNotification";
import SolanaWalletConnection from "../../crypto/SolanaWalletConnection";
import LoginRequired from "../auth/LoginRequired";
import ErrorNotification from "../ErrorNotification";
import Shadow from "./Shadow";

// Move these to another file.
export const LayoutContainer = styled("div", {
  minWidth: "100vw",
  minHeight: "100vh",
});

const Main = styled(
  "main",
  ({ $fullHeight = true, $whiteatmobile = false }) => {
    return {
      marginTop: "3.75rem", // Move this role to the navbar?
      backgroundColor: "rgb(247, 248, 250)",

      minHeight: $fullHeight ? "100vh" : 0,

      // "::-webkit-scrollbar": {
      //   height: "16px",
      //   width: "16px",
      //   background: "gray",
      // },

      // "::-webkit-scrollbar-thumb:horizontal": {
      //     background: "#000",
      //     borderRadius: "10px",
      // },

      [MOBILE]: {
        backgroundColor: $whiteatmobile ? "white" : "rgb(247, 248, 250)",
      },
      // minHeight: $fullHeight ? "calc(100vh - 60px)" : 0,
    };
  }
);

function Index({
  // https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7
  // eslint-disable-next-line react/prop-types
  children,
  useScrollToTop = true,
  showFooter = true,
  fullHeigth = true,

  whiteatmobile = false,
}) {
  useEffect(() => {
    if (useScrollToTop) {
      scrollToTop();
    }
  }, [scrollToTop]);

  return (
    // This is here and not pages/_app.tsx because including it in that file stops metatags to work
    <SolanaWalletConnection>
      <Layer>
        <LayoutContainer>
          <Header>
            <TopNav />
          </Header>

          <Sidebar />

          <Main $fullHeight={fullHeigth} $whiteatmobile={whiteatmobile}>
            {children}
          </Main>

          {showFooter && <Footer />}
        </LayoutContainer>
      </Layer>
      <Shadow />
      <LoginRequired />
      <SolanaNotification />
      <ErrorNotification />
    </SolanaWalletConnection>
  );
}

export default Index;
