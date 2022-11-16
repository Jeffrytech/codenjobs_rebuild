import React from "react";
// import onClickOutside from "react-onclickoutside";
import { useOnOutsideClick } from "../../../../../useOutsideClick";

const MessageResponseSet = ({
  sent,
  setSent,
}) => {
  // @ts-ignore
  // MessageResponseSet.handleClickOutside = () => setSent(false);

  const { innerBorderRef } = useOnOutsideClick(() => {
    setSent(false);
  });

  if (sent) {
    return (
      <span 
        ref={innerBorderRef}
        style={{
          marginLeft: "0.5rem",
          fontSize: "0.85rem",
          // opacity: "0.5",
        }}
      >
        {/* Your response was sent */}
        Sent your message
      </span>
    );
  } else {
    return null;
  }
};

// const clickOutsideConfig = {
//   // @ts-ignore
//   handleClickOutside: () => MessageResponseSet.handleClickOutside
// };

// export default onClickOutside(MessageResponseSet, clickOutsideConfig);
export default MessageResponseSet;