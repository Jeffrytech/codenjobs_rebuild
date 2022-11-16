import React, { useState } from "react";
import Select from "react-select";
import Creatable from 'react-select/creatable';

import router, { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import DirectionsIcon from "@material-ui/icons/Directions";
// import SettingsIcon from '@material-ui/icons/Settings';
import CancelIcon from "@material-ui/icons/Cancel";

import CodeIcon from '@material-ui/icons/Code';

import BackgroundColor from "../../BackgroundColor";
import { jobTitleMaxLength } from "../../../validators";

import { 
  useStyles,
    
  SearchListFormContainer,
  SearchListFormTitle,
  SearchListFormSubtitle,

  SearchListTextInput,
  SearchButton,

  // SearchSelectContainer,
  // SearchOptionsWrapper,
  // SearchTypeSelectWrapper,
  SearchCategorySelectWrapper,
} from "../../SearchList/SearchListFormCSS";
import { 
  blogPostCategoryOptions, 
} from "../../../typeDefinitions/blog";

import SearchListSpinner from "../../spinners/SearchListSpinner";

// import CompanyName from "./CompayName";
// import Salary from "./Salary";
// import Location from "./Location";
// import Skill from "./Skill";
// import SearchListOption from "../../SearchListOption";
import { SearchListOptionsContainer, SearchListOptionSkillWrapper } from "../../SearchListOption/SearchListOptionCSS";
// import { useEffect } from "react";

// This is for the input button for the job tile, use react-select instead?

const BlogListForm = ({
  handleSubmit,

  handleChange,
  handleBlur,

  values,

  setFieldValue,

  isSubmitting,
}) => {

  const classes = useStyles();

  return (
    <BackgroundColor style={{
      // marginBottom: "1rem",
      // borderBottom: "1px solid rgb(237, 242, 247)",

      // backgroundColor: "white",
      // background: "url(/static/tokens.png)", // background: url(/static/background.png);
      // backgroundSize: "", // background-size: contain;
    }}>
      <SearchListFormContainer>
        <SearchListFormTitle>Find blog posts</SearchListFormTitle>
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

              placeholder="Type a blog title"
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

                  <IconButton 
                    onClick={e => {
                      e.preventDefault();

                      // resetForm();
                      // router.push("/jobs");

                      window.location.href = "/blogs";
                      // setFieldValue("title", "");
                      // submitForm();
                                            
                      // Not working.
                      // resetForm();
                    }} 
                    type="button" 
                    className={classes.clearButton} 
                    aria-label="reset form"
                  >
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

export default BlogListForm;

// {/* <SearchListOptionsContainer>
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
//                     // submitForm();
//                 } else {
//                     setFieldValue("category", e);
//                     // setFieldValue("category", e.value);
//                 }
//                 // submitForm();
//             }}

//             onBlur={handleBlur}

//             options={blogPostCategoryOptions}

//             // isClearable={true}
//             isSearchable={true}

//             // Shown only when value === undefined
//             placeholder="Category"
//         // placeholder="Job Category"
//         />
//     </SearchCategorySelectWrapper>

//     <SearchListOptionSkillWrapper>
//         <IconButton type="button" className={classes.searchButton} aria-label="Tag" >
//             <CodeIcon />
//         </IconButton>

//         <InputBase
//             id="tag"
//             name="tag"
//             type="text"
//             placeholder="Tag"

//             className={classes.input}

//             value={values.tag}
//             onChange={handleChange}
//             onBlur={handleBlur}
//         />
//     </SearchListOptionSkillWrapper>
// </SearchListOptionsContainer> */}