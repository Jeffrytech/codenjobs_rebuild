// Extract this file from the current folder and reuse?

// https://www.striphtml.com/ 
// Paste job description with this.

import React, {
  useEffect,
  useState,
  // useEffect,
} from "react";

import Select from "react-select";

import CreatableSelect from 'react-select/creatable';

// https://jpuri.github.io/react-draft-wysiwyg/#/docs
// https://blog.logrocket.com/building-rich-text-editors-in-react-using-draft-js-and-react-draft-wysiwyg/
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";

import { Editor } from "react-draft-wysiwyg";

import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs"; // Equal to convertFromHTML
import DOMPurify from "dompurify";

import showdown from 'showdown';

import Required from "../../../form/Required";

// https://material-ui.com/api/radio/
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CodeIcon from '@material-ui/icons/Code';

import Chip from "@material-ui/core/Chip";

import {
  editorStyles,

  JobPostFormLabel,
  JobPostFormInputWrapper,
  JobPostFormTextInput,
  // JobPostFormTextarea,

  CharactersLeftWrapper,
  SkillsLeftWrapper,

  JobTypeRadioGroupWrapper,
  JobCategoryWrapper,
  
  JobPostSkillsWrapper,
  JobPostSkill,
  JobPostFormDetailText,
  CodeOfConductWrapper,
} from "../JobPostFormCSS";

import UrlOrEmailFieldErrorMessage from "../../../error/UrlOrEmailFieldErrorMessage";

import {
  locationMaxLength,
  
  jobTitleMaxLength,
  jobDescriptionMaxLength,
  
  salaryMaxLength,
  urlMaxLength,
  
  skillMaxLength,
  skillsValidatorError,
} from "../../../../validators";

import style from '../../../../styles/editor-styles.module.css';

import {
  charactersLeft,
  charactersUsedPercent,
  skillsLeft,
  // tagsLeft
} from "../../../../form";

import { 
  jobCategoryOptions, 
  // findJobCategoryValue, 
  findJobCategoryLabelValue 
} from "../../../../typeDefinitions/job";
import { Tooltip } from "@material-ui/core";
import { 
  skillRegex,
  styleRegex, 
} from "../../../../validators/regex";

import { returnYesOrNo, toLabelValue, yesOrNo } from "../../../../typeDefinitions/select";
import DropdownErrorMessage from "../../../error/DropdownErrorMessage";
import { findJobSkillListForOwner } from "../../../../api/privateJob";
import ExternalLink from "../../../ExternalLink";
import { MarkdownForm, MarkdownFormWrapper, MarkdownLabelWrapper, MarkdownSwitch } from "../../../markdown/MarkdownCSS";
import { COMPANY_CODE_OF_CONDUCT } from "../../../../config/environment";

// import { englishOnly } from "../../validators/regex";

const reactSelectControlCSS = {
  border: "2px solid rgb(239, 239, 239)",
  borderRadius: "0.5rem",
  fontFamily: "roboto",
};

