import React, { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";

import { useRouter } from "next/router";

// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import Link from "next/link";

import moment from "moment";

import {
  MessageContentContainer,

  NoMessage,
  // MessageListWrapper,

  MessageListCardContainer,

  MessageSentToContainer,
  MessageSentToWrapper,

  MessageSentToUser,
  MessageSubject,
} from "./MessageListSentCSS";

// import messageFromResponse from "../../inbox/messageFromResponse";
// import markdownRenderes from "../../../markdownRenderers";

import { findMessageListSent } from "../../../../api/privateMessage";
import { findMessageResponseListSent } from "../../../../api/privateMessageResponse";

import formatResponseForSent from "./formatResponseForSent";
import { MessageOptions, MessageText, NewMessageLink, Permalink } from "../../MessageListCSS";
import Username from "../../../Username";
import { ListPaginationButtonsContainer, ListPaginationNextButton, ListPaginationPrevButton } from "../../../job/ListPagination/ListPaginationCSS";

const MessageListSent = ({
  page,
}) => {
  const router = useRouter();

  const messagePerPage = 5;
  const [totalPage, setTotalPage] = useState(0);

  const [messageListSent, setMessageListSent] = useState(null);

  console.log("messageListSent");
  console.log(messageListSent);

  useEffect(() => {
    Promise.all([findMessageListSent(), findMessageResponseListSent()])
      .then(data => {
        const [messages, responses] = data;

        // console.log("responses");
        // console.log(responses);

        const formattedResponses = responses.data.map(response => {
          return formatResponseForSent(response);
        });

        const latestMessages = [...messages.data, ...formattedResponses].sort((x, y) => {
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

          setMessageListSent(latestMessages.slice(start, end));
        } else {
          const start = (page - 1) * messagePerPage;
          const end = start + messagePerPage;

          setMessageListSent(latestMessages.slice(start, end));
        }

        // setMessageListSent(latestMessages);
      }).catch(error => {
        console.log("error");
        console.error(error);
      });
  }, [page]);

  if (messageListSent === null) {
    return null; // No server side data yet
  }

  if (messageListSent.length === 0) {
    if (page === 1) {
      return <NoMessage>
        <span>
          {"You don't have any sent message."}
        </span>

        <br />
        <br />

        {" When a recipient exclude your message, it will be deleted from here also."}
        {/* {"You don't have any sent message. When a recipient exclude your message, it will be deleted from here also."} */}
      </NoMessage>;
    }

    if (page !== 1) {
      return <NoMessage>
        <span>
          {"You don't have any sent message in this page."}
        </span>
      </NoMessage>;
    }
  }

  return (
    // <MessageListWrapper>
    <>
      {messageListSent.map(({
        id: message_id,
        to,
        subject,
        created_at,
        text,

        message_response_id,
      }, index) => {
        return (
          <MessageListCardContainer id={message_id} key={message_response_id || message_id} >
            <section style={{
              padding: "1rem",
              backgroundColor: (index % 2) === 0 ? "white" : "#efefef",
            }}>
              <div style={{
                display: "flex",
                marginBottom: "0.5rem",
                fontSize: "0.85rem",
                // opacity: "0.7"
              }}>
                <span style={{
                  opacity: 0.7,
                }}>
                  {moment.utc(created_at).fromNow()}
                </span>
              </div>
              <MessageSentToContainer>
                <MessageSentToWrapper>
                  <span style={{
                    marginRight: "0.25rem",
                  }}>
                    Sent to
                  </span> {
                    <Link href={`/user/${to}`} >
                      <MessageSentToUser>
                        <Username username={to} color={"rgb(17, 160, 245)"} />
                      </MessageSentToUser>
                    </Link>
                  } {
                    // moment.utc(created_at).fromNow()
                  }
                </MessageSentToWrapper>
              </MessageSentToContainer>
              {/* <MessageFromWrapper>
                <span style={{
                  marginRight: "0.25rem",
                }}>From</span> {
                  <Link href={`/user/${from}`} >
                    <MessageFrom>
                      <Username username={from} color={"rgb(17, 160, 245)"}>
                        {`/u/${from}`}
                      </Username>
                    </MessageFrom>
                  </Link>
                } {
                  moment.utc(created_at).fromNow()
                }
              </MessageFromWrapper> */}
              {/* <MessageSentToWrapper>
                <span>
                  Sent to {
                    <Link href={`/user/${to}`} ><MessageSentToUser>{`/u/${to}`}</MessageSentToUser></Link>
                  } {
                    moment.utc(created_at).fromNow()
                  }
                </span>
              </MessageSentToWrapper> */}
              <MessageSubject>{subject}</MessageSubject>
              {/* <div>
                {text}
              </div> */}
              <MessageText>
                {text}
              </MessageText>

              <MessageOptions>
                <Permalink
                  href={`/message/messages?&id=${message_id}`}
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  Permalink
                </Permalink>
                <Link
                  href={`/message/compose?to=${to}`}
                  // target="_blank"
                  // rel="noopener noreferrer"
                >
                  <NewMessageLink>
                    New
                  </NewMessageLink>
                </Link>
              </MessageOptions>
            </section>
          </MessageListCardContainer>
        );
      })}

      {/* Extract CSS here and make it to component */}
      {messageListSent && totalPage > 1 && <ListPaginationButtonsContainer>
        {/* Shouldn't show when no index */}
        {page !== 1 && <ListPaginationPrevButton
          onClick={(e) => {
            e.preventDefault();

            // router.push();
            const prevPage = page - 1;

            router.push(`/message/sent?page=${prevPage}`);
          }}
        >
          Prev
        </ListPaginationPrevButton>}
        {page !== totalPage && <ListPaginationNextButton
          onClick={(e) => {
            e.preventDefault();

            const nextPage = page + 1;

            router.push(`/message/sent?page=${nextPage}`);
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

  return (
    <MessageContentContainer>
      <MessageListSent page={page} />
    </MessageContentContainer>
  );
};

export default Index;

// {/* <ReactMarkdown renderers={markdownRenderes}>
//                 {text}
//               </ReactMarkdown> */}