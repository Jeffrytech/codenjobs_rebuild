import React from "react";

import {
  SettingsContentHeader,

  SettingsContentDetailWrapper,

  SettingsContentDetail,
  SettingsContentDetailLabel,

  SettingsContentDetailText,
  SettingsContentDeleteButton,
} from "../SettingsContentCSS";

import RemoveUser from "./RemoveUser";

const Delete = ({
  removeUser,
  setRemoveUser,
}) => {
  return (
    <>
      <SettingsContentHeader style={{
        marginTop: "1rem",
      }}>
        Delete
      </SettingsContentHeader>
      <SettingsContentDetailWrapper style={{
        marginBottom: "1rem",
      }}>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Remove your account
            {/* Remove your account */}
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            It will be removed after confirmation
          </SettingsContentDetailText>
        </SettingsContentDetail>

        <SettingsContentDeleteButton onClick={() => {
          setRemoveUser(true);
        }}>
          Delete
        </SettingsContentDeleteButton>

        <RemoveUser
          removeUser={removeUser}
          setRemoveUser={setRemoveUser}
        />
      </SettingsContentDetailWrapper>
    </>
  );
};

export default Delete;