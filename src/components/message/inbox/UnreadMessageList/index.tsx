import React, { useState, useEffect } from "react";
// import { unmountComponentAtNode } from "react-dom";
// import ReactMarkdown from "react-markdown";

// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import Link from "next/link";
// import { useRouter } from "next/router";

import Username from "../../../Username";

// import Favico from "favico.js-slevomat";

import moment from "moment";

import CancelIcon from "@material-ui/icons/Cancel";
import { Tooltip } from "@material-ui/core";

import {
  MessageContentContainer,

  NoMessage,
  // MessageListWrapper,

  MessageListCardContainer,

  MessageFromContainer,
  MessageFromWrapper,

  MessageFrom,
  MessageSubject,

  ExcludeButtonWrapper,
  RefeshButtonContainer,
  MessageText,
} from "../../MessageListCSS";

import messageFromResponse from "../formatResponseForInbox";
// import markdownRenderes from "../../markdownRenderers";
import MessageResponseForm from "../../MessageResponseForm";

import {
  deleteInboxMessage,

  findUnreadMessageList,

  readUnreadMessages,
} from "../../../../api/privateMessage";

import {
  deleteMessageResponse,
  findUnreadMessageResponseList,
} from "../../../../api/privateMessageResponse";
import { Refresh } from "@material-ui/icons";

// import { useAuth } from "../../../../../contexts/auth";

