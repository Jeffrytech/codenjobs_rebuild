import {
  apiRequest,
} from "./requests";

import DOMPurify from "dompurify";

// Form
const sendPrivateMessage = async (values) => {
  try {
    const {
      to,
      subject,
      text,
    } = values;

    const { data } = await apiRequest.post("/api/v1/private/message", {
      to,
      subject,
      text: DOMPurify.sanitize(text),
    });
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

// Inbox
const findNumberOfUnreadInboxMessages = async () => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/message/inbox/unread/count");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const findInboxMessageList = async () => {
  try {
    const { data } = await apiRequest.get("/api/v1/private/message/inbox/message/list");

    return {
      data,
    };
  } catch (error) {
    return {
      error
    };
  }
};

const findUnreadMessageList = async () => {
  try {
    const { data } = await apiRequest.get("/api/v1/private/message/inbox/message/list?read=false");
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

// It also read responses
// Should organize
const readUnreadMessages = async () => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/message/inbox/unread");
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

// Sent
const findMessageListSent = async () => {
  try {
    const { data } = await apiRequest.get("/api/v1/private/message/sent/list");
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

const deleteInboxMessage = async (id: string) => {
  try {
    const { data } = await apiRequest.delete(`/api/v1/private/message/inbox?id=${id}`);
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

// find_message_response_ids_by_message_id
const findMessageResponseIdsByMessageId = async (id: string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/message/response_ids?id=${id}`);

    return {
      data, // [message_response_id]
    };
  } catch (error) {
    return {
      error
    };
  }
};

const findMessagesWithTheirResponses = async () => {
  try {
    const { data } = await apiRequest.post("/api/v1/private/message/messages/list");

    return {
      data, // [messages_with_their_responses]
    };
  } catch (error) {
    return {
      error
    };
  }
};

const findMessageWithItsResponses = async (id : string) => {
  try {
    const { data } = await apiRequest.post(`/api/v1/private/message/messages?id=${id}`);

    return {
      data, // Option[message_with_its_response]
    };
  } catch (error) {
    return {
      error
    };
  }
};

export {
  sendPrivateMessage,

  findNumberOfUnreadInboxMessages,
  findInboxMessageList,
  
  findUnreadMessageList,
  readUnreadMessages,

  findMessageListSent,

  deleteInboxMessage,

  findMessageResponseIdsByMessageId,
  findMessagesWithTheirResponses,
  findMessageWithItsResponses,
};