import React, { useState, useEffect } from "react";
// import { unmountComponentAtNode } from "react-dom";
// import ReactMarkdown from "react-markdown";

// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import Link from "next/link";
import { useRouter } from "next/router";

import moment from "moment";

import CancelIcon from "@material-ui/icons/Cancel";
import { Tooltip } from "@material-ui/core";

// import ReactPaginate from "react-paginate";

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
  // Permalink,
} from "../MessageListCSS";

// import markdownRenderes from "../../markdownRenderers";
import MessageResponseForm from "../MessageResponseForm";
import messageFromResponse from "./formatResponseForInbox";

import {
  deleteInboxMessage,

  findInboxMessageList,

  findMessageResponseIdsByMessageId,
} from "../../../api/privateMessage";

import {
  deleteMessageResponse,
  findMessageResponseList,
} from "../../../api/privateMessageResponse";
import Username from "../../Username";
import { ListPaginationButtonsContainer, ListPaginationNextButton, ListPaginationPrevButton } from "../../job/ListPagination/ListPaginationCSS";
import { Refresh } from "@material-ui/icons";
import { scrollToTop } from "../../../browser/scroll";

const MessageList = ({
  username,
  page,
}) => {
  // alert(page);

  const router = useRouter();

  const messagePerPage = 5;
  const [totalPage, setTotalPage] = useState(0);
  // const totalPage = Math.ceil()

  // this.state = {
  //   offset: 0,
  //   data: [],
  //   perPage: 5,
  //   currentPage: 0
  // };

  const [inboxMessageList, setInboxMessageList] = useState(null);

  // const [showMessageResponseForm, setShowMessageResponseForm] = useState(false);

  // const handleExcludeMessageButtonClick = async (e, id) => {
  const handleExcludeButtonClick = async (e, inboxMessageList, message_id, message_response_id) => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    const confirmed = confirm(message_response_id ? "Do you really want to exclude it?" : "It will remove all messages from you and the other user also if there were any. Do you really want to exclude it?");
    // const confirmed = confirm(message_response_id ? "Do you really want to exclude it?" : "It will remove all responses from you and recipient also if there were any. Do you really want to exclude it?");

    // const { data, error } = await findMessageResponseIdsByMessageId(message_id);

    try {
      if (confirmed) {
        if (message_response_id) {
          const {
            data: removed,
            error,
          } = await deleteMessageResponse(message_response_id);

          if (removed === true) {
            if (inboxMessageList?.length === 1) {
              // When there is only one message left, reload becuase of the pagination
              window.location.reload();
            }

            setInboxMessageList(inboxMessageList.filter((inboxMessage) => {
              return (inboxMessage.message_response_id !== message_response_id);
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
          } = await deleteInboxMessage(message_id);

          if (removed === true) {
            const { data, error } = await findMessageResponseIdsByMessageId(message_id);
            // console.log(data);
            // ["d4e1397b-471b-423e-ae67-76ab5d3d6184", "b16565a2-f548-4b7d-b780-8da669dc82d6"]

            console.error("error");
            console.error(error);

            setInboxMessageList(inboxMessageList.filter((inboxMessage) => {
              if (data && data.length > 0 && !data.includes(inboxMessage.message_id)) {
                return true;
              }

              if (inboxMessage.id !== message_id) {
                return true;
              }

              return false;
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
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  useEffect(() => {
    Promise.all([findInboxMessageList(), findMessageResponseList()])
      .then(data => {
        const [inboxMessages, messageResponses] = data;

        const formattedMessageResponses = messageResponses.data.map(messageResponse => {
          return messageFromResponse(messageResponse);
        });

        // Extract this?
        const latestMessages = [...inboxMessages.data, ...formattedMessageResponses].sort((x, y) => {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          // @ts-ignore
          return (new Date(y.created_at) - new Date(x.created_at));
        });

        const totalPage = Math.ceil(latestMessages.length / messagePerPage);
        setTotalPage(totalPage);

        if (page === 1) {
          const start = 0;
          const end = messagePerPage;

          setInboxMessageList(latestMessages.slice(start, end));
        } else {
          const start = (page - 1) * messagePerPage;
          const end = start + messagePerPage;

          setInboxMessageList(latestMessages.slice(start, end));
        }

        // It also unread message responses, should separate them.
        // readUnreadMessages();
      }).catch(error => {
        console.log("error");
        console.error(error);
      });
  }, [page]);

  // useEffect(() => {
  //   Promise.all([findInboxMessageList(), findMessageResponseList()])
  //     .then(data => {
  //       const [inboxMessages, messageResponses] = data;

  //       const formattedMessageResponses = messageResponses.data.map(messageResponse => {
  //         return messageFromResponse(messageResponse);
  //       });

  //       // Extract this?
  //       const latestMessages = [...inboxMessages.data, ...formattedMessageResponses].sort((x, y) => {
  //         // Turn your strings into dates, and then subtract them
  //         // to get a value that is either negative, positive, or zero.
  //         // @ts-ignore
  //         return (new Date(y.created_at) - new Date(x.created_at));
  //       });

  //       setInboxMessageList(latestMessages);

  //       // It also unread message responses, should separate them.
  //       // readUnreadMessages();
  //     }).catch(error => {
  //       console.log("error");
  //       console.error(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (inboxMessageList !== null) {
  //     if (page === "0") {
  //       const start = 0;
  //       const end = messagePerPage;

  //       setInboxMessageList(inboxMessageList.slice(start, end));
  //     } else {
  //       alert(page);
  //       const start = page * messagePerPage;
  //       const end = start + messagePerPage;

  //       console.log(inboxMessageList.slice(start, end));

  //       setInboxMessageList(inboxMessageList.slice(start, end));
  //     }
  //   }
  // }, page);

  if (inboxMessageList === null) {
    return null; // No server side data yet
  }

  if (inboxMessageList.length === 0) {
    // if (page === 1) {
    //   return <NoMessage>
    //     {"You don't have any message from others."}
    //   </NoMessage>;
    // }

    // if (page !== 1) {
    //   return <NoMessage>
    //     {"You don't have any message from others in this page."}
    //   </NoMessage>;
    // }

    // if (page !== 1) {
    return <div style={{
      display: "flex",
      alignItems: "center",
    }} >
      <NoMessage>
        {"You don't have any message here."}
      </NoMessage>
      {/* <RefeshButtonContainer>
        <Refresh onClick={() => {
          window.location.reload();
        }}/>
      </RefeshButtonContainer> */}
    </div>;
    // }
  }

  return (
    // <MessageListWrapper>
    <>
      {inboxMessageList.map(({
        id: message_id,
        from,
        subject,
        created_at,
        text,

        message_response_id, // If this exists, it is response;
      }, index) => {
        const isFromSelf = (from === username);
        // const [showRespondInput, setShowRespondInput] = useState(false);

        const background = (index % 2) === 0 ? "white" : "#efefef";

        return (
          <MessageListCardContainer id={message_id} key={message_response_id || message_id} >
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
                      handleExcludeButtonClick(e, inboxMessageList, message_id, message_response_id);
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
                  {/* Use from instead of to */}
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
                      handleExcludeButtonClick(e, message_id, message_response_id);
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
                messageId={message_id}

                messageList={inboxMessageList}
                setMessageList={setInboxMessageList}

                subject={message_response_id ? `re: ${subject}` : subject}
                responseSubject={message_response_id ? `${subject}` : `re: ${subject}`}
                
                // subject={message_response_id ? `re: ${subject}` : subject}
                background={background}
              />
            </section>
          </MessageListCardContainer>
        );
      })}

      {/* Extract CSS here and make it to component */}
      {inboxMessageList && totalPage > 1 && <ListPaginationButtonsContainer>
        {/* Shouldn't show when no index */}
        {page !== 1 && <ListPaginationPrevButton
          onClick={(e) => {
            e.preventDefault();
            
            // router.push();
            const prevPage = page - 1;

            router.push(`/message/inbox?page=${prevPage}`);
            scrollToTop();
          }}
        >
          Prev
        </ListPaginationPrevButton>}
        {page !== totalPage && <ListPaginationNextButton
          onClick={(e) => {
            e.preventDefault();

            const nextPage = page + 1;

            router.push(`/message/inbox?page=${nextPage}`);
            scrollToTop();
          }}
        >
          Next
        </ListPaginationNextButton>}
      </ListPaginationButtonsContainer>}

    </>
    // </MessageListWrapper>
  );
};

const Index = ({
  user,
  page,
}) => {
  if (!user) {
    // router.replace("/signin");
    return null;
  }

  const {
    username
  } = user;

  return (
    <MessageContentContainer>
      <MessageList username={username} page={page} />
    </MessageContentContainer>
  );
};

export default Index;

// {/* <ReactMarkdown renderers={markdownRenderes}>
//                 {text}
//               </ReactMarkdown> */}