import React, { useEffect, useState }from "react";
import CreatableSelect from 'react-select/creatable';

import {
  // nameMaxLength,
  // bioMaxLength,
  profileJobMaxLength,
  salaryMaxLength,
  locationMaxLength,
  urlMaxLength,
  skillMaxLength,
  skillsValidatorError,
} from "../../../../../validators";

import useProfileInformationForm from "./useJobInformationForm";

// import { useAuth } from "../../../../../contexts/auth";

import {
  SettingsContentHeader,

  // SettingsContentDetailWrapper,

  SettingsContentDetail,
  SettingsContentDetailLabel,
  SettingsContentDetailText,

  SettingsContentInputDetaillWrapper,

  SettingsContentInputWrapper,
  SettingsContentTextInput,
  // SettingsContentTextarea,

  CharactersLeftWrapper,
  ErrorMessageWrapper,

  // SettingsContentButton,

  UpdateButtonWrapper,
  UpdateButton,
  SettingsSkill,
  SettingsSkillsWrapper,
  SkillsLeftWrapper,
  SettingsContentSkillInput,
  SettingsContentErrorDetaillWrapper,
} from "../../SettingsContentCSS";

// import { updateProfileInformation } from "../../../../../api/profile";
import { charactersLeft, skillsLeft } from "../../../../../form";
import { useAuth } from "../../../../../contexts/auth";
import { Chip } from "@material-ui/core";
// import SkillErrorMessage from "../../../../error/SkillErrorMessage";
import { skillRegex } from "../../../../../validators/regex";
import DropdownErrorMessage from "../../../../error/DropdownErrorMessage";
// import { findJobSkillListForOwner } from "../../../../../api/privateJob";
import { toLabelValue } from "../../../../../typeDefinitions/select";
import { findJobSkillListForOwner } from "../../../../../api/privateJob";
import SkillErrorMessage from "../../../../error/SkillErrorMessage";

// Extract these.

const reactSelectControlCSS = {
  border: "2px solid rgb(239, 239, 239)",
  borderRadius: "0.5rem",
  fontFamily: "roboto",
};

const UrlErrorMessage = ({
  url,
  urlError,
  urlTouch,
}) => {
  if (url && (url.length > 6) && urlError && urlTouch) {
    return (<ErrorMessageWrapper>{urlError}</ErrorMessageWrapper>);
  } else {
    return null;
  }
};

// Field can be null or string
// const charactersLeft = (maxLength: number, field?: any) => {
//   let currentLegnth;
//   if (!field) {
//     currentLegnth = 0;
//   } else {
//     currentLegnth = field.length;
//   }

//   return `${maxLength - currentLegnth} Characters left`;
// };

