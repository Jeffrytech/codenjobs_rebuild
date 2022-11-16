import React, { useState } from "react";
import Select from "react-select";

// import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import DirectionsIcon from "@material-ui/icons/Directions";
// import SettingsIcon from '@material-ui/icons/Settings';
import CancelIcon from "@material-ui/icons/Cancel";

// import Avatar from '@material-ui/core/Avatar';
// import Chip from '@material-ui/core/Chip';

import CodeIcon from '@material-ui/icons/Code';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// import PaymentIcon from '@material-ui/icons/Payment';

// import Money from "@material-ui/icons/AttachMoneyRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import BackgroundColor from "../../BackgroundColor";
import { jobTitleMaxLength } from "../../../validators";

import { yesOrNo } from "../../../typeDefinitions/select";

import { 
  useStyles,
    
  SearchListFormContainer,
  SearchListFormTitle,
  SearchListFormSubtitle,

  SearchListTextInput,
  SearchButton,

  SearchSelectContainer,
  // SearchOptionsWrapper,
  SearchTypeSelectWrapper,
  SearchCategorySelectWrapper,
} from "../../SearchList/SearchListFormCSS";

import SearchListSpinner from "../../spinners/SearchListSpinner";

// import CompanyName from "./CompayName";
// import Salary from "./Salary";
// import Location from "./Location";
// import Skill from "./Skill";
// import SearchListOption from "../../SearchListOption";
import { 
  // SearchListOptionCompanyWrapper, 
    
  // SearchListOptionInput, 
  // SearchListOptionInputWrapper,

  SearchListOptionLocationWrapper, 
  SearchListOptionSalaryWrapper, 
  SearchListOptionsContainer, 
  SearchListOptionSkillWrapper,

  SearchListOptionUseCryptocurrencyWrapper,
} from "../../SearchListOption/SearchListOptionCSS";
import { useEffect } from "react";

// This is for the input button for the job tile, use react-select instead?

