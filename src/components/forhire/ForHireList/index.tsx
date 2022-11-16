import React, { useEffect, useState } from "react";
// import Select from "react-select";
import Link from "next/link";
// import Search from 'baseui/icon/search'
import { useRouter } from "next/router";

import { Chip } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Money from "@material-ui/icons/AttachMoneyRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublicIcon from "@material-ui/icons/Public";
import GitHubIcon from "@material-ui/icons/GitHub";
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from "@material-ui/icons/Search";

// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

// import NoCandidate from "../../lists/NoCandidate";

// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import moment from "moment";

// import Chip from "@material-ui/core/Chip";

// import CompanyLogoSide from "../CompanyLogoSide";

import {
  // ForHireListContainer,
  // ForHireListWrapper,
  // ForHireListHeader,
  // ForHireListSection,

  // ForHireListCardContainer,
  ForHireHeader,
  // CompanyName,
  ProfileName,
  ProfileBio,
  
  // JobFeaturesContainer,
  // JobFeature,
  ForHireFeatureWrapper,

  // ForHireListSkillContainer,
  // ForHireSkill,
  
  ForHireUsernamerWrapper,
  JoinedTime,
  ForHireFeatureLink,
  ForHireFeaturesContainer,
  TotalMoneyVoteContainer,
  TotalMoneyVoteWrapper,
  ForHireNoSearchListHeader,
  ForHireSearchListContainer,
  ForHireSearchListContent,
  ForHireSearchListPrimaryWrapper,
  ForHireSearchListSecondaryWrapper,
  ForHireListPaginationButtonsContainer,
  ForHireListPaginationNextButton,
  ForHireListPaginationPrevButton,
  ForHireListCardContainer,
  ForHireSearchListHeader,
  ForHireSearchListTextInput,
  ForHireListInputClearButtonWrapper,
  ForHireListInputSearchButtonWrapper,
  ForHireSearchListTextInputWrapper,
} from "./ForHireListCSS";
// import Skill from "../Skill";
// import { API } from "../../config/environment";
import Username from "../../Username";

// import { Avatar } from "baseui/avatar";
// import { UsernameWrapper } from "../UserProfileCard/UserProfileCardCSS";

import NoSearchList from "../../SearchList/NoSearchList";

import { ForHireListSkillContainer, ForHireListSkill } from "./ForHireListSkills/ForHireListSkillsCSS";
import { yes } from "../../../typeDefinitions/select";
import ForHireProfileImage from "../../ForHireProfileImage";
import CentralizeChildren from "../../CentralizeChildren";

import ForHireSearchListSkeleton from "./ForHireSearchListSkeleton";
import Community from "../../Community";
import TopUsersForHire from "../../TopUsersForHire";
import { jobTitleMaxLength } from "../../../validators";
import { COMPANY_LOGO } from "../../../config/environment";
import { scrollToTop } from "../../../browser/scroll";
import ListBySortOptionNavbar from "../../ListBySortOptionNavbar";
import ListBanner from "../../SearchList/ListBanner";
import useForHireListForm from "../ForHireListForm/useForHireListForm";
import { findUserForhireList } from "../../../api/user";

const ForHireSearchListSecondary = () => {
  return (
    <ForHireSearchListSecondaryWrapper>
      <Community list={"blog"} />

      <TopUsersForHire
        limit={10}
        list={"blog"}
      />

    </ForHireSearchListSecondaryWrapper>
  );
};

const findForhire = async ({
  currentPage,
  forhirePerPage,

  job,
  location,
  salary,
  sort,
  skill,
  use_cryptocurrency,

  setForhireList,
  setTotalPage,
}) => {
  const skip = (currentPage - 1) * forhirePerPage;
  const limit = forhirePerPage;

  const { data, error } = await findUserForhireList(
    job,
    location,
    salary,
    sort,
    skill,
    use_cryptocurrency,

    skip, 
    limit
  );

  if (error) {
    console.log("findUserForhireList error");
    console.error(error);
  }

  if (data) {
    const { forhireList, totalForhireList } = data;
    // setBlogList(data);
    setForhireList(forhireList);
    // alert(totalBlogList);
    // alert(data.length);
    setTotalPage(Math.ceil(totalForhireList / forhirePerPage));
  }
};

