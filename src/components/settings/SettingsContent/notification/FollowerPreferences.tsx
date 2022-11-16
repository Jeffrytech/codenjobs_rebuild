
// This should be protected.

// Refer to these.
// https://github.com/settings/profile
// https://www.reddit.com/settings/profile

import React, { useState } from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import {
  SettingsContentPreferencesHeader,
  // SettingsContentHeader,
  
  SettingsContentPreferencesDetailWrapper,
  // SettingsContentDetailWrapper,
  
  SettingsContentDetail,
  SettingsContentDetailLabel,
  
  SettingsContentDetailText,
  SettingsContentButton,
  // SettingsContentDeleteButton,
} from "../SettingsContentCSS";
import { useNewFollowerNotification } from "../../../../api/privateNotification";
// import { allowMessage, updateNewsletterSubscription } from "../../../../api/privateUser";

const FollowerPreferences = ({
  setNotificationSetting,
  newFollower,
}) => {

  const handleNewFollower = async (e) => {
    e.preventDefault();
    // Include api request here
    const { data, error } = await useNewFollowerNotification(!newFollower);

    if (error) {
      console.log("useNewFollowerNotification error");
      console.error(error);

      return;
    }

    if (data) {
      setNotificationSetting(notificationSetting => {
        return {
          ...notificationSetting,
          newFollower: !newFollower,
        };
      });
    }
  };

  return (
    <>
      <SettingsContentPreferencesHeader>Follower</SettingsContentPreferencesHeader>

      <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Do you want a notification when you have a new follower?
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {newFollower ? "We will send you a notification for this" : "We will not send any notification for this"}
          </SettingsContentDetailText>
        </SettingsContentDetail>
        {/* Include it later if necessary */}
        <div style={{
          marginRight: "0.25rem",
        }}>
          <FormControlLabel
            control={
              <Switch
                style={{
                  color: newFollower ? "rgb(17, 160, 245)" : "#efefef",
                }}
                checked={newFollower}
                onChange={handleNewFollower}
                color="primary"
              />
            }
            label={newFollower ? "Yes" : "No"}
          />
        </div>
      </SettingsContentPreferencesDetailWrapper>
    </>
  );
};

export default FollowerPreferences;