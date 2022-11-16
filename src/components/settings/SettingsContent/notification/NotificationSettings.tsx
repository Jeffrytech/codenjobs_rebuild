import { useEffect, useState } from "react";

import FollowerPerferences from "./FollowerPreferences";
import CommentPreferences from "./CommentPreferences";
import { readNotificationSetting } from "../../../../api/privateNotification";

const NotificationSettings = () => {
  const [notificationSetting, setNotificationSetting] = useState({
    newFollower: true,
    blogPostComment: true,
    blogPostCommentResponse: true,
  });

  const {
    newFollower,
    blogPostComment,
    blogPostCommentResponse,
  } = notificationSetting;

  const findNotificationSetting = async () => {
    try {
      const { data, error } = await readNotificationSetting();

      if (error) {
        console.log("readNotificationSetting error");
        console.log(error);

        return;
      }

      // console.log("data");
      // console.log(data);

      const {
        new_follower,
        blog_post_comment,
        blog_post_comment_response,
      } = data;

      setNotificationSetting({
        newFollower: new_follower,
        blogPostComment: blog_post_comment,
        blogPostCommentResponse: blog_post_comment_response,
      });
    } catch (error ){
      console.log("readNotificationSetting catch error");
      console.error(error);
    }
  };

  useEffect(() => {
    findNotificationSetting();
  }, []);

  return <>
    <FollowerPerferences 
      setNotificationSetting={setNotificationSetting}
      newFollower={newFollower}
    />
    <CommentPreferences 
      setNotificationSetting={setNotificationSetting}
      blogPostComment={blogPostComment}
      blogPostCommentResponse={blogPostCommentResponse}
    />
  </>;
};

export default NotificationSettings;

