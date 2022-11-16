
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
import { allowMessage, updateNewsletterSubscription } from "../../../../api/privateUser";
// import { allowMessage, updateNewsletterSubscription } from "../../../../api/privateUser";

const Preferences = ({
  allow_message,
  newsletter_subscription,
}) => {
  // Should set default data from the database
  const [chatPermission, setChatPermission] = useState(allow_message);
  const [newsletterSubscription, setNewsletterSubscription] = useState(newsletter_subscription);

  const handleChatPermission = async (e) => {
    e.preventDefault();
    // Include api request here
    const { data, error } = await allowMessage(!chatPermission);

    if (data) {
      setChatPermission(!chatPermission);
    }

    if (error) {
      console.log("error");
      console.error(error);
    }
  };

  const handleNewsletterSubscription = async (e) => {
    e.preventDefault();
    // Include api request here
    const { data, error } = await updateNewsletterSubscription(!newsletterSubscription);

    if (data) {
      setNewsletterSubscription(!newsletterSubscription);
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
            Who can send you a new message?
            {/* Who can send you a new message? */}
            {/* Who can send you a chat or private message? */}
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {/* The chat will be included later */}
            {chatPermission ? "Everyone or Nobody" : "You can't send a new message also but will receive responses from your previous chats"}
            {/* {chatPermission ? "Everyone or Nobody" : "You can't send a new message also but will receive responses"} */}
            {/* {chatPermission ? "Everyone or Nobody" : "You will still receive responses and can't send a new message also"} */}
            {/* {chatPermission ? "Everyone or Nobody" : "You will still receive responses"} */}
            {/* {chatPermission ? "Everyone or Nobody" : "You will still receive responses if there were any message"} */}
          </SettingsContentDetailText>
        </SettingsContentDetail>
        {/* Include it later if necessary */}
        <SettingsContentButton
          // @ts-ignore
          $color={chatPermission === false && "#ff1676"}
          onClick={handleChatPermission}
        >
          {chatPermission ? "Everyone" : "Nobody"}
        </SettingsContentButton>
      </SettingsContentPreferencesDetailWrapper>

      <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Email notifications
            {/* Do you want to receive email notifications? */}
            {/* Who can send you a chat or private message? */}
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {/* The chat will be included later */}
            {newsletterSubscription ? "We will send you emails" : "We will still send account relevant emails"}
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
                  color: newsletterSubscription ? "rgb(17, 160, 245)" : "#efefef",
                }}
                checked={newsletterSubscription}
                onChange={handleNewsletterSubscription}
                color="primary"
              />
            }
            label={newsletterSubscription ? "Yes" : "No"}
          />
          {/* <Switch
            style={{
              color: newsletterSubscription ? "rgb(17, 160, 245)" : "#efefef",
            }}
            checked={newsletterSubscription}
            onChange={handleNewsletterSubscription}
            color="primary"
          /> */}
        </div>
      </SettingsContentPreferencesDetailWrapper>
    </>
  );
};

export default Preferences;

// <SettingsContentPreferencesDetailWrapper>
//   <SettingsContentDetail>
//     <SettingsContentDetailLabel>
//       Do you want to receive our email notificaitons?
//             {/* Who can send you a chat or private message? */}
//     </SettingsContentDetailLabel>
//     <SettingsContentDetailText>
//       {/* The chat will be included later */}
//             We will still send you account relevant emails.
//           </SettingsContentDetailText>
//   </SettingsContentDetail>
//   {/* Include it later if necessary */}
//   <SettingsContentButton
//     // @ts-ignore
//     $color={newsletterSubscription === false && "#ff1676"}
//     onClick={handleNewsletterSubscription}
//   >
//     {newsletterSubscription ? "Subscribe" : "Unsubscribe"}
//   </SettingsContentButton>
// </SettingsContentPreferencesDetailWrapper>