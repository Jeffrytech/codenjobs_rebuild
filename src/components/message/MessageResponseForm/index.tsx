import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import moment from "moment";
// import autosize from 'autosize';ya

import {
  MessageRespondTextareaInputWrapper,
  MessageRespondTextarea,
  MessageRespondSendButton,
  MessageRespondCancelButton,

  // Extrac this.
  CharactersLeftWrapper,
  MessageRespondButton,
  BlockButton
} from "./MessageResponseFormCSS";

import useMessageResponseForm from "./useMessageResponseForm";

import MessageResponseSent from "./MessageResponseSent";
import ResponseFieldErrorMessage from "./Error/ResponseFieldErrorMessage";

import { privateMessageTextMaxLegnth } from "../../../validators";
import { MessageListCardContainer, MessageOptions, MessageText, NewMessageLink, Permalink } from "../MessageListCSS";
import { block } from "../../../api/privateUser";
import { charactersLeft } from "../../../form";
import { MessageSentToContainer, MessageSentToUser, MessageSentToWrapper, MessageSubject } from "../sent/MessageListSent/MessageListSentCSS";
import Username from "../../Username";

// Rename it later?
const MessageResponseForm = ({
  from,
  isFromSelf,
  messageId,

  messageList,
  setMessageList,

  subject,
  responseSubject,
  background,
}) => {

  const [showMessageResponseForm, setShowMessageResponseForm] = useState(false);
  const [responseListSent, setResponseListSent] = useState([]);


  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    // setFieldValue,
    // setValues,
    // setFieldTouched,

    isSubmitting,
    // submitForm,

    sent,
    setSent,
  } = useMessageResponseForm(messageId, setResponseListSent);

  return (
    <>
      {/* Extract this later? */}
      <section style={{
        display: "flex",
        marginTop: "0.5rem",
        alignItems: "center",
      }}>
        <Permalink
          href={`/message/messages?&id=${messageId}`}
          // target="_blank"
          rel="noopener noreferrer"
        >
          Permalink
        </Permalink>
        <MessageRespondButton
          onClick={(e) => {
            e.preventDefault();
            setShowMessageResponseForm(!showMessageResponseForm);
          }}
        >
          Respond
        </MessageRespondButton>
        {!isFromSelf && <>
          <BlockButton
            onClick={async (e) => {
              e.preventDefault();

              const confirmed = confirm("Do you really want to block this user?");

              if (confirmed) {
                const { data, error } = await block(from);

                if (data === true) {
                  // window.location.reload();
                  setMessageList(messageList.filter((message) => {
                    return (message.from !== from);
                  }));
                  return;
                }

                if (data === false) {
                  alert("Something went wrong");
                  return;
                }

                if (error) {
                  alert("Something went wrong");
                }

                // alert(data);

                // if (data === false) {

                // }

                // if (error) {

                // }
              }
              // setShowMessageResponseForm(!showMessageResponseForm);
            }}
          >
            Block
            {/* Block User */}
          </BlockButton>
          {!isFromSelf && <Link
            href={`/message/compose?to=${from}`}
          // target="_blank"
          // rel="noopener noreferrer"
          >
            <NewMessageLink>
              New
            </NewMessageLink>
          </Link>}
        </>}
      </section>
      
      {showMessageResponseForm && <form onSubmit={handleSubmit}>
        <MessageRespondTextareaInputWrapper>
          <MessageRespondTextarea
            autoFocus={true}

            id="text"
            name="text"

            // rows={5}
            minRows={5}
            maxRows={21}

            maxLength={privateMessageTextMaxLegnth}

            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
        </MessageRespondTextareaInputWrapper>
        <CharactersLeftWrapper>
          {values.text.length > 600 && charactersLeft(privateMessageTextMaxLegnth, values.text)}
        </CharactersLeftWrapper>

        <div>
          <MessageRespondSendButton
            type="submit"
            disabled={isSubmitting}
          >
            Send
          </MessageRespondSendButton>
          <MessageRespondCancelButton
            onClick={(e) => {
              e.preventDefault();
              setShowMessageResponseForm(false);
            }}
          >
            Cancel
          </MessageRespondCancelButton>
          <MessageResponseSent
            sent={sent}
            setSent={setSent}
          />
          <ResponseFieldErrorMessage
            formValue={values.text}
            formError={errors.text}
            formTouch={touched.text}
          />
        </div>
      </form>}

      {responseListSent.map(({
        created_at,
        text,

      }, index) => {
        return (
          <MessageListCardContainer
            isResponse={true}
            key={`${messageId}${index}`}    
          >
            <section style={{
              padding: "1rem",
              background,
              marginLeft: "2rem",
            }}>
              <div style={{
                display: "flex",
                marginBottom: "0.5rem",
                fontSize: "0.85rem",
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
                    <Link href={`/user/${from}`} >
                      <MessageSentToUser>
                        <Username username={from} color={"rgb(17, 160, 245)"} />
                      </MessageSentToUser>
                    </Link>
                  }
                </MessageSentToWrapper>
              </MessageSentToContainer>

              <MessageSubject>{responseSubject}</MessageSubject>
              <MessageText>
                {text}
              </MessageText>

              <MessageOptions>
                <Permalink
                  href={`/message/messages?&id=${messageId}`}
                  rel="noopener noreferrer"
                >
                  Permalink
                </Permalink>
              </MessageOptions>
            </section>
          </MessageListCardContainer>
        );
      })}
    </>
  );
};

export default MessageResponseForm;