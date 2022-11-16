import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Search from 'baseui/icon/search'

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Money from "@material-ui/icons/AttachMoneyRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublicIcon from "@material-ui/icons/Public";
import GitHubIcon from "@material-ui/icons/GitHub";
import CancelIcon from '@material-ui/icons/Cancel';

// import NoCandidate from "../../lists/NoCandidate";

// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import moment from "moment";

// import Chip from "@material-ui/core/Chip";

// import CompanyLogoSide from "../CompanyLogoSide";
import ProfileImageSide from "../../ProfileImageSide";

import {
  ProfileName,
  ProfileBio,
  
  JoinedTime,
  HiringFeatureLink,
  HiringFeaturesContainer,
  HiringFeatureWrapper,
  HiringHeader,
  HiringUsernamerWrapper,
  HiringListTitle,
  HiringSearchListContainer,
  HiringSearchListPrimaryWrapper,
  HiringSearchListContent,
  HiringListCardContainer,
  HiringSearchListSecondaryWrapper,
  HiringListPaginationButtonsContainer,
  HiringListPaginationNextButton,
  HiringListPaginationPrevButton,
  HiringTopWrapper,
  HiringTopUsername,
  HiringNoSearchListHeader,
} from "./HiringListCSS";
// import Skill from "../Skill";
// import { API } from "../../config/environment";
import Username from "../../Username";
import { Chip } from "@material-ui/core";

import ListHeader from "../../SearchList/ListHeader";
import SearchListSkeleton from "../../SearchList/SearchListSkeleton";
import NoSearchList from "../../SearchList/NoSearchList";
import { SearchListCardContainer, SearchListContainer, SearchListWrapper, SearchListSection } from "../../SearchList/SearchListCSS";

import { yes } from "../../../typeDefinitions/select";
import { HiringListSkillContainer, HiringListSkill } from "./HiringListSkills/HiringListSkillsCSS";
import ProfileImage from "../../ProfileImage";
import CentralizeChildren from "../../CentralizeChildren";
import { ListPaginationButtonsContainer, ListPaginationPrevButton, ListPaginationNextButton } from "../../job/ListPagination/ListPaginationCSS";
import { useRouter } from "next/router";
import Community from "../../Community";
import TopUsersForHire from "../../TopUsersForHire";
import HiringSearchListSkeleton from "./HiringSearchListSkeleton";

const HiringSearchListSecondary = () => {
  return (
    <HiringSearchListSecondaryWrapper>
      <Community list={"blog"} />

      <TopUsersForHire
        limit={10}
        list={"blog"}
      />

    </HiringSearchListSecondaryWrapper>
  );
};

