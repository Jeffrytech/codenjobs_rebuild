// https://github.com/settings/profile
// https://www.reddit.com/settings/profile

import React from "react";

import {
  SettingsContentPreferencesHeader,

  SettingsContentPreferencesDetailWrapper,

  SettingsContentDetail,
  SettingsContentDetailLabel,

  SettingsContentDetailText,
  SettingsContentButton,
} from "../SettingsContentCSS";

import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";

const Preferences = ({
  email,

  changeEmail,
  setChangeEmail,

  changePassword,
  setChangePassword,
  
  removeUser,
}) => {
  return (
    <>
      <SettingsContentPreferencesHeader>Preferences</SettingsContentPreferencesHeader>
      <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Email
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {email}
          </SettingsContentDetailText>
        </SettingsContentDetail>
        {/* Include it later if necessary */}
        <SettingsContentButton onClick={() => {
          setChangeEmail(true);
        }}>
          Change
        </SettingsContentButton>
        {!removeUser && <ChangeEmail
          email={email}
          changeEmail={changeEmail}
          setChangeEmail={setChangeEmail}
        />}
      </SettingsContentPreferencesDetailWrapper>
      <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Change password
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            Password must be at least 6 characters long
          </SettingsContentDetailText>
        </SettingsContentDetail>

        <SettingsContentButton onClick={() => {
          setChangePassword(true);
        }} >
          Change
        </SettingsContentButton>
        {!removeUser && <ChangePassword
          changePassword={changePassword}
          setChangePassword={setChangePassword}
        />}
      </SettingsContentPreferencesDetailWrapper>
    </>
  );
};

export default Preferences;