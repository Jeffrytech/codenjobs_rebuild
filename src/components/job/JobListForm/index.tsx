import React from "react";

// import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import DirectionsIcon from "@material-ui/icons/Directions";
// import SettingsIcon from '@material-ui/icons/Settings';
import CancelIcon from "@material-ui/icons/Cancel";



// import Money from "@material-ui/icons/AttachMoneyRounded";

// import BackgroundColor from "../../components/BackgroundColor";

// import { JobListHeaderContainer, JobListHeaderTitle } from "../components/job/JobList/JobListCSS";

import BackgroundColor from "../../BackgroundColor";
import { jobTitleMaxLength } from "../../../validators";

// import {
//     useStyles,

//     SearchListFormContainer,
//     SearchListFormTitle,
//     SearchListFormSubtitle,

//     SearchListTextInput,
//     SearchButton,

//     SearchSelectContainer,
//     // SearchOptionsWrapper,
//     SearchTypeSelectWrapper,
//     SearchCategorySelectWrapper,
// } from "../../SearchListFormCSS";


// import useJobListForm from "./useJobListForm";


// import CompanyName from "./CompayName";
// import Salary from "./Salary";
// import Location from "./Location";
// import Skill from "./Skill";
// import SearchListOption from "../../SearchListOption";
import { 
  SearchListFormContainer, 
  SearchListFormSubtitle, 
  SearchListFormTitle, 
  SearchListTextInput, 
  useStyles 
} from "../../SearchList/SearchListFormCSS";

// This is for the input button for the job tile, use react-select instead?

const JobListForm = ({
  handleSubmit,

  handleChange,
  handleBlur,

  values,

  setFieldValue,

  isSubmitting,
  // submitForm,
  // title,
  // category,
  // type,

  // company_name,
  // salary,
  // location,

  // skill,
}) => {
  // console.log(values.type);
  // { label: "Full-Time", value: "Full-Time" }
  // alert(salary);

  const classes = useStyles();

  // const {
  //     handleSubmit,

  //     handleChange,
  //     handleBlur,

  //     values,
  //     // setValues,

  //     // errors,

  //     setFieldValue,

  //     // touched,
  //     // setFieldTouched,

  //     // resetForm,

  //     isSubmitting,
  //     submitForm,
  // } = useJobListForm({
  //     title,
  //     category,
  //     type,

  //     company_name,
  //     salary,
  //     location,

  //     skill,
  // });


  // alert(values.title);

  // Make title work first.

  // alert(values.category !== "" ? values.category : undefined);
  // console.log(values.category !== "" ? findJobCategoryValue(values.category) : undefined);

  // console.log(values.category !== undefined ? values.category : undefined);

  // Include type 

  // alert(values.type !== undefined ? values.type : undefined);
  // console.log(values.type !== undefined ? values.type : undefined);

  // alert(company_name);

  // const showSearchOptions = (company_name) || (salary) || (location) || (skill)

  return (
    <BackgroundColor style={{
      // marginBottom: "1rem",
      // borderBottom: "1px solid rgb(237, 242, 247)",
    }}>
      <SearchListFormContainer>
        <SearchListFormTitle>Find Your Job</SearchListFormTitle>
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
              id="title"
              name="title"
              type="text"

              className={classes.input}

              placeholder="Type a job title"
              // placeholder="Type a job title"
              // placeholder="Type a title and use the filters below to find the best results"
              inputProps={{
                maxLength: jobTitleMaxLength,
                "aria-label": "Search jobs",
              }}

              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}

              endAdornment={
                <>
                  {/* Include search spinenr here later */}
                  {/* <SearchButton type="submit" aria-label="search" >
                                        {isSubmitting && <SearchListSpinner />}
                                        Search
                                    </SearchButton> */}

                  {/* <IconButton type="button" className={classes.setButton} aria-label="menu">
                                    <SettingsIcon />
                                    </IconButton> */}

                  <IconButton onClick={e => {
                    e.preventDefault();

                    // resetForm();
                    // router.push("/jobs");

                    window.location.href = "/jobs";
                    // setFieldValue("title", "");
                    // submitForm();

                    // Not working.
                    // resetForm();
                  }} type="button" className={classes.clearButton} aria-label="reset form">
                    <CancelIcon />
                  </IconButton>
                </>
              }

              // required
            />
            {/* <IconButton type="button" className={classes.iconButton} aria-label="menu">
                        <SettingsIcon />
                        </IconButton> */}

          </SearchListTextInput>
        </form>
      </SearchListFormContainer>
    </BackgroundColor>
  );
};

export default JobListForm;

// {/* 
//     Category, job type, salary, 
//     location, skill (with CSS if possible?), company name? */}
// <SearchSelectContainer>
//     <SearchCategorySelectWrapper>
//         <Select
//             id="category"
//             name="category"

//             styles={{
//                 control: (provided) => ({
//                     ...provided,
//                     // none of react-select's styles are passed to <Control />
//                     border: "2px solid rgb(239, 239, 239)",
//                     borderRadius: "0.5rem",

//                     padding: "0.25rem",
//                     fontFamily: "roboto",

//                     // opacity: "0.7",
//                 }),
//             }}

