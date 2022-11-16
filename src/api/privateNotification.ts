import {
  apiRequest,
} from "./requests";

const findNumberOfUnreadNotificationList = async () => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/notification/unread/count");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const findNotificationList = async () => {
  try {
    const { data } = await apiRequest.get("/api/v1/private/notification");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const findUnreadNotificationList = async () => {
  try {
    const { data } = await apiRequest.get("/api/v1/private/notification?read=false");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const readUnreadNotifications = async () => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/notification/unread");
    // console.log(data);

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const deleteNotification = async (values) => {
  try {
    const {
      id,
    } = values;

    let target = `/api/v1/private/notification?id=${id}`;

    const { data } = await apiRequest.delete(target);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

const readNotificationSetting = async () => {
  try {
    let target = `/api/v1/private/notification/setting`;

    const { data } = await apiRequest.get(target);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

const useNewFollowerNotification = async (use: boolean) => {
  try {
    const { data } = await apiRequest.patch(`/api/v1/private/notification/setting/new-follower?use=${use}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const useBlogPosCommentNotification = async (use: boolean) => {
  try {
    const { data } = await apiRequest.patch(`/api/v1/private/notification/setting/blog-post-comment?use=${use}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

const useBlogPostCommentResponseNotification = async (use: boolean) => {
  try {
    const { data } = await apiRequest.patch(`/api/v1/private/notification/setting/blog-post-comment-response?use=${use}`);
    return {
      data, // boolean
    };
  } catch (error) {
    // Use it only to debug.
    // console.error(error);

    return {
      error
    };
  }
};

// For notification buttons
const deleteEveryNotifications = async () => {
  try {
    let target = `/api/v1/private/notification/all`;

    const { data } = await apiRequest.delete(target);

    return {
      data,
    };
  } catch (error) {
    // Use it only to debug.
    console.error(error);

    return {
      error
    };
  }
};

export {
  findNumberOfUnreadNotificationList,

  findNotificationList,
  findUnreadNotificationList,
  readUnreadNotifications,

  deleteNotification,
  
  readNotificationSetting,
  
  useNewFollowerNotification,
  
  useBlogPosCommentNotification,
  useBlogPostCommentResponseNotification,

  deleteEveryNotifications
};