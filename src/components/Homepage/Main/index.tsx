// import Link from "next/link"
// import ExternalLink from "../../ExternalLink"

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import { COMPANY_NAME } from "../../../config/environment";
// import Divider from "@material-ui/core/Divider";

import { 
  MainCompanyDescription,
  MainCompanyName,
  MainContainer, 
  MainDesktopImage, 
  MainFormInputButton, 
  MainFormInputContainer, 
  MainFormInputWrapper, 
  MainJobSearchForm, 
  MainJobSearchList, 
  MainJobSearchListContainer, 
  MainJobSearchListLink, 
  MainMobileImage, 
  MainSection,

  useStyles,
} from "./MainCSS";
import { jobTitleMaxLength, locationMaxLength } from "../../../validators";
import useMainJobSearchForm from "./useMainJobSearchForm";
import Link from "next/link";

const Main = () => {
  const classes = useStyles();

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useMainJobSearchForm();

  const mainJobSearchLinkList = [
    {
      text: "All",
      link: "/jobs",
    },
    {
      text: "Remote",
      link: "/jobs?location=Remote",
    },
    
    {
      text: "Blockchain",
      link: "/jobs?skill=Blockchain",
    },
    {
      text: "Rust",
      link: "/jobs?skill=Rust",
    },
    // {
    //   text: "Solana",
    //   link: "/jobs?skill=Solana",
    // },
    {
      text: "NFT",
      link: "/jobs?title=NFT",
    },
    // {
    //   text: "Pay in cryptocurrency",
    //   link: "/jobs?pay_in_cryptocurrency=true",
    // },
  ];
  
  return (
    <MainSection>
      <MainContainer>
        <MainJobSearchForm
          onSubmit={handleSubmit}
        >
          <MainCompanyName>
            {COMPANY_NAME}
          </MainCompanyName>
          <MainCompanyDescription
            style={{
              marginTop: "0",
              fontSize: "2.5rem",
            }}
          >
            An all-in-one cryptocurrency 
            <br />
            network
            {/* An all-in-one cryptocurrency user network */}
          </MainCompanyDescription>
          <MainFormInputContainer>
            <MainFormInputWrapper>
              <IconButton 
                type="submit" 
                className={classes.searchButton} 
                aria-label="search" 
              >
                <SearchIcon />
              </IconButton>

              <InputBase
                id="jobTitle"
                name="jobTitle"
                type="text"

                className={classes.input}

                // placeholder="Type a job title"
                placeholder="Job title, Blockchain"
                inputProps={{
                  maxLength: jobTitleMaxLength,
                  "aria-label": "Search a job with a job title",
                }}

                value={values.jobTitle}
                onChange={handleChange}
                onBlur={handleBlur}

              />
            </MainFormInputWrapper>

            <MainFormInputWrapper>
              <IconButton 
                type="submit" 
                className={classes.searchButton} 
                aria-label="search" 
              >
                <LocationOnIcon />
              </IconButton>

              <InputBase
                id="jobLocation"
                name="jobLocation"
                type="text"

                className={classes.input}

                placeholder="Location, Remote"
                inputProps={{
                  maxLength: locationMaxLength,
                  "aria-label": "Search a job with a location",
                }}

                value={values.jobLocation}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </MainFormInputWrapper>

            <MainFormInputButton
              type="submit"
            >
              <img 
                src="/static/design/link_white.svg"
              />
            </MainFormInputButton>
          </MainFormInputContainer>

          <MainJobSearchListContainer>
            {mainJobSearchLinkList.map((jobSearch, index) => {
              if (index === mainJobSearchLinkList.length - 1) {
                return <MainJobSearchList
                  key={jobSearch.text}
                  // $last={true}
                >
                  <Link
                    href={jobSearch.link}
                  >
                    <MainJobSearchListLink>
                      {jobSearch.text}
                    </MainJobSearchListLink>
                  </Link>
                </MainJobSearchList>;
              } else {
                return <>
                  <MainJobSearchList
                    key={jobSearch.text}
                  >
                    <Link
                      href={jobSearch.link}
                    >
                      <MainJobSearchListLink>
                        {jobSearch.text}
                      </MainJobSearchListLink>
                    </Link>
                    {<span
                      style={{
                        margin: "0 0.25rem",
                      }}
                    >
                      ·
                    </span>}
                  </MainJobSearchList>
                </>;
              }
              
            })}
          </MainJobSearchListContainer>
          
        </MainJobSearchForm>        
      </MainContainer>
      <MainDesktopImage
        id="main-desktop-image"
        src="/static/design/main_desktop.svg"
      />
      {/* <div> */}
      <MainMobileImage
        id="main-mobile-image"
        src="/static/design/main_mobile.svg"
      />
      {/* </div> */}
      
    </MainSection>
  );
};

export default Main;