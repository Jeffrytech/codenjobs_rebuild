import React from "react";
// import onClickOutside from "react-onclickoutside";
import { MessageSentWrapper } from "./MessageComposeCSS";

import { useOnOutsideClick } from "../../../useOutsideClick";

const MessageSent = ({
  sent,
  setSent,
}) => {
  // @ts-ignore
  // MessageSent.handleClickOutside = () => setSent(false);

  const { innerBorderRef } = useOnOutsideClick(() => {
    setSent(false);
  });

  if (sent) {
    return (
      <MessageSentWrapper
        ref={innerBorderRef}
      >
        Your message was sent
      </MessageSentWrapper>
    );
  } else {
    return null;
  }
};

// const clickOutsideConfig = {
//   // @ts-ignore
//   handleClickOutside: () => MessageSent.handleClickOutside
// };

// export default onClickOutside(MessageSent, clickOutsideConfig);
export default MessageSent;