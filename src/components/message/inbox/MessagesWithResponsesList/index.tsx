import React, { useState, useEffect } from "react";
// import { unmountComponentAtNode } from "react-dom";
// import ReactMarkdown from "react-markdown";

// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import Link from "next/link";

// import CancelIcon from "@material-ui/icons/Cancel";
// import { Tooltip } from "@material-ui/core";

import Message from "./Message";
import Response from "./Response";

import {
  MessageWithResponsesWrapper,

  MessageWithResponsesTitle,
  MessageConversant,
  MessageSubject,

  MessageWithResponsesBody,
  ExpandOrCollapseMessages,
  ExpandMessages,
  CollapseMessages,
  MessageWithResponsesListResponse,
} from "./MessageWithResponsesListCSS";

import {
  MessageContentContainer,
  
  NoMessage,
  // MessageListWrapper,

  MessageListCardContainer,
  // MessageFromWrapper,
  // MessageFrom,
  // MessageSubject,

  // ExcludeButtonWrapper,

  Permalink,
  NewMessageLink,
} from "../../MessageListCSS";

// import messageFromResponse from "../formatResponseForInbox";
// // import markdownRenderes from "../../markdownRenderers";
// import MessageResponseForm from "../../MessageResponseForm";

import {
  findMessagesWithTheirResponses,
  findMessageWithItsResponses,
} from "../../../../api/privateMessage";
import { useRouter } from "next/router";
import { ListPaginationButtonsContainer, ListPaginationNextButton, ListPaginationPrevButton } from "../../../job/ListPagination/ListPaginationCSS";
import { TurnedIn } from "@material-ui/icons";
import MessageWithResponsesListForm from "./MessageWithResponsesListForm";
import { scrollToTop } from "../../../../browser/scroll";
// import Username from "../../../Username";

