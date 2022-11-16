
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
import { useBlogPosCommentNotification, useBlogPostCommentResponseNotification } from "../../../../api/privateNotification";

const CommentPreferences = ({
  setNotificationSetting,
  blogPostComment,
  blogPostCommentResponse,
}) => {
  const handleBlogPostComment = async (e) => {
    e.preventDefault();
    // Include api request here
    const { data, error } = await useBlogPosCommentNotification(!blogPostComment);

    if (error) {
      console.log("useBlogPosCommentNotification error");
      console.error(error);

      return;
    }

    if (data) {
      setNotificationSetting(notificationSetting => {
        return {
          ...notificationSetting,
          blogPostComment: !blogPostComment,
        };
      });
    }
  };

  const handleBlogPostCommentResponse = async (e) => {
    e.preventDefault();
    // Include api request here
    const { data, error } = await useBlogPostCommentResponseNotification(!blogPostCommentResponse);

    if (error) {
      console.log("useBlogPostCommentResponseNotification error");
      console.error(error);

      return;
    }

    if (data) {
      setNotificationSetting(notificationSetting => {
        return {
          ...notificationSetting,
          blogPostCommentResponse: !blogPostCommentResponse,
        };
      });
    }
  };

  return (
    <>
      <SettingsContentPreferencesHeader>Comment</SettingsContentPreferencesHeader>

      <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Do you want a notification when a user comment on your post
            {/* Do you want to receive email notifications? */}
            {/* Who can send you a chat or private message? */}
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {/* The chat will be included later */}
            {blogPostComment ? "We will send you a notification for this" : "We will not send any notification for this"}
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
                  color: blogPostComment ? "rgb(17, 160, 245)" : "#efefef",
                }}
                checked={blogPostComment}
                onChange={handleBlogPostComment}
                color="primary"
              />
            }
            label={blogPostComment ? "Yes" : "No"}
          />
        </div>
      </SettingsContentPreferencesDetailWrapper>
      
      <SettingsContentPreferencesDetailWrapper>
        <SettingsContentDetail>
          <SettingsContentDetailLabel>
            Do you want a notification when a user respond to your comment
            {/* Do you want to receive email notifications? */}
            {/* Who can send you a chat or private message? */}
          </SettingsContentDetailLabel>
          <SettingsContentDetailText>
            {/* The chat will be included later */}
            {blogPostCommentResponse ? "We will send you a notification for this" : "We will not send any notification for this"}
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
                  color: blogPostCommentResponse ? "rgb(17, 160, 245)" : "#efefef",
                }}
                checked={blogPostCommentResponse}
                onChange={handleBlogPostCommentResponse}
                color="primary"
              />
            }
            label={blogPostCommentResponse ? "Yes" : "No"}
          />
        </div>
      </SettingsContentPreferencesDetailWrapper>
    </>
  );
};

export default CommentPreferences;