const ForHireList = ({
  job,
  salary,
  location,
  skill,
  use_cryptocurrency,

  sort,

  page,
}) => {
  const router = useRouter();

  const [forhireList, setForhireList] = useState(null);
  const [totalPage, setTotalPage] = useState(0);

  const forhirePerPage = 25;

  let currentPage;
  if (page === null || page === 1) {
    currentPage = 1;
  } else {
    currentPage = page;
  }

  if (currentPage > totalPage) {
    // alert(totalPage);
    if (currentPage !== 1) {
      // const queries = new URLSearchParams(window.location.search);
      // const query = Object.fromEntries(queries);
      router.push({
        pathname: window.location.pathname,
      });

      // queries.set("page", totalPage.toString());
      // router.push({
      //   pathname: window.location.pathname,
      //   query,
      // })
      // scrollToTop();
    }
  }

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,

    setFieldValue,

    isSubmitting,
    submitForm,
  } = useForHireListForm({
    job,
    salary,
    location,

    skill,
    use_cryptocurrency,

    sort,
  });

  useEffect(() => {
    findForhire({
      currentPage,
      forhirePerPage,

      job,
      salary,
      location,
      skill,
      use_cryptocurrency,
      sort,

      setForhireList,
      setTotalPage
    });
  }, [
    page,

    job,
    salary,
    location,
    skill,
    use_cryptocurrency,
    sort,
  ]);


  if (forhireList === null) {
  // if (true) {
    return (
      <>
        <ListBanner />

        <ForHireSearchListContainer>
          <ForHireSearchListContent >
            <ForHireSearchListPrimaryWrapper>
              <ForHireNoSearchListHeader>
                <CentralizeChildren>
                  <span
                    style={{
                      width: "1rem",
                      height: "1rem",
                    }}
                  >
                    {/* <PrimarySpinner /> */}
                  </span>
                </CentralizeChildren>
              </ForHireNoSearchListHeader>
              <ForHireSearchListSkeleton />
              <ForHireSearchListSkeleton />
              <ForHireSearchListSkeleton />
              <ForHireSearchListSkeleton />
              <ForHireSearchListSkeleton />
              <ForHireSearchListSkeleton />
            </ForHireSearchListPrimaryWrapper>

            <ForHireSearchListSecondary />

          </ForHireSearchListContent>
        </ForHireSearchListContainer>
      </>
    );
  }

  if (forhireList.length === 0) {
  // if (true) {
    return (
      <>
        <ListBanner />

        <ListBySortOptionNavbar 
          includeTopOption={true}
          setFieldValue={setFieldValue}
          submitForm={submitForm}
        />

        <ForHireSearchListContainer>
          <ForHireSearchListContent >
            <ForHireSearchListPrimaryWrapper>
              <ForHireNoSearchListHeader>
                <CentralizeChildren>
                  <NoSearchList
                    href="/forhire" message="No results"
                  />
                </CentralizeChildren>
              </ForHireNoSearchListHeader>
              <ForHireSearchListSkeleton />
              <ForHireSearchListSkeleton />
              <ForHireSearchListSkeleton />
              <ForHireSearchListSkeleton />
              <ForHireSearchListSkeleton />
              <ForHireSearchListSkeleton />
            </ForHireSearchListPrimaryWrapper>

            <ForHireSearchListSecondary />

          </ForHireSearchListContent>
        </ForHireSearchListContainer>
      </>
    );
  }

  // const classes = useStyles();

  return (
    <>
      <ListBanner />

      <ListBySortOptionNavbar
        includeTopOption={true}
        setFieldValue={setFieldValue}
        submitForm={submitForm}
      />
      <ForHireSearchListContainer>
        <ForHireSearchListContent>
          <ForHireSearchListPrimaryWrapper>

            <ForHireSearchListHeader>
              <form
                style={{
                  width: "100%",
                }}
                onSubmit={handleSubmit}
              >
                <ForHireSearchListTextInputWrapper>
                  <ForHireListInputSearchButtonWrapper
                    aria-label="search"
                    click={async () => {
                      await submitForm();
                    }}
                  >
                    <SearchIcon />
                  </ForHireListInputSearchButtonWrapper>

                  <ForHireSearchListTextInput
                    id="job"
                    name="job"
                    type="text"
                    placeholder="Type a user job title"
                    maxLength={jobTitleMaxLength}

                    value={values.job}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <ForHireListInputClearButtonWrapper>
                    <CancelIcon
                      onClick={e => {
                        e.preventDefault();

                        router.push("/forhire");
                        scrollToTop();
                      }}
                      type="button"
                      aria-label="reset form"
                    />
                  </ForHireListInputClearButtonWrapper>

                </ForHireSearchListTextInputWrapper>
              </form>

            </ForHireSearchListHeader>

            {forhireList?.map(({
              username,
              created_at,

              profile_image,
              profile_name,
              profile_bio,

              profile_job,
              profile_location,
              profile_salary,
              profile_website,
              profile_use_cryptocurrency,

              profile_skills,

              github_username,

              total_blog_post_money_voters,
            }) => {

              return (
                // Move this to cards/ForHireListCard.tsx?
                <ForHireListCardContainer key={username} >
                  {/* {profile_image && <Link
                    href={`/user/${username}`}
                  >
                    <ProfileImageSide
                      loading="lazy"
                      src={profile_image || ""}
                      alt="profile"
                    />
                  </Link>} */}

                  <ForHireHeader>
                    <ForHireUsernamerWrapper>
                      <div style={{
                        display: "flex",
                      }}>
                        <Link href={`/user/${username}`} >
                          <div>
                            <Username username={username} opacity={"0.7"} />
                          </div>
                        </Link>
                      </div>

                      <JoinedTime>
                        Joined {moment.utc(created_at).fromNow()}
                      </JoinedTime>
                    </ForHireUsernamerWrapper>
                  </ForHireHeader>

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}>
                    {/* {profile_image && <ForHireProfileImage src={profile_image} alt="profile" />} */}
                    <ForHireProfileImage src={profile_image || COMPANY_LOGO} alt="profile" />
                    {profile_name && <Link href={`/user/${username}`} >
                      <ProfileName>
                        {profile_name}
                      </ProfileName>
                    </Link>}
                  </div>


                  {profile_bio &&
                    <ProfileBio>
                      {profile_bio}
                    </ProfileBio>
                  }

                  <ForHireFeaturesContainer>
                    {profile_job &&
                      <ForHireFeatureWrapper onClick={(e) => {
                        e.preventDefault();

                        setFieldValue("job", profile_job);
                        submitForm();
                      }}>
                        <AccountBoxIcon style={{
                          fontSize: "1.25rem",
                          marginLeft: "-0.1rem",
                        }} />
                        <span style={{
                          marginLeft: "0.25rem",
                          marginRight: "0.5rem"
                          // opacity: 0.7,
                        }}>
                          {profile_job}
                        </span>
                      </ForHireFeatureWrapper>
                    }

                    {profile_salary &&
                      <ForHireFeatureWrapper onClick={(e) => {
                        e.preventDefault();

                        setFieldValue("salary", profile_salary);
                        submitForm();
                      }} >
                        <Money style={{
                          fontSize: "1rem",
                          // marginLeft: "0.25rem", 
                          // marginRight: "0.1rem", 
                          color: "white",
                          backgroundColor: "rgb(37, 191, 161)"
                        }} />
                        <span style={{
                          marginLeft: "0.5rem",
                          // marginRight: "
                          // opacity: 0.7,
                        }}>
                          {profile_salary}
                        </span>
                      </ForHireFeatureWrapper>
                    }

                    {profile_location &&
                      <ForHireFeatureWrapper onClick={(e) => {
                        e.preventDefault();

                        setFieldValue("location", profile_location);
                        submitForm();
                        // router.push(`/forhire?&location=${profile_location}`);
                        // setSkillInput("");
                      }} >
                        <LocationOnIcon style={{
                          fontSize: "1.25rem",
                          // marginLeft: "0.1rem",
                        }} />
                        <span style={{
                          marginLeft: "0.25rem",
                          marginRight: "0.25rem"
                        }}>
                          {profile_location}
                        </span>
                      </ForHireFeatureWrapper>
                    }

                    {profile_website && <ForHireFeatureLink
                      href={profile_website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PublicIcon style={{
                        fontSize: "1rem",
                        // marginLeft: "0.1rem",
                      }} />
                      <span style={{
                        marginLeft: "0.25rem",
                        marginRight: "0.5rem"
                      }}>
                        Website
                      </span>
                    </ForHireFeatureLink>}

                    {github_username && <ForHireFeatureLink
                      href={`https://github.com/${github_username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon style={{
                        fontSize: "1rem",
                        // marginLeft: "0.5rem",
                      }} />
                      <span style={{
                        marginLeft: "0.25rem",
                        marginRight: "0.25rem",
                        display: "flex",
                      }}>
                        GitHub
                      </span>
                    </ForHireFeatureLink>}

                    {profile_use_cryptocurrency &&
                      <ForHireFeatureWrapper onClick={async (e) => {
                        e.preventDefault();

                        setFieldValue("use_cryptocurrency", yes);
                        await submitForm();
                        // router.push(`/forhire?&location=${profile_location}`);
                        // setSkillInput("");
                      }} >
                        <img src="/static/bitcoin.svg" style={{
                          width: "1rem",
                          // marginLeft: "0.25rem",
                        }} />
                        <span style={{
                          marginLeft: "0.25rem",
                          marginRight: "0.25rem"
                        }}>
                          Yes
                        </span>
                      </ForHireFeatureWrapper>
                    }
                  </ForHireFeaturesContainer>

                  {/* Include use_crpytocurrency here? */}

                  {total_blog_post_money_voters !== undefined && <TotalMoneyVoteContainer>
                    <TotalMoneyVoteWrapper>
                      {/* <AttachMoneyIcon style={{
                        fontSize: "1rem",
                        // marginRight: "0.175rem",
                      }} />
                      {total_blog_post_money_voters} */}
                      <img src="/static/logo.png" style={{
                        width: "1rem",
                        height: "1rem"
                      }} />
                      <span style={{
                        marginLeft: "0.25rem",
                      }} >
                        {total_blog_post_money_voters}
                      </span>
                      {/* votes */}
                    </TotalMoneyVoteWrapper>
                  </TotalMoneyVoteContainer>}


                  <ForHireListSkillContainer>
                    {profile_skills && profile_skills.map((profile_skill: string) => {
                      const selected = profile_skill === skill;

                      return (
                        <ForHireListSkill onClick={(e) => {
                          e.preventDefault();

                          if (!selected) {
                            setFieldValue("skill", profile_skill);
                            submitForm();
                          }
                        }}>
                          {!selected ? <Chip
                            variant="outlined"
                            label={profile_skill}

                            style={{
                              cursor: "pointer"
                            }}
                          /> : <Chip
                            variant="outlined"
                            label={profile_skill}

                            style={{
                              cursor: "pointer",
                              color: "rgb(17, 160, 245)",
                              border: "1px solid rgb(17, 160, 245)",
                            }}
                            onClick={async (e) => {
                              e.preventDefault();
                              setFieldValue("skill", "");
                              await submitForm();
                            }}
                            onDelete={async (e) => {
                              e.preventDefault();
                              setFieldValue("skill", "");
                              await submitForm();
                            }}
                            deleteIcon={<CancelIcon style={{
                              color: "rgb(17, 160, 245)",
                            }} />}
                          />}
                        </ForHireListSkill>
                      );
                    })}
                  </ForHireListSkillContainer>

                </ForHireListCardContainer>
              );
            })}

            {forhireList && totalPage > 1 && <ForHireListPaginationButtonsContainer>
              {page !== 1 && <ForHireListPaginationPrevButton
                onClick={(e) => {
                  e.preventDefault();

                  const prevPage = page - 1;
                  const queries = new URLSearchParams(window.location.search);
                  queries.set("page", prevPage.toString());

                  const query = Object.fromEntries(queries);
                  router.push({
                    pathname: window.location.pathname,
                    query,
                  });
                  scrollToTop();
                }}
              >
                Prev
              </ForHireListPaginationPrevButton>}
              {page !== totalPage && <ForHireListPaginationNextButton
                onClick={(e) => {
                  e.preventDefault();

                  const nextPage = page + 1;
                  const queries = new URLSearchParams(window.location.search);
                  queries.set("page", nextPage.toString());

                  const query = Object.fromEntries(queries);
                  router.push({
                    pathname: window.location.pathname,
                    query,
                  });
                  scrollToTop();
                }}
              >
                Next
              </ForHireListPaginationNextButton>}
            </ForHireListPaginationButtonsContainer>}
          </ForHireSearchListPrimaryWrapper>

          <ForHireSearchListSecondary />

        </ForHireSearchListContent>
      </ForHireSearchListContainer>
    </>
      
  );
};

export default ForHireList;

// {/* <ForHireSearchListTextInput>
//   <IconButton
//     type="submit"
//     // className={classes.searchButton}
//     aria-label="search"
//   >
//     <SearchIcon />
//   </IconButton>

//   <InputBase
//     id="job"
//     name="job"
//     type="text"

//     // className={classes.input}

//     placeholder="Type a user job title"
//     inputProps={{
//       maxLength: jobTitleMaxLength,
//       "aria-label": "Search blogs",
//     }}

//     value={values.job}
//     onChange={handleChange}
//     onBlur={handleBlur}

//     endAdornment={
//       <>
//         <IconButton
//           onClick={e => {
//             e.preventDefault();

//             // resetForm();
//             // router.push("/blogs");

//             window.location.href = "/forhire";
//           }}
//           type="button"
//           // className={classes.clearButton}
//           aria-label="reset form"
//         >
//           <CancelIcon />
//         </IconButton>
//       </>
//     }

//   />
// </ForHireSearchListTextInput> */}