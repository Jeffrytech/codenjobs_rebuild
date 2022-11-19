// Use this because font becomes different from the main layout files.

/* eslint-disable no-trailing-spaces */
import React, { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { styled } from "baseui";

import { scrollToTop } from "../../browser/scroll";

import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

import Header from "./Header";
import Logo from "./Logo";

import { useAuth } from "../../contexts/auth";

import CenteredInPage from "../CenteredInPage";
import PrimarySpinner from "../spinners/PrimarySpinner";

import {
  TopNavContainer,
  LogoCompanyTitleContainer,
  FindJob,
} from "./TopNav/TopNavCSS";
import JobCategories from "./TopNav/JobCategories";
import CommunityCategories from "./TopNav/CommunityCategories";
import PeopleCategories from "./TopNav/PeopleCategories";

const PreviousPageButton = styled("li", {
  display: "flex",
  marginLeft: "1rem",

  color: "white",
  backgroundColor: "black",

  transition: "all 0.2s",
  cursor: "pointer",

  ":hover": {
    opacity: 0.7,
  },
});

const LoginTopNav = ({
  // https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7
  // eslint-disable-next-line react/prop-types
  children,
  confirm = false,
  register = false,
}) => {
  useEffect(() => {
    scrollToTop();
  });

  const router = useRouter();
  // console.log("router");
  // console.log(router);

  const {
    // @ts-ignore
    user,
    // @ts-ignore
    // logout,
    // @ts-ignore
    loading,
  } = useAuth();

  if (loading) {
    return (
      <CenteredInPage>
        <PrimarySpinner />
      </CenteredInPage>
    );
  }

  if (user && !router.query.from) {
    router.replace("/");
    return null;
  }

  return (
    <>
      {register === false && (
        <Header>
          <nav>
            <TopNavContainer>
              {confirm && (
                <Link href={"/"}>
                  <LogoCompanyTitleContainer>
                    <Logo src="/static/logo.svg" />
                  </LogoCompanyTitleContainer>
                </Link>
              )}
              <div
                style={{
                  marginRight: "auto",
                }}
              >
                {/* <JobCategories /> */}
                {/* <CommunityCategories /> */}
                {/* <PeopleCategories /> */}
              </div>

              {!confirm && (
                <PreviousPageButton>
                  <ArrowBackRoundedIcon
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                    onClick={() => router.back()}
                  />
                </PreviousPageButton>
              )}
            </TopNavContainer>
          </nav>
        </Header>
      )}

      <main>{children}</main>
    </>
  );
};

export default LoginTopNav;