const Information = () => {
  const {
    // @ts-ignore
    user,
    // @ts-ignore
    setUser,
  } = useAuth();

  // console.log("user");
  // console.log(user);

  // const {
  //   username,
  // } = user;

  // Extract this later
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,

    setFieldValue,
    submitForm,

    setFieldError,
  } = useProfileInformationForm(user, setUser);

  // console.log("values");
  // console.log(values);

  const [skillInput, setSkillinput] = useState(""); // Use the function and value from formik.
  const [skillOptions, setSkillOptions] = useState([]);

  useEffect(() => {
    findJobSkillListForOwner().then(({ data }) => {
      setSkillOptions(data && data.map(skill => {
        return toLabelValue(skill);
      }));
      // setSkillOptions()
    }).catch(error => {
      console.log("error");
      console.error(error);
    });
  }, []);

  const removeSkill = (index) => {
    if ((skills.length - 1) >= index) {
      const newSkills = [...skills];
      newSkills.splice(index, 1);
      setFieldValue("skills", newSkills);
    }
  };

  // const handleTagInput = (e) => {
  //   const { value } = e.target;

  //   if (e.key === "Enter" && value && skills.length < 5) {
  //     if (skills.find(skill => skill.toLowerCase() === value.toLowerCase())) {
  //       return;
  //     }
  //     setFieldValue("skills", [...skills, value]);

  //     setSkillinput("");
  //   } else if (
  //     e.key === "Backspace" && !value && skills && skills.length > 0
  //   ) {
  //     setFieldValue("skills", skills.slice(0, (skills.length - 1)));
  //   }
  // };

  const {
    job,
    salary,
    location,

    website,
    skills,
  } = values;

  // console.log("skills");
  // console.log(skills); Array(0)

  return (
    <>
      <SettingsContentHeader >
        Information
      </SettingsContentHeader>

      <form
        style={{
          // marginBottom: "1.5rem",
          paddingBottom: "2.5rem",
          // paddingBottom: "1.5rem",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="job">
          <SettingsContentInputDetaillWrapper>
            <SettingsContentDetail>
              <SettingsContentDetailLabel>
                Job
              </SettingsContentDetailLabel>
              <SettingsContentDetailText>
                Your profession
              </SettingsContentDetailText>
            </SettingsContentDetail>
          </SettingsContentInputDetaillWrapper>
        </label>

        <SettingsContentInputWrapper>
          <SettingsContentTextInput
            id="job"
            name="job"

            placeholder={"Job(optional)"}
            maxLength={profileJobMaxLength}

            onChange={handleChange}
            onBlur={handleBlur}
            value={job}
          />
        </SettingsContentInputWrapper>

        <CharactersLeftWrapper>
          {charactersLeft(profileJobMaxLength, job)}
        </CharactersLeftWrapper>

        <label htmlFor="job">
          <SettingsContentInputDetaillWrapper>
            <SettingsContentDetail>
              <SettingsContentDetailLabel>
                Salary
              </SettingsContentDetailLabel>
              <SettingsContentDetailText>
                Your current salary or what you demand for employers
              </SettingsContentDetailText>
            </SettingsContentDetail>
          </SettingsContentInputDetaillWrapper>
        </label>

        <SettingsContentInputWrapper>
          <SettingsContentTextInput
            id="salary"
            name="salary"

            placeholder={"Salary(optional)"}
            maxLength={salaryMaxLength}

            onChange={handleChange}
            onBlur={handleBlur}
            value={salary}
          />
        </SettingsContentInputWrapper>

        <CharactersLeftWrapper>
          {charactersLeft(salaryMaxLength, salary)}
        </CharactersLeftWrapper>

        <label htmlFor="location">
          <SettingsContentInputDetaillWrapper>
            <SettingsContentDetail>
              <SettingsContentDetailLabel>
                Location
              </SettingsContentDetailLabel>
              <SettingsContentDetailText>
                Where or how you work
              </SettingsContentDetailText>
            </SettingsContentDetail>
          </SettingsContentInputDetaillWrapper>
        </label>

        <SettingsContentInputWrapper>
          <SettingsContentTextInput
            id="location"
            name="location"

            placeholder={"Location(optional)"}
            maxLength={locationMaxLength}

            onChange={handleChange}
            onBlur={handleBlur}
            value={location}
          />
        </SettingsContentInputWrapper>

        <CharactersLeftWrapper>
          {charactersLeft(locationMaxLength, location)}
        </CharactersLeftWrapper>

        <label htmlFor="website">
          <SettingsContentInputDetaillWrapper>
            <SettingsContentDetail>
              <SettingsContentDetailLabel>
                Website
              </SettingsContentDetailLabel>
              <SettingsContentDetailText>
                Your website or where you want others visit first
              </SettingsContentDetailText>
            </SettingsContentDetail>
          </SettingsContentInputDetaillWrapper>
        </label>

        <SettingsContentInputWrapper>
          <SettingsContentTextInput
            id="website"
            name="website"
            type="url"

            placeholder={"Website(optional)"}
            maxLength={urlMaxLength}

            onChange={handleChange}
            onBlur={handleBlur}
            value={website}
          />
        </SettingsContentInputWrapper>

        <UrlErrorMessage
          url={website}
          urlError={errors.website}
          urlTouch={touched.website}
        />

        {/* {errors.website && touched.website && <ErrorMessageWrapper>{errors.website}</ErrorMessageWrapper>} */}

        {/* Should include error message for url */}
        {/* <CharactersLeftWrapper>
          {charactersLeft(locationMaxLength, location)}
        </CharactersLeftWrapper> */}
        {/* <JobPostFormLabel>
          Required Skills
        </JobPostFormLabel> */}
        
        <label htmlFor="skills">
          <SettingsContentInputDetaillWrapper>
            <SettingsContentDetail>
              <SettingsContentDetailLabel>
                Your Skills
              </SettingsContentDetailLabel>
              <SettingsContentDetailText>
                They will be shown at your profile and used for other users to find you at /forhire
              </SettingsContentDetailText>
            </SettingsContentDetail>
          </SettingsContentInputDetaillWrapper>
        </label>

        <DropdownErrorMessage
          isProfile={true}
          formValue={skillInput}
          formError={errors.skills}
        />

        <SettingsContentInputWrapper>
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

              onInputChange={(inputValue) => {
                // inputValue Option<strin> - null | string
                // Type
                // This is fine here
                // console.log("onInputChage");
                // console.log(e); // e is input value

                if (skills.length >= 5) {
                  // Don't allow typing anymore when there are already 5 skills
                  return;
                }

                const result = skillRegex.test(inputValue);
                if (result) {
                  if (inputValue && inputValue.length <= skillMaxLength) {
                    setFieldError("skills", "");
                    setSkillinput(inputValue);
                  } else {
                    setSkillinput(inputValue.slice(0, skillMaxLength));
                  }
                } else {
                  setFieldError("skills", skillsValidatorError);
                }

                // setFieldValue("name", e);
              }}

              onChange={(labelValue) => {
                // Submit
                // { label: "label", value: "value"} | undefined

                if (!labelValue) {
                  return;
                }

                if (skills.length >= 5) {
                  return;
                }

                if (skills && skills.find(skill => skill.toLowerCase() === labelValue.value.toLowerCase())) {
                  return;
                }
                
                // console.log("labelValue");
                // console.log(labelValue);

                setFieldValue("skills", [...skills, labelValue.value]);

                // alert(skills);

                // if (!labelValue) {
                //   // alert("No value");
                //   // Delete a skill with this?
                //   if (skills.length < 5) {
                //     setFieldValue("skills", skills.slice(0, (skills.length - 1)));
                //   }
                // } else {

                //   setFieldValue("skills", [...skills, e.value]);
                // }

              }}

              options={skillOptions}

              required
            />
          </div>
          <SkillErrorMessage 
            formValue={skillInput}
            formError={errors.skills}
          />
          <SkillsLeftWrapper>
            {skillsLeft(5, skills.length)}
          </SkillsLeftWrapper>

          <SettingsSkillsWrapper>
            {
              // skills instanceof Array && skills.map((skill, index) => {
              skills.map((skill, index) => {
                return (
                  <SettingsSkill key={skill} >
                    <Chip
                      variant="outlined"
                      label={skill}
                      onDelete={(e) => {
                        e.preventDefault();

                        removeSkill(index);
                      }}
                    // color="secondary"
                    />
                  </SettingsSkill>
                );
              })
            }
          </SettingsSkillsWrapper>
        </SettingsContentInputWrapper>

        <UpdateButtonWrapper>
          <UpdateButton
            type="button"
            // type="button"
            onClick={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            Update
          </UpdateButton>
        </UpdateButtonWrapper>
      </form>
    </>
  );
};

export default Information;

// {/* <SettingsContentSkillInput
//   id="skills"

//   type="text"
//   placeholder="Enter a skill"
//   maxLength={skillMaxLength}

//   onChange={e => {
//     // e.preventDefault();
//     // setSkillinput(e.target.value);
//     e.preventDefault();

//     const result = skillRegex.test(e.target.value);

//     if (result) {
//       setFieldError("skills", "");
//       setSkillinput(e.target.value);
//     } else {
//       // alert(skillsValidatorError);
//       setFieldError("skills", skillsValidatorError)
//     }
//   }}
//   onKeyDown={handleTagInput}
//   value={skillInput}
// /> */}