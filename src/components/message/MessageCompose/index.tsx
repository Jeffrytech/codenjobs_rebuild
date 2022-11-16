import React from "react";

import { useRouter } from "next/router";
// import { useRouter } from "next/router";
// import Head from "next/head";

import useMessageComposeForm from "./useMessageComposeForm";
import UsernameFieldErrorMessage from "./Error/UsernameFieldErrorMessage";

import {
  MessageContentContainer,

  MessageFormTitle,
  MessageForm,

  ToLabel,
  ToInput,

  SubjectLabel,
  SubjectInput,

  YourMessageLabel,

  MessageTextarea,
  MessageSubmitButtonWrapper,
  MessageSubmitButton,

  CharactersLeftWrapper,
  CodeOfConductWrapper,
} from "./MessageComposeCSS";

import {
  nameMaxLength,
  subjectMaxLength,
  privateMessageTextMaxLegnth,
} from "../../../validators";
import { charactersLeft } from "../../../form";
import SubjectFieldErrorMessage from "./Error/SubjectFieldErrorMessage";

import MessageSent from "./MessageSent";
import ExternalLink from "../../ExternalLink";
import { COMPANY_CODE_OF_CONDUCT } from "../../../config/environment";
// import { Link } from "@material-ui/core";
// import { Link } from "@material-ui/icons";

// import { useAuth } from "../../../../contexts/auth";

const MessageCompose = ({
  to,
  user,

  messageComposeTitle,
}) => {
  const router = useRouter();

  // const {
  //   user
  // } = useAuth();

  // Use modal instead
  if (!user) {
    router.push("/signin");
    return null;
  }

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values, // Should rest when submit succesfully
    
    // Should show error messages?
    errors,
    touched,

    // setFieldValue,
    // setValues,
    // // setFieldTouched,

    isSubmitting,
    // submitForm,

    sent,
    setSent,
  } = useMessageComposeForm(to);

  return (
    <MessageContentContainer>
      <MessageFormTitle>
        {messageComposeTitle}
      </MessageFormTitle>
      <MessageForm onSubmit={handleSubmit} >
        <ToLabel
          htmlFor="to"
        >
          to <span
            style={{
              opacity: 0.5,
            }}
          >
            (username)
          </span>
        </ToLabel>
        <ToInput
          autoComplete="on"
          // autoComplete="username"

          id="to"
          name="to"

          maxLength={nameMaxLength}

          onChange={handleChange}
          onBlur={handleBlur}

          value={values.to}

          required={true}
        />
        <UsernameFieldErrorMessage
          formValue={values.to}
          formError={errors.to}
          formTouch={touched.to}
        />

        <SubjectLabel htmlFor="subject" >subject</SubjectLabel>
        <SubjectInput
          autoComplete="on"

          id="subject"
          name="subject"

          maxLength={subjectMaxLength}
          
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.subject}

          required={true}
        />
        {/* Should show error with this when value is empty */}
        <SubjectFieldErrorMessage
          formValue={values.subject}
          formError={errors.subject}
          formTouch={touched.subject}
        />
        
        {/* Support markdown? */}
        <YourMessageLabel htmlFor="text">
          your message
        </YourMessageLabel>
        <span style={{
          marginTop: "0.25rem",
          marginBottom: "1rem",
          opacity: 0.5,
          fontSize: "0.85rem",
        }}>
          {"We don't support markdown here yet"}
        </span>
        
        <MessageTextarea
          id="text"
          name="text"
          
          // rows={5}
          minRows={5}
          maxRows={27}

          maxLength={privateMessageTextMaxLegnth}

          onChange={handleChange}
          onBlur={handleBlur}
          value={values.text}

          required={true}
        />
        <CharactersLeftWrapper>
          {values.text.length > 600 && charactersLeft(privateMessageTextMaxLegnth, values.text)}
          <CodeOfConductWrapper>
            <ExternalLink href={COMPANY_CODE_OF_CONDUCT} >
              Code of Conduct
            </ExternalLink>
          </CodeOfConductWrapper>
        </CharactersLeftWrapper>

        <MessageSubmitButtonWrapper>
          <MessageSubmitButton
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </MessageSubmitButton>
          <MessageSent
            sent={sent}
            setSent={setSent}
          />
        </MessageSubmitButtonWrapper>
      </MessageForm>
    </MessageContentContainer>
  );
};

export default MessageCompose;