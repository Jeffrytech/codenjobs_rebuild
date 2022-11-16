import React from "react";
import Link from "next/link";

// import Email from "@material-ui/icons/Email";

import {
  MessageButton,
  MessageButtonText,
} from "./ProfileUserCSS";
import CentralizeChildren from "../../CentralizeChildren";

// import { useRouter } from "next/router";
// import { useLoginRequired } from "../../../contexts/loginRequired";


const Message = ({
  user,
  username,
}) => {
  if (!user) {
    return null;
  }

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