const MessagesWithResponsesList = ({
  username,
  id: messageId,

  page,

  // page,
}) => {
  const router = useRouter();

  const messagePerPage = 5;
  const [totalPage, setTotalPage] = useState(0);
  
  const [messagesWithResponses, setMessagesWithResponses] = useState(null);

  // const [showMessagesWithResponsesForm, setShowMessagesWithResponsesForm] = useState(false);

  const expandAll = (id) => {

    setMessagesWithResponses(messagesWithResponses => messagesWithResponses.map(messageWithResponses => {
      const { message, responses, showMessagesWithResponsesForm } = messageWithResponses;

      if (message.id === id) {
        return {
          message: {
            ...message,
            showText: true,
          },
          responses: responses.map(response => {
            return {
              ...response,
              showText: true,
              
            };
          }),
          showMessagesWithResponsesForm,
        };
      } else {
        return {
          message,
          responses,
          showMessagesWithResponsesForm,
        };
      }

    }));
  };

  const collapseAll = (id) => {

    setMessagesWithResponses(messagesWithResponses => messagesWithResponses.map(messageWithResponses => {
      const { message, responses, showMessagesWithResponsesForm } = messageWithResponses;

      if (message.id === id) {
        return {
          message: {
            ...message,
            showText: false,
          },
          responses: responses.map(response => {
            return {
              ...response,
              showText: false,
            };
          }),
          showMessagesWithResponsesForm,
        };
      } else {
        return {
          message,
          responses,
          showMessagesWithResponsesForm,
        };
      }
    }));
  };

  const setShowMessagesWithResponsesForm = (id) => {

    setMessagesWithResponses(messagesWithResponses => messagesWithResponses.map(messageWithResponses => {
      const { message, responses, showMessagesWithResponsesForm, } = messageWithResponses;

      if (message.id === id) {
        return {
          message,
          responses,
          showMessagesWithResponsesForm: !showMessagesWithResponsesForm,
        };
      } else {
        return {
          message,
          responses,
          showMessagesWithResponsesForm,
        };
      }
    }));
  };

  useEffect(() => {
    if (messageId === "") {
      findMessagesWithTheirResponses()
        .then(({ data }) => { // messagesWithResponses
          // console.log("data");
          // console.log(data);

          const totalPage = Math.ceil(data.length / messagePerPage);
          setTotalPage(totalPage);

          if (page === 1) {
            const start = 0;
            const end = messagePerPage;

            // setMessagesWithResponses(data.slice(start, end));
            setMessagesWithResponses(data.slice(start, end).map(messageWithResponse => {
              const { message, responses } = messageWithResponse;
              return {
                message: {
                  ...message,
                  showText: true,
                },
                responses: responses.map(response => {
                  return {
                    ...response,
                    showText: false,
                  };
                }),
                showMessagesWithResponsesForm: false,
              };
            }));
          } else {
            const start = (page - 1) * messagePerPage;
            const end = start + messagePerPage;

            // setMessagesWithResponses(data.slice(start, end));
            setMessagesWithResponses(data.slice(start, end).map(messageWithResponse => {
              const { message, responses } = messageWithResponse;
              return {
                message: {
                  ...message,
                  showText: true,
                },
                responses: responses.map(response => {
                  return {
                    ...response,
                    showText: false,
                  };
                }),
                showMessagesWithResponsesForm: false,
              };
            }));
          }
        }).catch(error => {
          console.log("error");
          console.error(error);
        });
    } else {
      findMessageWithItsResponses(messageId)
        .then(({ data }) => {
          // console.log("data");
          // console.log(data);

          if (data === null) {
            setMessagesWithResponses(data);
          } else {
            // console.log("data");
            // console.log(data);

            // setMessagesWithResponses([data]);

            const { message, responses } = data;
            setMessagesWithResponses([{
              message: {
                ...message,
                showText: true,
              },
              responses: responses.map(response => {
                return {
                  ...response,
                  // showText: false,
                  showText: true,
                };
              }),
              showMessagesWithResponsesForm: true,
            }]);
          }
        }).catch(error => {
          console.log("error");
          console.error(error);
        });
    }
  }, [page]);

  if (messagesWithResponses === null) {
    return null; // No server side data yet
  }

  if (messagesWithResponses.length === 0) {
    if (page === 1) {
      return <NoMessage>
        {"You don't have any message."}
      </NoMessage>;
    }

    if (page !== 1) {
      return <NoMessage>
        {"You don't have any message in this page."}
      </NoMessage>;
    }
  }

  return (
    <>
      {messagesWithResponses.map(({
        message,
        responses,
        showMessagesWithResponsesForm,
      }, index) => {
        // const [showConversation, setShowConvesation] = useState(true);

        // console.log("message");
        // console.log(message);
        // console.log("responses");
        // console.log(responses);

        const {
          id,
          
          from,
          to,

          created_at,
          subject,
          text,
          // read,
          // owner_id
          // updated_at,
          showText,
        } = message;

        const userIsSender = (from === username);
        const userIsResponder = (to !== username);

        return (
          <MessageListCardContainer
            // id={id}
            key={id}
            // @ts-ignore
            $index={index}
          >
            {<MessageWithResponsesWrapper
              // @ts-ignore
              $index={index}
            >
              <MessageWithResponsesTitle>
                <Link href={`/user/${userIsSender ? to : from}`} >
                  <MessageConversant>
                    {`/u/${userIsSender ? to : from}`}
                  </MessageConversant>
                </Link>

                <MessageSubject>{subject}</MessageSubject>
              </MessageWithResponsesTitle>

              <ExpandOrCollapseMessages>
                <ExpandMessages 
                  onClick={() => {
                    expandAll(id);
                  }} 
                  
                >
                  expand all
                </ExpandMessages>
                <CollapseMessages 
                  onClick={() => {
                    collapseAll(id);
                  }} 
                >
                  collapse all
                </CollapseMessages>
              </ExpandOrCollapseMessages>


              {/* <div style={{
                marginLeft: "0.25rem",
                marginTop: "0.5rem",
              }}>
                <span style={{
                  color: "rgb(17, 160, 245)",
                  marginRight: "0.5rem",
                }}>
                  Show
                </span>
              </div> */}

              <MessageWithResponsesBody>
                <Message
                  id={id}
                  
                  userIsSender={userIsSender}
                  userIsResponder={userIsResponder}
                  from={from}
                  to={to}
                  created_at={created_at}
                  
                  text={text}
                  showText={showText}

                  setMessagesWithResponses={setMessagesWithResponses}
                />

                {responses.map(({
                  id,
                  // message_id,
                  created_at,
                  text,

                  to: responseTo,

                  showText,
                }) => {
                  return (
                    <Response
                      key={id}
                      id={id}

                      from={from}
                      to={to}
                      
                      created_at={created_at}

                      username={username}
                      responseTo={responseTo}
                      text={text}
                      showText={showText}

                      setMessagesWithResponses={setMessagesWithResponses}
                    />
                  );
                })}

                {messageId === "" && <Permalink
                  href={`/message/messages?&id=${id}`}
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  Permalink
                </Permalink>}

                {from !== to && <MessageWithResponsesListResponse
                  onClick={() => {
                    setShowMessagesWithResponsesForm(id);
                  }}
                >
                  Respond
                </MessageWithResponsesListResponse>}
                
                {from !== to && <Link
                  href={`/message/compose?to=${userIsSender ? to : from}`}
                // target="_blank"
                // rel="noopener noreferrer"
                >
                  <NewMessageLink>
                    New
                  </NewMessageLink>
                </Link>}

                {/* {showMessagesWithResponsesForm && <div>Respond form</div>} */}
                {showMessagesWithResponsesForm && from !== to && <MessageWithResponsesListForm
                  // from={from}
                  messageId={id}

                  from={from}
                  to={to}
                  username={username}

                  // messageList={inboxMessageList}
                  // setMessageList={setInboxMessageList}
                  setMessagesWithResponses={setMessagesWithResponses}
                  setShowMessagesWithResponsesForm={setShowMessagesWithResponsesForm}

                  // subject={subject}
                  // background={background}
                />}

              </MessageWithResponsesBody>
              
            </MessageWithResponsesWrapper>}
            
          </MessageListCardContainer>
        );
      })}

      {messagesWithResponses && totalPage > 1 && <ListPaginationButtonsContainer>
        {/* Shouldn't show when no index */}
        {page !== 1 && <ListPaginationPrevButton
          onClick={(e) => {
            e.preventDefault();

            // router.push();
            const prevPage = page - 1;

            router.push(`/message/messages?page=${prevPage}`);

            scrollToTop();
          }}
        >
          Prev
        </ListPaginationPrevButton>}
        {page !== totalPage && <ListPaginationNextButton
          onClick={(e) => {
            e.preventDefault();

            const nextPage = page + 1;

            router.push(`/message/messages?page=${nextPage}`);

            scrollToTop();
          }}
        >
          Next
        </ListPaginationNextButton>}
      </ListPaginationButtonsContainer>}
    </>
  );
};

const Index = ({
  user,
  id,
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
      <MessagesWithResponsesList username={username} id={id} page={page} />
    </MessageContentContainer>
  );
};

export default Index;