const HiringList = ({
  hiringList,
  hiringListTitle,
  numberOfRecruiters,

  setFieldValue,
  submitForm,
  skill,

  page,
}) => {

  const router = useRouter();
  // alert(router.asPath);
  if (router.asPath === "/blogs?") {
    router.replace("/blogs");
    return null;
  }
  
  // console.log(data);
  // const router = useRouter();

  // console.log("router");
  // console.log(router);
  // console.log("data");
  // console.log(data);

  // const resetSkillInput = (e) => {
  //   e.preventDefault();
  //   setSkillInput("");
  // };

  // const peoplePerPage = 2;
  const peoplePerPage = 25;
  const totalPage = Math.ceil((hiringList === null ? 0 : hiringList.length) / peoplePerPage);

  const [searchHiringList, setSearchHiringList] = useState(hiringList);

  if (page > totalPage && totalPage !== 0) {
    const queries = new URLSearchParams(window.location.search);
    queries.set("page", totalPage.toString());
    // @ts-ignore
    window.location = `${window.location.pathname}?${queries.toString()}`;
  }

  // alert(page)

  useEffect(() => {
    // Or use SQL at the server
    if (page === 1) {
      const start = 0;
      const end = peoplePerPage;

      setSearchHiringList(searchHiringList?.slice(start, end));
    } else {
      const start = (page - 1) * peoplePerPage;
      const end = start + peoplePerPage;

      setSearchHiringList(searchHiringList?.slice(start, end));
    }
  }, [page]);

  // TODO
  // Include skeletons here

  if (numberOfRecruiters === 0) {
  // if (true) {
    return (<HiringSearchListContainer>
      <HiringSearchListContent >
        <HiringSearchListPrimaryWrapper >
          <HiringNoSearchListHeader>
            <CentralizeChildren>
              <NoSearchList
                href="/hiring" message="No results"
              />
            </CentralizeChildren>
          </HiringNoSearchListHeader>
          <HiringSearchListSkeleton />
          <HiringSearchListSkeleton />
          <HiringSearchListSkeleton />
          <HiringSearchListSkeleton />
          <HiringSearchListSkeleton />
          <HiringSearchListSkeleton />
        </HiringSearchListPrimaryWrapper>

        <HiringSearchListSecondary />

      </HiringSearchListContent>
    </HiringSearchListContainer>);
  }

  return (
    <HiringSearchListContainer>
      <HiringSearchListContent>
        <HiringSearchListPrimaryWrapper>

          {/* {[
            ...searchHiringList, ...searchHiringList,
            ...searchHiringList, ...searchHiringList,
            ...searchHiringList, ...searchHiringList,
            ...searchHiringList, ...searchHiringList,
            ...searchHiringList, ...searchHiringList,
          ].map(({ */}
          {searchHiringList?.map(({
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
          }) => {
            // TODO
            // Include search form here?
            
            return (
              <HiringListCardContainer key={username} >
                <HiringHeader>
                  <HiringTopWrapper>
                    <HiringTopUsername>
                      <Link href={`/user/${username}`} >
                        <div>
                          <Username username={username} opacity={"0.7"} />
                        </div>
                      </Link>
                    </HiringTopUsername>

                    <JoinedTime>
                        Joined {moment.utc(created_at).fromNow()}
                    </JoinedTime>
                  </HiringTopWrapper>
                </HiringHeader>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  marginLeft: "-0.25rem",
                }}>
                  {profile_image && <img 
                    src={profile_image} 
                    alt="profile" 
                    style={{
                      display: "flex",
                      // alignItems: "center",

                      // width: "1rem",
                      // height: "1rem",
                      width: "2.5rem",
                      height: "2.5rem",

                      marginRight: "0.25rem",
                      // marginLeft: "-0.1rem",
                      borderRadius : "50%",
                    }}
                  />}

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

                <HiringFeaturesContainer>
                  {profile_location &&
                      <HiringFeatureWrapper onClick={(e) => {
                        e.preventDefault();

                        setFieldValue("location", profile_location);
                        submitForm();
                        // router.push(`/hiring?&location=${profile_location}`);
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
                      </HiringFeatureWrapper>}
                  {profile_use_cryptocurrency &&
                          <HiringFeatureWrapper onClick={(e) => {
                            e.preventDefault();

                            setFieldValue("use_cryptocurrency", yes);
                            submitForm();
                          }} >
                            <img src="/static/logos/bitcoin.svg" style={{
                              width: "1rem",
                              // marginLeft: "0.25rem",
                            }} />
                            <span style={{
                              marginLeft: "0.25rem",
                              marginRight: "0.25rem"
                            }}>
                              Yes
                            </span>
                          </HiringFeatureWrapper>}
                  {profile_website && <HiringFeatureLink
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
                  </HiringFeatureLink>}

                  {github_username && <HiringFeatureLink
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
                  </HiringFeatureLink>}

                  {profile_job &&
                        <HiringFeatureWrapper onClick={(e) => {
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
                        </HiringFeatureWrapper>}

                  {profile_salary &&
                        <HiringFeatureWrapper onClick={(e) => {
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
                        </HiringFeatureWrapper>}
                </HiringFeaturesContainer>

                <HiringListSkillContainer>
                  {/* {job_skills && job_skills.slice(0, window.innerWidth > 480 ? 5 : 2).map((job_skill: string) => { */}
                  {profile_skills && profile_skills.map((profile_skill: string) => {
                    // alert(job_skill !== skill);
                    const selected = profile_skill === skill;
                    return (
                      <HiringListSkill onClick={(e) => {
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
                          onClick={(e) => {
                            e.preventDefault();
                            setFieldValue("skill", "");
                            submitForm();
                          }}
                          onDelete={(e) => {
                            e.preventDefault();
                            setFieldValue("skill", "");
                            submitForm();
                          }}
                          deleteIcon={<CancelIcon style={{
                            color: "rgb(17, 160, 245)",
                          }} />}
                        />}
                      </HiringListSkill>
                    );
                  })}
                </HiringListSkillContainer>
                                    
              </HiringListCardContainer>
            );
          })}

          {searchHiringList && totalPage > 1 && <HiringListPaginationButtonsContainer>
            {page !== 1 && <HiringListPaginationPrevButton
              onClick={(e) => {
                e.preventDefault();

                const prevPage = page - 1;

                const queries = new URLSearchParams(window.location.search);
                queries.set("page", prevPage.toString());
                // @ts-ignore
                window.location = `${window.location.pathname}?${queries.toString()}`;
                // history.pushState(null, null, "?" + queries.toString());

              }}
            >
              Prev
            </HiringListPaginationPrevButton>}
            {page !== totalPage && <HiringListPaginationNextButton
              onClick={(e) => {
                e.preventDefault();

                const nextPage = page + 1;

                const queries = new URLSearchParams(window.location.search);
                queries.set("page", nextPage.toString());
                // @ts-ignore
                window.location = `${window.location.pathname}?${queries.toString()}`;
                // history.pushState(null, null, "?" + queries.toString());

              }}
            >
              Next
            </HiringListPaginationNextButton>}
          </HiringListPaginationButtonsContainer>}
        </HiringSearchListPrimaryWrapper>

        <HiringSearchListSecondary />
      </HiringSearchListContent>
    </HiringSearchListContainer>
  );
};

export default HiringList;

// {/* <JobSearchListHeader>
//   <form
//     style={{
//       width: "100%",
//     }}
//     onSubmit={handleSubmit}
//   >
//     <JobSearchListTextInput>
//       <IconButton
//         type="submit"
//         className={classes.searchButton}
//         aria-label="search"
//       >
//         <SearchIcon />
//       </IconButton>

//       <InputBase
//         id="title"
//         name="title"
//         type="text"

//         className={classes.input}

//         placeholder="Type a job title"
//         inputProps={{
//           maxLength: jobTitleMaxLength,
//           "aria-label": "Search jobs",
//         }}

//         value={values.title}
//         onChange={handleChange}
//         onBlur={handleBlur}

//         endAdornment={
//           <>
//             <IconButton
//               onClick={e => {
//                 e.preventDefault();

//                 // router.push("/jobs");

//                 window.location.href = "/jobs";
//               }}
//               type="button"
//               className={classes.clearButton}
//               aria-label="reset form"
//             >
//               <CancelIcon />
//             </IconButton>

//             {/* <IconButton
//                         onClick={e => {
//                           e.preventDefault();

//                           // router.push("/jobs");

//                           window.location.href = "/jobs";
//                         }}
//                         type="button"
//                         className={classes.setButton}
//                         aria-label="reset form"
//                       >
//                         <SettingsIcon />
//                       </IconButton> */}

//           </>
//         }

//       />
//     </JobSearchListTextInput>
//   </form>
// </JobSearchListHeader> */}

// {
//   profile_bio &&
//   <ProfileBio>
//     {profile_bio}
//   </ProfileBio>
// }

// <HiringFeaturesContainer>
//   {profile_job &&
//     <HiringFeatureWrapper onClick={(e) => {
//       e.preventDefault();

//       setFieldValue("job", profile_job);
//       submitForm();
//     }}>
//       <AccountBoxIcon style={{
//         fontSize: "1.25rem",
//         marginLeft: "-0.1rem",
//       }} />
//       <span style={{
//         marginLeft: "0.25rem",
//         marginRight: "0.5rem"
//         // opacity: 0.7,
//       }}>
//         {profile_job}
//       </span>
//     </HiringFeatureWrapper>
//   }

//   {profile_salary &&
//     <HiringFeatureWrapper onClick={(e) => {
//       e.preventDefault();

//       setFieldValue("salary", profile_salary);
//       submitForm();
//     }} >
//       <Money style={{
//         fontSize: "1rem",
//         // marginLeft: "0.25rem", 
//         // marginRight: "0.1rem", 
//         color: "white",
//         backgroundColor: "rgb(37, 191, 161)"
//       }} />
//       <span style={{
//         marginLeft: "0.5rem",
//         // marginRight: "
//         // opacity: 0.7,
//       }}>
//         {profile_salary}
//       </span>
//     </HiringFeatureWrapper>
//   }

//   {profile_location &&
//     <HiringFeatureWrapper onClick={(e) => {
//       e.preventDefault();

//       setFieldValue("location", profile_location);
//       submitForm();
//       // router.push(`/hiring?&location=${profile_location}`);
//       // setSkillInput("");
//     }} >
//       <LocationOnIcon style={{
//         fontSize: "1.25rem",
//         // marginLeft: "0.1rem",
//       }} />
//       <span style={{
//         marginLeft: "0.25rem",
//         marginRight: "0.25rem"
//       }}>
//         {profile_location}
//       </span>
//     </HiringFeatureWrapper>
//   }

//   {profile_website && <HiringFeatureLink
//     href={profile_website}
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <PublicIcon style={{
//       fontSize: "1rem",
//       // marginLeft: "0.1rem",
//     }} />
//     <span style={{
//       marginLeft: "0.25rem",
//       marginRight: "0.5rem"
//     }}>
//       Website
//     </span>
//   </HiringFeatureLink>}

//   {github_username && <HiringFeatureLink
//     href={`https://github.com/${github_username}`}
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <GitHubIcon style={{
//       fontSize: "1rem",
//       // marginLeft: "0.5rem",
//     }} />
//     <span style={{
//       marginLeft: "0.25rem",
//       marginRight: "0.25rem",
//       display: "flex",
//     }}>
//       GitHub
//     </span>
//   </HiringFeatureLink>}

//   {profile_use_cryptocurrency &&
//     <HiringFeatureWrapper onClick={(e) => {
//       e.preventDefault();

//       setFieldValue("use_cryptocurrency", yes);
//       submitForm();
//     }} >
//       <img src="/static/logos/bitcoin.svg" style={{
//         width: "1rem",
//         // marginLeft: "0.25rem",
//       }} />
//       <span style={{
//         marginLeft: "0.25rem",
//         marginRight: "0.25rem"
//       }}>
//         Yes
//       </span>
//     </HiringFeatureWrapper>
//   }
// </HiringFeaturesContainer>

// {/* <ListHeader>
//   <CentralizeChildren>
//     {numberOfRecruiters !== 0 ? <HiringListTitle>
//       {totalPage > 1 ? `${hiringListTitle} (${page} / ${totalPage})` : hiringListTitle}
//     </HiringListTitle> : <NoSearchList href="/hiring" message="No results" />}
//   </CentralizeChildren>
// </ListHeader> */}