
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
  UpdateButtonWrapper,
  UpdateButton,
  // SettingsContentButton,
  // SettingsContentDeleteButton,
} from "../SettingsContentCSS";

import { updateForHire, updateUseCryptocurrency } from "../../../../api/privateProfile";

const Preferences = ({
  // allow_message,
  for_hire,
  use_cryptocurrency,

  job_types,
}) => {
  // Should set default data from the database
  // const [chatPermission, setChatPermission] = useState(allow_message);
  const [forHire, setForHire] = useState(for_hire);
  const [useCryptocurrency, setUseCryptocurrency] = useState(use_cryptocurrency);

  // alert(forHire);

  const handleHireable = async (e) => {
    e.preventDefault();
    // Include api request here
    const { data, error } = await updateForHire(!forHire);

    // alert(data);

    if (data) {
      setForHire(!forHire);
    }

    if (error) {
      console.log("error");
      console.error(error);
    }
  };

  const handleUseCryptocurrency = async (e) => {
    e.preventDefault();
    // Include api request here
    const { data, error } = await updateUseCryptocurrency(!useCryptocurrency);

    // alert(data);

    if (data) {
      setUseCryptocurrency(!useCryptocurrency);
    }

    if (error) {
      console.log("error");
      console.error(error);
    }
  };

  return (
    <>
      <SettingsContentPreferencesHeader>Preferences</SettingsContentPreferencesHeader>
      
      <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Do you search for a job?
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {forHire ? "Others can find you at /forhire" : "Others can't find you at /forhire"}
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
                  color: forHire ? "rgb(17, 160, 245)" : "#efefef",
                }}
                checked={forHire}
                onChange={handleHireable}
                color="primary"
              />
            }
            label={forHire ? "Yes" : "No"}
          />
        </div>
      </SettingsContentPreferencesDetailWrapper>

      <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Do you pay or accept cryptocurrency?
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {"Others can see it at your profile and other lists"}
            {/* {forHire ? "Other users can find you at /forhire" : "Other users can't find you at /forhire"} */}
            {/* {use_cryptocurrency ? "Other users can find you at /forhire" : "Other users can't find you at /forhire"} */}
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
                  color: useCryptocurrency ? "rgb(17, 160, 245)" : "#efefef",
                }}
                checked={useCryptocurrency}
                onChange={handleUseCryptocurrency}
                color="primary"
              />
            }
            label={useCryptocurrency ? "Yes" : "No"}
          />
        </div>
      </SettingsContentPreferencesDetailWrapper>

      {/* <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            What are your skills?
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {"It will be shown at your profile"}
          </SettingsContentDetailText>
        </SettingsContentDetail>
        <div style={{
          marginRight: "0.25rem",
        }}>
          <FormControlLabel
            control={
              <Switch
                style={{
                  color: localHireable ? "rgb(17, 160, 245)" : "#efefef",
                }}
                checked={localHireable}
                onChange={handleHireable}
                color="primary"
              />
            }
            label={localHireable ? "Yes" : "No"}
          />
        </div>
      </SettingsContentPreferencesDetailWrapper> */}
    </>
  );
};

export default Preferences;