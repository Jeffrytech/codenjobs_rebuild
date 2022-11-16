import React from "react";
import Link from "next/link";

import moment from "moment";

import { MessageWithResponseText, Username } from "./MessageWithResponsesListCSS";

// 1. messageSender && responseSender
// 2. messageSender && responseReceiver
// 3. not messageSender && responseSender
// 4. not messageSender && responseReciever
const FromOrTo = ({
  from,
  to,

  userIsSender,
  userIsResponder,

  // username,
  // responseTo,
}) => {
  // const userIsSender = (from === username);
  // const userIsResponder = (responseTo !== username);

  if (userIsSender) {
    if (!userIsResponder) {
      return (

        <span style={{
          // fontWeight: userIsResponder ? "bold" : "inherit",
          fontWeight: "bold",
        }}>
          from <Link href={`/user/${to}`} >
            <Username>{`/u/${to}`}</Username>
          </Link> {
            " "
          }
        </span>
      );
    } else {
      return (
        <span>
          to <Link href={`/user/${to}`} >
            <Username>{`/u/${to}`}</Username>
          </Link> {
            " "
          }
        </span>
      );
    }
  }

  if (!userIsSender) {
    if (!userIsResponder) {
      return (
        <span
          style={{
            // fontWeight: userIsResponder ? "bold" : "inherit",
            fontWeight: "bold",
          }}
        >
          from <Link href={`/user/${from}`} >
            <Username>{`/u/${from}`}</Username>
          </Link> {
            " "
          }
        </span>
      );
    } else {
      return (
        <span>
          to <Link href={`/user/${from}`} >
            <Username>{`/u/${from}`}</Username>
          </Link> {
            " "
          }
        </span>
      );
    }
  };
};

const Response = ({
  id,
  
  from,
  to,
  created_at,

  username,
  responseTo,

  text,

  showText,
  setMessagesWithResponses,
}) => {
  // alert(created_at);

  // const [showResponseText, setShowResponseText] = useState(showText);

  const userIsSender = (from === username);
  const userIsResponder = (responseTo !== username);

  const setShowResponseText = () => {
    setMessagesWithResponses(messageWithResponses => {
      return messageWithResponses.map(messageWithResponse => {
        const { message, responses, showMessagesWithResponsesForm } = messageWithResponse;

        return {
          message,
          responses: responses.map(response => {
            if (response.id === id) {
              return {
                ...response,
                showText: !showText,
              };
            } else {
              return response;
            }
          }),
          showMessagesWithResponsesForm,
        };
      });
    });
  }; 

  // alert(responseTo);
  // alert(username);

  return (<div style={{
    marginTop: "1rem",
    marginBottom: "0.5rem",
    display: "flex",
    flexFlow: "column",
  }}>
    <span style={{
      fontSize: "0.8rem",
      opacity: 0.7,
      // fontWeight: userIsResponder ? "inherit" : "bold",
    }}>
      <span style={{
        color: "rgb(17, 160, 245)",
        cursor: "pointer",
      }} onClick={(e) => {
        e.preventDefault();
        // setShowResponseText(!showResponseText);
        setShowResponseText();
      }}>[{showText ? "-" : "+"}]</span> {
        " "
      }
      <FromOrTo
        from={from}
        to={to}

        userIsSender={userIsSender}
        userIsResponder={userIsResponder}

        // username={username}
        // responseTo={responseTo}
      />
      {/* {moment.utc(created_at).fromNow()} */}
    </span>

    {showText && <>
      <span style={{
        marginTop: "0.25rem",
        fontSize: "0.8rem",
        opacity: 0.7,
      }}>
        {moment.utc(created_at).fromNow()}
      </span>
      <MessageWithResponseText>
        {text}
      </MessageWithResponseText>
    </>}
    {/* {showText && <div style={{
      marginTop: "0.25rem",
    }}>
      {text}
    </div>} */}
  </div>);
};

export default Response;