const JobForm = ({
  handleChange,
  handleBlur,
  setFieldValue,
  // setValues,
  // setFieldTouched,

  errors,
  touched,

  jobTitle,

  jobDescription,
  jobDescriptionMarkdown,
  
  jobLocation,

  type,
  category,
  
  salary,
  pay_in_cryptocurrency,

  howToApply,
  skills,
  setFieldError,

  editorState,
  setEditorState,

  decorators,

  // setActiveStep,
}) => {
  const converter = new showdown.Converter();
  
  const { 
    wrapperStyle, 
    toolbarStyle, 
    // editorStyle
  } = editorStyles;

  let html = editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()));
  html = html.replace(styleRegex, '$1'); // Remove style attribute.
  // console.log(html);
  // console.log("replaced");
  // console.log(html.replace(/style="[^"]*"/, ""));
  // https://stackoverflow.com/questions/19356398/remove-style-attribute-on-style-tag#19564598
  // console.log(html.replace(/(<[^>]+) style=".*?"/ig, '$1'));
  // alert(html.length);

  const [useMarkdown, setUseMarkdown] = useState(false);
  
  const [skillInput, setSkillinput] = useState(""); // Use the function and value from formik.

  const removeSkill = (index) => {
    if ((skills.length - 1) >= index) {
      const newSkills = [...skills];
      newSkills.splice(index, 1);
      setFieldValue("skills", newSkills);
    }
  };

  const [skillOptions, setSkillOptions] = useState([]);

  useEffect(() => {
    findJobSkillListForOwner().then(({ data }) => {
      setSkillOptions(data.map(skill => {
        return toLabelValue(skill);
      }));
      // setSkillOptions()
    }).catch(error => {
      console.log("error");
      console.error(error);
    });
  }, []);

  // const handleTagInput = (e) => {
  //   const { value } = e.target;

  //   if (e.key === "Enter" && value && skills.length < 5) {
  //     if (skills.find(skill => skill.toLowerCase() === value.toLowerCase())) {
  //       return;
  //     }
  //     setFieldValue("skills", [...skills, value]);

  //     setSkillinput("");
  //   } else if (
  //     e.key === "Backspace" && !value && skills.length > 0
  //   ) {
  //     setFieldValue("skills", skills.slice(0, (skills.length - 1)));
  //   }
  // };

  return (
    <>
      <JobPostFormLabel htmlFor="jobTitle" >
        Job Title
        <Required />
      </JobPostFormLabel>
      <JobPostFormInputWrapper>
        <JobPostFormTextInput
          id="jobTitle"
          name="jobTitle"
          type="text"

          placeholder={"Job title(required)"}
          maxLength={jobTitleMaxLength}

          onChange={handleChange}
          onBlur={handleBlur}
          value={jobTitle}

          required
        />
      </JobPostFormInputWrapper>
      <CharactersLeftWrapper>
        {charactersLeft(jobTitleMaxLength, jobTitle)}
      </CharactersLeftWrapper>

      {/* <JobPostFormLabel style={{
        marginBottom: "1rem",
      }}>
        Job Description
        <Required />
      </JobPostFormLabel> */}

      <MarkdownLabelWrapper>
        <div>
          <JobPostFormLabel style={{
            marginBottom: "1rem",
          }}
          htmlFor="jobDescriptionMarkdown"
          >
            Job Description
            <Required />
          </JobPostFormLabel>
        </div>

        <Tooltip title={!useMarkdown ? "Use markdown" : "Unuse markdown"} arrow >
          <MarkdownSwitch
            $useMarkdown={useMarkdown}
            onClick={(e) => {
              e.preventDefault();

              if (!useMarkdown) {

                setFieldValue("jobDescriptionMarkdown", converter.makeMarkdown(jobDescription));
              }
              setUseMarkdown(!useMarkdown);
            }}
          >
            <CodeIcon />
          </MarkdownSwitch>
        </Tooltip>
      </MarkdownLabelWrapper>

      <MarkdownFormWrapper $useMarkdown={useMarkdown} >
        {!useMarkdown ? <Editor
          editorState={editorState}
          onEditorStateChange={(editorState)=> {
            if (html.length < jobDescriptionMaxLength) {

              // console.log(html);

              setEditorState(editorState);

              // setFieldValue("jobDescription", DOMPurify.sanitize(html));

              // setEditorState(
                
            }

            
          }}
          // onEditorStateChange={(editorState) => {
          //   if (html.length < jobDescriptionMaxLength) {
          //     setEditorState(editorState);
          //   }
          // }}

          // decorators doesn't work here.
          customDecorators={decorators}

          placeholder="You can use markdown instead with < > button."

          onChange={(e) => {
            // alert("onchange");
            // if (html.length < blogPostBodyMaxLength) {
            setFieldValue("jobDescription", DOMPurify.sanitize(html));
            // }
            // const stateWithTemporaryHtml = EditorState.createWithContent(ContentState.createFromBlockArray(
            //   convertFromHTML(html)
            // ), decorator);

            // // setEditorState(EditorState.createWithContent(editorState.getCurrentContent()));
            // setEditorState(stateWithTemporaryHtml);
          }}
          // onChange={handleChange}
          // onBlur={handleBlur}

          wrapperStyle={wrapperStyle}
          toolbarStyle={toolbarStyle}
          // editorStyle={editorStyle}

          editorClassName={style.reactMarkDown}

          maxLength={jobDescriptionMaxLength}

          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "list",
              "textAlign",
              "link",
              "embedded",
              "image",
              "remove",
              "history"
            ],
            blockType: {
              inDropdown: true,
              options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
              // Find how to include codesnippets?
              // options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote'],
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
            },
          }}
        /> : <MarkdownForm
          id="jobDescriptionMarkdown"
          name="jobDescriptionMarkdown"

          rows={16}

          // Show value with markdown
          // Make it to markdown
          // value={markdownValue} // html to makrdown
          value={jobDescriptionMarkdown} // html to makrdown
          // value={body} // html to makrdown
          // value={converter.makeMarkdown('<h1>a heading</h1>')} // html to makrdown

          // placeholder="You can use markdown here."
          placeholder="Use markdown here."
          maxLength={jobDescriptionMaxLength}

          // onBlur={handleBlur}

          // Save html value.
          // Then, when valeu changes, set it from markdown to html.
          onBlur={handleBlur}
          onChange={async (e) => {
            setFieldValue("jobDescriptionMarkdown", e.target.value);

            const html = converter.makeHtml(e.target.value);
            setFieldValue("jobDescription", html);

            setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(
              convertFromHTML(html)
            )));
          }}
        />}
      </MarkdownFormWrapper>

      <CharactersLeftWrapper>
        {charactersUsedPercent(jobDescriptionMaxLength, jobDescription)}
        <CodeOfConductWrapper>
          <ExternalLink href={COMPANY_CODE_OF_CONDUCT} >
            Code of Conduct
          </ExternalLink>
        </CodeOfConductWrapper>
      </CharactersLeftWrapper>

      <JobPostFormLabel htmlFor="jobLocation" >
        Job Location
        <Required />
      </JobPostFormLabel>
      <JobPostFormDetailText>
        {'Use "Remote" if your company allows remote work'}
      </JobPostFormDetailText>

      <JobPostFormInputWrapper>
        <JobPostFormTextInput
          id="jobLocation"
          name="jobLocation"
          type="text"

          placeholder={"Where an employee will work"}
          maxLength={locationMaxLength}

          // onChange={handleChange}
          onChange={e => {
            e.preventDefault();

            // Find the better solution later.
            // const result = englishOnlyNotRequiredSRegex.test(e.target.value);
            // if (result) {
            setFieldValue("jobLocation", e.target.value);
            // }
          }}
          onBlur={handleBlur}
          value={jobLocation}

          required
        />
      </JobPostFormInputWrapper>
      <CharactersLeftWrapper>
        {charactersLeft(locationMaxLength, jobLocation)}
      </CharactersLeftWrapper>

      <JobPostFormLabel htmlFor="type" >
        Type
        <Required />
      </JobPostFormLabel>

      <JobTypeRadioGroupWrapper>
        <RadioGroup
          row
          aria-label="type"
          name="type"
          value={type}
          onChange={e => {
            setFieldValue("type", e.target.value);
          }}
        >
          <FormControlLabel value="Full-Time" control={<Radio />} label="Full-Time" />
          <FormControlLabel value="Part-Time" control={<Radio />} label="Part-Time" />
          <FormControlLabel value="Contract" control={<Radio />} label="Contract" />
          <FormControlLabel value="Freelance" control={<Radio />} label="Freelance" />
          <FormControlLabel value="Internship" control={<Radio />} label="Internship" />
        </RadioGroup>
      </JobTypeRadioGroupWrapper>

      <JobPostFormLabel htmlFor="category" >
        Category
        <Required />
      </JobPostFormLabel>

      <JobCategoryWrapper>
        <Select
          id="category"
          name="category"

          styles={{
            control: (provided) => ({
              ...provided,
              // none of react-select's styles are passed to <Control />
              ...reactSelectControlCSS,
              // opacity: "0.7",
            }),
          }}
          
          // value={findJobCategoryValue(category)}
          value={findJobCategoryLabelValue(category)}
          // value={{
          //   label: category,
          //   value: category,
          // }}
          onChange={e => {
            // console.log(e);
            setFieldValue("category", e.value);
            // setFieldValue("category", e.value);
          }}

          options={jobCategoryOptions}
          // placeholder="Category"
        />
      </JobCategoryWrapper>

      <JobPostFormLabel htmlFor="salary" >
        Salary
        <Required />
      </JobPostFormLabel>
      <JobPostFormDetailText>
        {'Use "Not listed" if your company policy is not to show it publicly'}
      </JobPostFormDetailText>

      <JobPostFormInputWrapper>
        <JobPostFormTextInput
          id="salary"
          name="salary"
          type="text"

          placeholder={"$100000 format or Not listed"}
          // placeholder={"$160k or $160/h format"}
          maxLength={salaryMaxLength}

          // onChange={handleChange}
          onChange={e => {
            e.preventDefault();

            // const result = dollarOnlyNotRequired.test(e.target.value);
            // const result = /[\$ ]+?(\d+([,\.\d]+)?)/.test(e.target.value);
            // // alert(result);
            // if (result) {

            // }

            if (e.target.value.toLowerCase() === "not listed") {
              setFieldValue("salary", "Not listed");
            } else {
              setFieldValue("salary", e.target.value);
            }
           
          }}
          onBlur={handleBlur}
          value={salary}

          required
        />
      </JobPostFormInputWrapper>
      <CharactersLeftWrapper>
        {charactersLeft(salaryMaxLength, salary)}
      </CharactersLeftWrapper>

      <JobPostFormLabel htmlFor="pay_in_cryptocurrency" >
        Pay in cryptocurrency
        <Required />
      </JobPostFormLabel>

      {/* Make it to JobSelectWrapper later */}
      <JobCategoryWrapper>
        <Select
          id="pay_in_cryptocurrency"
          name="pay_in_cryptocurrency"

          styles={{
            control: (provided) => ({
              ...provided,
              // none of react-select's styles are passed to <Control />
              border: "2px solid rgb(239, 239, 239)",
              borderRadius: "0.5rem",

              // padding: "0.25rem",
              fontFamily: "roboto",

              // minWidth: "10rem",
              // opacity: "0.7",
            }),
            placeholder: (provided) => ({
              ...provided,
              // backgroundColor: "red",
              marginLeft: "1.75rem",
              opacity: "0.7"
            }),
            input: (provided) => ({
              ...provided,
              // backgroundColor: "blue",
              backgroundImage: "url('/static/logos/bitcoin.svg')",
              backgroundRepaet: "no-repeat",
              backgroundSize: "cover",

              width: "1.25rem",
              height: "1.25rem",

              marginRight: "1rem",
            }),
            singleValue: (provided) => ({
              ...provided,
              marginLeft: "1.75rem",
            }),
          }}

          value={returnYesOrNo(pay_in_cryptocurrency)}
          onChange={e => {
            // console.log(e);
            setFieldValue("pay_in_cryptocurrency", e.value);
            // setFieldValue("category", e.value);
          }}

          options={yesOrNo}
        />
      </JobCategoryWrapper>

      <JobPostFormLabel htmlFor="howToApply" >
        How to apply
        <Required />
      </JobPostFormLabel>
      <JobPostFormInputWrapper>
        <JobPostFormTextInput
          id="howToApply"
          name="howToApply"
          type="text"

          placeholder={"Your contact email or a webpage to apply"}
          maxLength={urlMaxLength}

          onChange={handleChange}
          onBlur={handleBlur}
          value={howToApply}
        />
      </JobPostFormInputWrapper>
      <UrlOrEmailFieldErrorMessage
        formValue={howToApply}
        formError={errors.howToApply}
        formTouch={touched.howToApply}
      />

      <JobPostFormLabel htmlFor="skills" >
        Required Skills
      </JobPostFormLabel>

      <DropdownErrorMessage 
        formValue={skillInput}
        formError={errors.skills}
        // formTouch={touched.skills}
      />
      {/* Include English characters only description below. */}
      <JobPostFormInputWrapper>
        <div style={{
          marginTop: "1rem",
        }}>
          <CreatableSelect
            id="skills"
            name="skills"
            // @ts-ignore
            type="text"

            placeholder="Select a skill"
            // placeholder="Enter a skill"

            styles={{
              control: (provided) => ({
                ...provided,
                // none of react-select's styles are passed to <Control />
                ...reactSelectControlCSS,
                // opacity: "0.7",
              }),
            }}

            backspaceRemovesValue={true}
            isClearable

            inputValue={skillInput}

            onInputChange={(e) => {

              const result = skillRegex.test(e);

              if (result) {
                if (e.length <= skillMaxLength) {
                  setFieldError("skills", "");
                  setSkillinput(e);

                  // setLocalCompanyName(e);
                  // setFieldValue("name", e.slice(0, 25));
                } else {
                  setSkillinput(e.slice(0, skillMaxLength));
                }
              } else {
                setFieldError("skills", skillsValidatorError);
              }
            }}

            onChange={(e) => {
              if (e === null) {
                // alert("No value");
                // Delete a skill with this.
                if (skills.length > 0) {
                  setFieldValue("skills", skills.slice(0, (skills.length - 1)));
                }
              } else {
                if (skills.find(skill => skill.toLowerCase() === e.value.toLowerCase())) {
                  return;
                }

                setFieldValue("skills", [...skills, e.value]);
              }
              
            }}

            options={skillOptions}

            required
          />
        </div>
      </JobPostFormInputWrapper> 

      <SkillsLeftWrapper>
        {skillsLeft(5, skills.length)}
      </SkillsLeftWrapper>

      <JobPostSkillsWrapper>
        {
          skills.map((skill, index) => {
            return (
              <JobPostSkill key={skill} >
                <Chip
                  variant="outlined"
                  label={skill}
                  onDelete={(e) => {
                    e.preventDefault();

                    removeSkill(index);
                  }}
                />
              </JobPostSkill>
            );
          })
        }
      </JobPostSkillsWrapper>
    </>
  );
};

export default JobForm;