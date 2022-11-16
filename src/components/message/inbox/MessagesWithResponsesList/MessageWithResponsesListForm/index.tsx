import React from "react";

import {
  MessageRespondTextareaInputWrapper,
  MessageRespondTextarea,
  MessageRespondSendButton,
  MessageRespondCancelButton,

  // Extrac this.
  CharactersLeftWrapper} from "./MessageResponseFormCSS";

import useMessageWithResponsesListForm from "./useMessageWithResponsesListForm";

import MessageResponseSent from "./MessageResponseSent";
import ResponseFieldErrorMessage from "./Error/ResponseFieldErrorMessage";

import { privateMessageTextMaxLegnth } from "../../../../../validators";
// import { block } from "../../../api/privateUser";
import { charactersLeft } from "../../../../../form";

// Rename it later?
const MessageWithResponsesListForm = ({
  // from,
  // isFromSelf,
  // id,
  messageId,

  from,
  to,
  username,
  // responseTo,

  // messageList,
  // setMessageList,
  setShowMessagesWithResponsesForm,
  setMessagesWithResponses,

  // subject,
  // background,
}) => {
  
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
  } = useMessageWithResponsesListForm(
    messageId, 
    setMessagesWithResponses, 
    from,
    to,
    username,
  );

  return (
    <>      
      {setShowMessagesWithResponsesForm && <form onSubmit={handleSubmit}>
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
              setShowMessagesWithResponsesForm(messageId);
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
    </>
  );
};

export default MessageWithResponsesListForm;