//             value={values.category !== undefined ? values.category : undefined}
//             // Should be this.
//             // value={{
//             //     label: "Programming",
//             //     value: "Programming",
//             // }}

//             onChange={(e) => {
//                 // console.log(e);

//                 if (e === null) {
//                     setFieldValue("category", undefined);
//                 } else {
//                     setFieldValue("category", e);
//                     // setFieldValue("category", e.value);
//                 }
//                 // submitForm();
//             }}

//             onBlur={handleBlur}

//             options={jobCategoryOptions}

//             // isClearable={true}
//             isSearchable={true}

//             // Shown only when value === undefined
//             placeholder="Category"
//         // placeholder="Job Category"
//         />
//     </SearchCategorySelectWrapper>

//     <SearchTypeSelectWrapper>
//         <Select
//             id="type"
//             name="type"

//             styles={{
//                 control: (provided) => ({
//                     ...provided,
//                     // none of react-select's styles are passed to <Control />
//                     border: "2px solid rgb(239, 239, 239)",
//                     borderRadius: "0.5rem",

//                     padding: "0.25rem",
//                     fontFamily: "roboto",
//                     // opacity: "0.7",
//                 }),
//             }}

//             value={values.type !== undefined ? values.type : undefined}
//             // value={undefined}
//             // Should be this.
//             // value={{
//             //     label: "Programming",
//             //     value: "Programming",
//             // }}

//             onChange={(e) => {
//                 // console.log(e);

//                 if (e === null) {
//                     setFieldValue("type", undefined);
//                 } else {
//                     setFieldValue("type", e);
//                     // setFieldValue("category", e.value);
//                 }
//                 // submitForm();
//             }}

//             onBlur={handleBlur}

//             options={jobTypeOptions}

//             // isClearable={true}
//             isSearchable={true}

//             // Shown only when value === undefined
//             placeholder="Type"
//         // placeholder="Job Type"
//         />
//     </SearchTypeSelectWrapper>

// </SearchSelectContainer>

// {/* Make it work with this. */}
// {/* http://localhost:3000/jobs?category=Programming&type=Full-Time&salary=salary&location=location */}

// {/* Refer to this. */}
// {/* https://material-ui.com/pt/components/chips/ */}
// {/* Company, Salary, Location, (Pay in crpyto), Skill  */}
// {/* {showSearchOptions &&  */}

// {/* Company and skill should work. */}

// <SearchListOptionsContainer>
//     {/* Extract these later? */}
//     <SearchListOptionCompanyWrapper>
//         <IconButton type="button" className={classes.searchButton} aria-label="company name" >
//             <PaymentIcon />
//         </IconButton>

//         <InputBase
//             id="company_name"
//             name="company_name"
//             type="text"
//             placeholder="Company"

//             className={classes.input}

//             // inputProps={{
//             //     maxLength: jobTitleMaxLength,
//             //     "aria-label": "Search jobs",
//             // }}

//             // style={{
//             //     width: "100%",
//             // }}

//             value={values.company_name}
//             onChange={handleChange}
//             onBlur={handleBlur}
//         />
//     </SearchListOptionCompanyWrapper>

//     <SearchListOptionSalaryWrapper>
//         <IconButton type="button" className={classes.searchButton} aria-label="Salary" >
//             <MonetizationOnIcon style={{
//                 color: "rgb(37, 191, 161)"
//             }} />
//         </IconButton>

//         <InputBase
//             id="salary"
//             name="salary"
//             type="text"
//             placeholder="Salary"

//             className={classes.input}

//             // inputProps={{
//             //     maxLength: jobTitleMaxLength,
//             //     "aria-label": "Search jobs",
//             // }}

//             value={values.salary}
//             onChange={handleChange}
//             onBlur={handleBlur}
//         />
//     </SearchListOptionSalaryWrapper>
// </SearchListOptionsContainer>

// <SearchListOptionsContainer>
//     {/* Extract these later? */}
//     <SearchListOptionLocationWrapper>
//         <IconButton type="button" className={classes.searchButton} aria-label="Location" >
//             <LocationOnIcon />
//         </IconButton>

//         <InputBase
//             id="location"
//             name="location"
//             type="text"
//             placeholder="Location"

//             className={classes.input}

//             // inputProps={{
//             //     maxLength: jobTitleMaxLength,
//             //     "aria-label": "Search jobs",
//             // }}

//             value={values.location}
//             onChange={handleChange}
//             onBlur={handleBlur}
//         />
//     </SearchListOptionLocationWrapper>

//     <SearchListOptionSkillWrapper>
//         <IconButton type="button" className={classes.searchButton} aria-label="Skill" >
//             <CodeIcon />
//         </IconButton>

//         <InputBase
//             id="skill"
//             name="skill"
//             type="text"
//             placeholder="Skill"

//             className={classes.input}

//             // inputProps={{
//             //     maxLength: jobTitleMaxLength,
//             //     "aria-label": "Search jobs",
//             // }}

//             value={values.skill}
//             onChange={handleChange}
//             onBlur={handleBlur}
//         />
//     </SearchListOptionSkillWrapper>
// </SearchListOptionsContainer>
