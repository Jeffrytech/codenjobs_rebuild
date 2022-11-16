import React from "react";
import Link from "next/link";

import {
  MessageButton,
  MessageButtonText,
} from "./ProfileUserCSS";
import CentralizeChildren from "../../CentralizeChildren";

const Message = ({
  user,
  username,
}) => {
  if (!user) {
    return null;
  }

  // const router = useRouter();
  // // @ts-ignore
  // const { loginRequired, setLoginRequired } = useLoginRequired(); 
  
  // return (
  //   <MessageButton 
  //     onClick={async (e) => {
  //         e.preventDefault();

  //         const messageToUser = `/message/compose?to=${username}`

  //         if (!user) {
  //           setLoginRequired({
  //             show: true,
  //             title: "Login Required",
  //             description: `Login first before you send a message`,
  //             // description: `Login first before you message u/${username}`,
  //             // description: "Login first before you follow the user.",
  //             // description: "Login or register to the website first.",
  //             from: messageToUser,
  //           })
  //           return;

  //           // return;
  //           // router.push("/signin"); // Make it work with from query
  //           // router.push(`/signin?&from=${router.asPath}`); // Make it work with from query

  //         }

  //         // router.push(messageToUser);
  //         router.push(messageToUser);

  //       }}
  //     >
  //     <CentralizeChildren>
  //       {/* <Email /> */}
  //       <MessageButtonText>
  //         {/* Send a message */}
  //         Message
  //       </MessageButtonText>
  //     </CentralizeChildren>
  //   </MessageButton>
  // );

  return (
    <Link href={`/message/compose?to=${username}`}>
      <MessageButton>
        <CentralizeChildren>
          {/* <Email /> */}
          <MessageButtonText>
            {/* Send a message */}
            Message
          </MessageButtonText>
        </CentralizeChildren>
      </MessageButton>
    </Link>
  );
};

export default Message;