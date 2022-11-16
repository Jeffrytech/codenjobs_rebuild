import React from "react";
import Link from "next/link";

import moment from "moment";
// import Username from "../../../Username";

import { MessageWithResponseText, Username } from "./MessageWithResponsesListCSS";

const Message = ({
  id, 
  
  userIsSender,
  userIsResponder,
  from,
  to,
  text,
  created_at,

  showText,
  setMessagesWithResponses,

}) => {
  // const [showMessageText, setShowMessageText] = useState(showText);


  const setShowMessageText = () => {
    setMessagesWithResponses(messageWithResponses => {
      return messageWithResponses.map(messageWithResponse => {
        const { message, responses, showMessagesWithResponsesForm } = messageWithResponse;

        if (message.id === id) {
          return {
            message: {
              ...message,
              showText: !showText,
            },
            responses,
            showMessagesWithResponsesForm,
          };
        } else {
          return {
            message,
            responses,
            showMessagesWithResponsesForm,
          };
        }
      });
    });
  }; 

  return (
    <div style={{
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
      display: "flex",
      flexFlow: "column",
    }}>
      <span style={{
        fontSize: "0.8rem",
        opacity: 0.7,
        
      }}>
        <span style={{
          color: "rgb(17, 160, 245)",
          cursor: "pointer",
        }} onClick={(e) => {
          e.preventDefault();
          // setShowMessageText(!showMessageText);
          setShowMessageText();
        }}>[{showText ? "-" : "+"}]</span> {
          " "
        }
        <span style={{
          fontWeight: userIsResponder ? "inherit" : "bold",
        }} >
          {userIsSender ? "to" : "from"} <Link href={`/user/${userIsSender ? to : from}`} ><Username>{`/u/${userIsSender ? to : from}`}</Username></Link>
        </span>
        {/* {userIsSender ? "to" : "from"} <Link href={`/user/${userIsSender ? to : from}`} ><Username>{`/u/${userIsSender ? to : from}`}</Username></Link> {moment.utc(created_at).fromNow()} */}
        {/* {userIsSender ? "to" : "from"} <Link href={`/user/${userIsSender ? to : from}`} ><Username username={userIsSender ? to : from} color="rgb(17, 160, 245)" >{`/u/${userIsSender ? to : from}`}</Username></Link> {moment.utc(created_at).fromNow()} */}
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
    </div>
  );
};

export default Message;