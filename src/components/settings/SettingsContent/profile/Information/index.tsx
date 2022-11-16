import React from "react";

import {
  nameMaxLength,
  bioMaxLength,
  // profileJobMaxLength,
  // salaryMaxLength,
  // locationMaxLength,
  // urlMaxLength,
} from "../../../../../validators";

import useProfileInformationForm from "./useProfileInformationForm";

// import { useAuth } from "../../../../../contexts/auth";

import {
  SettingsContentHeader,

  SettingsContentDetailWrapper,

  SettingsContentDetail,
  SettingsContentDetailLabel,
  SettingsContentDetailText,

  SettingsContentInputDetaillWrapper,

  SettingsContentInputWrapper,
  SettingsContentTextInput,
  SettingsContentTextarea,

  CharactersLeftWrapper,
  // ErrorMessageWrapper,

  // SettingsContentButton,

  UpdateButtonWrapper,
  UpdateButton,

  // SkillsLeftWrapper,
} from "../../SettingsContentCSS";

// import { updateProfileInformation } from "../../../../../api/profile";

import { charactersLeft } from "../../../../../form";
import { useAuth } from "../../../../../contexts/auth";

// Extract these.

// const UrlErrorMessage = ({
//   url,
//   urlError,
//   urlTouch,
// }) => {
//   if (url && (url.length > 6) && urlError && urlTouch) {
//     return (<ErrorMessageWrapper>{urlError}</ErrorMessageWrapper>);
//   } else {
//     return null;
//   }
// };

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

  const {
    username,
  } = user;

  // Extract this later
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    // errors,
    // touched,
  } = useProfileInformationForm(user, setUser);

  const {
    name,
    bio,

    // job,
    // salary,
    // location,

    // website,
  } = values;

  return (
    <>
      <SettingsContentHeader >
        Information
      </SettingsContentHeader>

      <form style={{
        // paddingBottom: "2.5rem",
        paddingBottom: "1.5rem",
      }} onSubmit={handleSubmit}>
        <label htmlFor="name">
          <SettingsContentDetailWrapper>
            <SettingsContentDetail>
              <SettingsContentDetailLabel>
                Name
              </SettingsContentDetailLabel>
              <SettingsContentDetailText>
                Set a display name. This does not change your username({username}).
              </SettingsContentDetailText>
            </SettingsContentDetail>
          </SettingsContentDetailWrapper>
        </label>

        <SettingsContentInputWrapper>
          <SettingsContentTextInput
            id="name"
            name="name"
            type="text"

            placeholder={"Display name(optional)"}
            maxLength={nameMaxLength}

            onChange={handleChange}
            onBlur={handleBlur}
            value={name}

            pattern="[a-zA-Z_]+"
          />
        </SettingsContentInputWrapper>

        <CharactersLeftWrapper>
          {charactersLeft(nameMaxLength, name)}
        </CharactersLeftWrapper>

        <label htmlFor="bio">
          <SettingsContentInputDetaillWrapper>
            <SettingsContentDetail>
              <SettingsContentDetailLabel>
                Bio
              </SettingsContentDetailLabel>
              <SettingsContentDetailText>
                A brief description of yourself shown on your profile
              </SettingsContentDetailText>
            </SettingsContentDetail>
          </SettingsContentInputDetaillWrapper>
        </label>

        <SettingsContentInputWrapper>
          <SettingsContentTextarea
            id="bio"
            name="bio"

            placeholder={"Bio(optional)"}
            maxLength={bioMaxLength}
            rows={4}

            onChange={handleChange}
            onBlur={handleBlur}
            value={bio}
          />
        </SettingsContentInputWrapper>

        <CharactersLeftWrapper>
          {charactersLeft(bioMaxLength, bio)}
        </CharactersLeftWrapper>

        <UpdateButtonWrapper>
          <UpdateButton type="submit" >Update</UpdateButton>
        </UpdateButtonWrapper>
      </form>
    </>
  );
};

export default Information;

// // {/* <SettingsContentDetailWrapper>
// //   <SettingsContentDetail>
// //     <SettingsContentDetailLabel>
// //       Job
// //     </SettingsContentDetailLabel>
// //     <SettingsContentDetailText>
// //       Your profession
// //     </SettingsContentDetailText>
// //   </SettingsContentDetail>
// // </SettingsContentDetailWrapper>
// // <SettingsContentDetailWrapper>
// //   <SettingsContentDetail>
// //     <SettingsContentDetailLabel>
// //       Salary Range
// //     </SettingsContentDetailLabel>
// //     <SettingsContentDetailText>
// //       What you earn
// //     </SettingsContentDetailText>
// //   </SettingsContentDetail>
// // </SettingsContentDetailWrapper>
// // <SettingsContentDetailWrapper>
// //   <SettingsContentDetail>
// //     <SettingsContentDetailLabel>
// //       Location
// //     </SettingsContentDetailLabel>
// //     <SettingsContentDetailText>
// //       Where you work
// //     </SettingsContentDetailText>
// //   </SettingsContentDetail>
// // </SettingsContentDetailWrapper> */}

// // {/* <SettingsContentDetailWrapper>
// //   <SettingsContentDetail>
// //     <SettingsContentDetailLabel>
// //       Website
// //     </SettingsContentDetailLabel>
// //     <SettingsContentDetailText>
// //       Your portfolio website
// //     </SettingsContentDetailText>
// //   </SettingsContentDetail>
// // </SettingsContentDetailWrapper>
// // <SettingsContentDetailWrapper>
// //   <SettingsContentDetail>
// //     <SettingsContentDetailLabel>
// //       GitHub
// //     </SettingsContentDetailLabel>
// //     <SettingsContentDetailText>
// //       Your GitHub username
// //     </SettingsContentDetailText>
// //   </SettingsContentDetail>
// // </SettingsContentDetailWrapper>
// // <SettingsContentDetailWrapper>
// //   <SettingsContentDetail>
// //     <SettingsContentDetailLabel>
// //       LinkedIn
// //     </SettingsContentDetailLabel>
// //     <SettingsContentDetailText>
// //       Your LinkedIn account
// //     </SettingsContentDetailText>
// //   </SettingsContentDetail>
// // </SettingsContentDetailWrapper>  */}