const ForHireListForm = ({
  handleSubmit,

  handleChange,
  handleBlur,

  values,

  setFieldValue,

  isSubmitting,
  // submitForm,
}) => {
  const classes = useStyles();

  return (
    <BackgroundColor style={{
      // marginBottom: "1rem",
      // borderBottom: "1px solid rgb(237, 242, 247)",
    }}>
      <SearchListFormContainer>
        <SearchListFormTitle>Find People Hiring</SearchListFormTitle>
        {/* Extract CSS */}
        <SearchListFormSubtitle>
          {/* One of the best code network in the world 🌎 */}
                    The worldwide network to help you 🌎
        </SearchListFormSubtitle>

        <form
          onSubmit={handleSubmit}
        >
          <SearchListTextInput>
            <IconButton type="submit" className={classes.searchButton} aria-label="search" >
              <SearchIcon />
            </IconButton>

            <InputBase
              id="job"
              name="job"
              type="text"

              className={classes.input}

              placeholder="Type a job title"
              // placeholder="Type a job title"
              // placeholder="Type a title and use the filters below to find the best results"
              inputProps={{
                maxLength: jobTitleMaxLength,
                "aria-label": "Search People For Hire",
              }}

              value={values.job}
              onChange={handleChange}
              onBlur={handleBlur}

              endAdornment={
                <>
                  {/* Include search spinenr here later */}
                  <SearchButton type="submit" aria-label="search" >
                    {isSubmitting && <SearchListSpinner />}
                                        Search
                  </SearchButton>

                  <IconButton onClick={e => {
                    e.preventDefault();

                    window.location.href = "/forhire";
                  }} type="button" className={classes.clearButton} aria-label="reset form">
                    <CancelIcon />
                  </IconButton>
                </>
              }

              // required
            />
          </SearchListTextInput>

          {/* Make it work with this. */}
          {/* http://localhost:3000/jobs?category=Programming&type=Full-Time&salary=salary&location=location */}

          {/* Refer to this. */}
          {/* https://material-ui.com/pt/components/chips/ */}
          {/* Company, Salary, Location, (Pay in crpyto), Skill  */}
          {/* {showSearchOptions &&  */}

          {/* Company and skill should work. */}
                    
          <SearchListOptionsContainer>
            {/* Extract these later? */}
            {/* <div style={{
                            flexGrow: 1,
                            display: "block",
                            width: "100%",

                            marginRight: "1rem",
                        }}> */}
            <SearchListOptionUseCryptocurrencyWrapper>
              <Select
                id="use_cryptocurrency"
                name="use_cryptocurrency"

                // Extract this?
                styles={{
                  control: (provided) => ({
                    ...provided,
                    // none of react-select's styles are passed to <Control />
                    border: "2px solid rgb(239, 239, 239)",
                    borderRadius: "0.5rem",

                    padding: "0.25rem",
                    fontFamily: "roboto",
                    // opacity: "0.7",
                  }),
                  placeholder: (provided) => ({ ...provided,
                    // backgroundColor: "red",
                    marginLeft: "1.75rem",
                    opacity: "0.7"
                  }),
                  input: (provided) => ({ ...provided,
                    // backgroundColor: "blue",
                    backgroundImage: "url('/static/bitcoin.svg')",
                    backgroundRepaet: "no-repeat",
                    backgroundSize: "cover",

                    width: "1.25rem",
                    height: "1.25rem",

                    marginRight: "1rem",

                    // opacity: ""
                    /* background-position: center; */
                    //             height: 100 %;
                    //             background- position: center;
                    // background-repeat: no-repeat;
                    // background-size: cover;
                    // /* width: 1rem; */
                    // width: 1.5rem;
                  }),
                  singleValue: (provided) => ({ ...provided,
                    marginLeft: "1.75rem",
                    // opacity: "0.7"
                  }),
                }}

                // value={{
                //     value: values.use_cryptocurrency.value,
                //     label: values.use_cryptocurrency.value === true ? "Yes" : "No",
                // }}
                // value={undefined}
                // Should be this.
                // value={returnYesOrNo(values.use_cryptocurrency)}
                value={values.use_cryptocurrency !== undefined ? values.use_cryptocurrency : undefined}

                onChange={(e) => {
                  // console.log(e);

                  if (e === null) {
                    setFieldValue("use_cryptocurrency", undefined);
                  } else {
                    setFieldValue("use_cryptocurrency", e);
                    // if (e.value === true) {
                    //     setFieldValue("use_cryptocurrency", yes);
                    // } else if (e.value === false) {
                    //     setFieldValue("use_cryptocurrency", no);
                    // }
                                        
                    // submitForm();
                    // setFieldValue("category", e.value);
                  }
                }}

                onBlur={handleBlur}

                options={yesOrNo}

                isClearable={true}
                isSearchable={true}

                // Shown only when value === undefined
                // placeholder="Pay"
                // placeholder="Pay in cryptocurrency"
                placeholder="Use cryptocurrency"

                // styles={useCryptocurrencyStyles}
                // placeholder="Job Type"
              />
            </SearchListOptionUseCryptocurrencyWrapper>
            {/* </div> */}
                       

            <SearchListOptionSalaryWrapper>
              <IconButton type="button" className={classes.searchButton} aria-label="Salary" >
                <MonetizationOnIcon style={{
                  color: "rgb(37, 191, 161)"
                }} />
              </IconButton>

              <InputBase
                id="salary"
                name="salary"
                type="text"
                placeholder="Salary"

                className={classes.input}

                // inputProps={{
                //     maxLength: jobTitleMaxLength,
                //     "aria-label": "Search jobs",
                // }}

                value={values.salary}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </SearchListOptionSalaryWrapper>
          </SearchListOptionsContainer>

          <SearchListOptionsContainer>
            {/* Extract these later? */}
            <SearchListOptionLocationWrapper>
              <IconButton type="button" className={classes.searchButton} aria-label="Location" >
                <LocationOnIcon />
              </IconButton>

              <InputBase
                id="location"
                name="location"
                type="text"
                placeholder="Location"

                className={classes.input}

                // inputProps={{
                //     maxLength: jobTitleMaxLength,
                //     "aria-label": "Search jobs",
                // }}

                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </SearchListOptionLocationWrapper>

            <SearchListOptionSkillWrapper>
              <IconButton type="button" className={classes.searchButton} aria-label="Skill" >
                <CodeIcon />
              </IconButton>

              <InputBase
                id="skill"
                name="skill"
                type="text"
                placeholder="Skill"

                className={classes.input}

                // inputProps={{
                //     maxLength: jobTitleMaxLength,
                //     "aria-label": "Search jobs",
                // }}

                value={values.skill}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </SearchListOptionSkillWrapper>
          </SearchListOptionsContainer>
        </form>
      </SearchListFormContainer>
    </BackgroundColor>
  );
};

export default ForHireListForm;

