import {
  apiRequest,
} from "./requests";

import DOMPurify from "dompurify";

const sendPrivateMessageResponse = async (messageId: string, text: string) => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/message/response", {
      message_id: messageId,
      text: DOMPurify.sanitize(text),
    });
    // console.log(data);

    return {
      data, // response
    };
  } catch (error) {
    return {
      error
    };
  }
};

const findMessageResponseListSent = async () => {
  try {
    const { data } = await apiRequest.get("/api/v1/private/message/response/sent");
    // console.log(data);

    return {
      data, // removed
    };
  } catch (error) {
    return {
      error
    };
  }
};

const findMessageResponseList = async () => {
  try {
    const { data } = await apiRequest.get("/api/v1/private/message/inbox/response/list");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const findUnreadMessageResponseList = async () => {
  try {
    const { data } = await apiRequest.get("/api/v1/private/message/inbox/response/list?read=false");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const deleteMessageResponse = async (id: string) => {
  try {
    const { data } = await apiRequest.delete(`/api/v1/private/message/response?id=${id}`);
    // console.log(data);

    return {
      data, // removed
    };
  } catch (error) {
    return {
      error
    };
  }
};

export {
  sendPrivateMessageResponse,
  findMessageResponseListSent,

  findMessageResponseList,
  findUnreadMessageResponseList,

  deleteMessageResponse,
};