const UnreadMessageList = ({
  username,
}) => {
  // const router = useRouter();
  // // console.log("user");
  // // console.log(user);

  // const {
  //   // @ts-ignore
  //   user,
  // } = useAuth();

  // if (!user) {
  //   router.push("/signin");
  //   return null;
  // }

  // const {
  //   username,
  // } = user;

  const [unreadMessageList, setUnreadMessageList] = useState(null);

  // const handleExcludeMessageButtonClick = async (e, id) => {
  const handleExcludeButtonClick = async (e, id, message_response_id) => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    const confirmed = confirm("Do you really want to exclude it?");
    // const confirmed = confirm(message_response_id ? "Do you really want to exclude it?" : "It will remove all messages from you and the other user also if there were any. Do you really want to exclude it?");
    // const confirmed = confirm(message_response_id ? "Do you really want to exclude it?" : "It will remove all responses from you and recipient also if there were any. Do you really want to exclude it?");

    if (confirmed) {
      if (message_response_id) {
        const {
          data: removed,
          error,
        } = await deleteMessageResponse(message_response_id);

        if (removed === true) {
          setUnreadMessageList(unreadMessageList.filter((unreadMessage) => {
            return (unreadMessage.message_response_id !== message_response_id);
          }));
        }

        if (removed === false) {
          // Should handle this better
          // eslint-disable-next-line no-undef
          alert("Couldn't exclude the response");
        }

        if (error) {
          // Should handle this better
          // eslint-disable-next-line no-undef
          alert("Couldn't exclude the response");

          console.log(error);
          console.error(error);
        }
      } else {
        const {
          data: removed,
          error,
        } = await deleteInboxMessage(id);

        if (removed === true) {
          setUnreadMessageList(unreadMessageList.filter((unreadMessage) => {
            return (unreadMessage.id !== id);
          }));
        }

        if (removed === false) {
          // Should handle this better
          // eslint-disable-next-line no-undef
          alert("Couldn't exclude the message");
        }

        if (error) {
          // Should handle this better
          // eslint-disable-next-line no-undef
          alert("Couldn't exclude the message");

          console.log(error);
          console.error(error);
        }
      }
    }
  };

  useEffect(() => {
    Promise.all([findUnreadMessageList(), findUnreadMessageResponseList()])
      .then(data => {
        const [unreadMessages, unreadMessageResponses] = data;

        const formattedUnreadMessageResponses = unreadMessageResponses.data.map(unreadMessageResponse => {
          return messageFromResponse(unreadMessageResponse);
        });

        const latestMessages = [...unreadMessages.data, ...formattedUnreadMessageResponses].sort((x, y) => {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          // @ts-ignore
          return (new Date(y.created_at) - new Date(x.created_at));
        });

        setUnreadMessageList(latestMessages);

        // It also unread message responses, should separate them.
        readUnreadMessages();
      }).catch(error => {
        console.log("error");
        console.error(error);
      });
  }, []);

  if (unreadMessageList === null) {
    return null; // No server side data yet
  }

  if (unreadMessageList.length === 0) {
    // return <NoMessage>
    //   {"You don't have any unread message."}
    // </NoMessage>;

    return (<div style={{
      display: "flex",
      alignItems: "center",
    }} >
      <NoMessage>
        {"You don't have any unread message."}
      </NoMessage>
      {/* <RefeshButtonContainer>
        <Refresh onClick={() => {
          window.location.reload();
        }} />
      </RefeshButtonContainer> */}
    </div>);
  }

  return (
    // <MessageListWrapper>
    <>
      {unreadMessageList.map(({
        id, // message_id
        from,
        subject,
        created_at,
        text,

        message_response_id,
      }, index) => {
        // const [showRespondInput, setShowRespondInput] = useState(false);
        const isFromSelf = (from === username);
        const background = (index % 2) === 0 ? "white" : "#efefef";

        // alert(subject);

        return (
          <MessageListCardContainer id={id} key={id}>
            <section style={{
              padding: "1rem",
              background,
            }}>
              <div style={{
                display: "flex",
                marginBottom: "0.25rem",
                fontSize: "0.85rem",
                // opacity: "0.7"
              }}>
                <span style={{
                  opacity: 0.7,
                }}>
                  {moment.utc(created_at).fromNow()}
                </span>
                <Tooltip title="Exclude the message" arrow>
                  <ExcludeButtonWrapper
                    onClick={(e) => {
                      handleExcludeButtonClick(e, id, message_response_id);
                    }}
                  >
                    <CancelIcon style={{
                      fontSize: "1.25rem",
                    }} />
                  </ExcludeButtonWrapper>
                </Tooltip>
              </div>
              <MessageFromContainer>
                <MessageFromWrapper>
                  <span style={{
                    marginRight: "0.25rem",
                  }}>From</span> {
                    // <Link href={`/user/${from}`} ><MessageFrom>{!isFromSelf ? `/u/${from}` : "you"}</MessageFrom></Link>
                    <Link href={`/user/${from}`} >
                      <MessageFrom>
                        <Username username={from} color={"rgb(17, 160, 245)"} />
                      </MessageFrom>
                    </Link>
                    // <Link href={`/user/${from}`} ><MessageFrom>{`/u/${from}`}</MessageFrom></Link>
                  } {
                    // moment(created_at).fromNow()
                    // moment.utc(created_at).fromNow()
                  }
                </MessageFromWrapper>
                {/* <Tooltip title="Exclude the message" arrow>
                  <ExcludeButtonWrapper
                    onClick={(e) => {
                      handleExcludeButtonClick(e, id, message_response_id);
                    }}
                  >
                    <CancelIcon style={{
                      fontSize: "1.25rem",
                    }} />
                  </ExcludeButtonWrapper>
                </Tooltip> */}
              </MessageFromContainer>
              <MessageSubject>{subject}</MessageSubject>
              <MessageText>
                {text}
              </MessageText>
              <MessageResponseForm
                from={from}
                isFromSelf={isFromSelf}
                messageId={id}

                // Unread or all
                messageList={unreadMessageList}
                setMessageList={setUnreadMessageList}

                subject={message_response_id ? `re: ${subject}` : subject}
                responseSubject={message_response_id ? `${subject}` : `re: ${subject}`}
                background={background}

              />
            </section>
          </MessageListCardContainer>
        );
      })}
    </>
    // </MessageListWrapper>
  );
};

const Index = ({
  user,
}) => {
  if (!user) {
    window.location.href = "/signin";
    // router.push("/signin");
    return null;
  }

  const {
    username
  } = user;

  return (
    <MessageContentContainer>
      <UnreadMessageList username={username} />
    </MessageContentContainer>
  );
};

export default Index;

// {/* <ReactMarkdown renderers={markdownRenderes}>
//                 {text}
//               </ReactMarkdown> */}