import React from "react";
import Link from "next/link";

// import CreateIcon from "@material-ui/icons/Create";

import {
  MessageButton,
  MessageButtonText,
} from "./ProfileUserCSS";

const NewJobPost = () => {
  return (
    <MessageButton>
      <Link href={"/job/post"}>
        {/* <CentralizeChildren> */}
        {/* <CreateIcon /> */}
        <MessageButtonText>
            Post a job
        </MessageButtonText>
        {/* </CentralizeChildren> */}
      </Link>
    </MessageButton>
  );
};

export default NewJobPost;