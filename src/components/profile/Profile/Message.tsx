import React from "react";
import Link from "next/link";

// import Email from "@material-ui/icons/Email";

import {
  MessageButton,
  MessageButtonText,
} from "./ProfileCSS";

import CentralizeChildren from "../../CentralizeChildren";

const Message = ({
  username,
}) => {
  return (
    <MessageButton>
      <Link href={`/message/compose?to=${username}`}>
        <CentralizeChildren>
          {/* <Email /> */}
          <MessageButtonText>
            {/* Send a message */}
            Message
          </MessageButtonText>
        </CentralizeChildren>
      </Link>
    </MessageButton>
  );
};

export default Message;