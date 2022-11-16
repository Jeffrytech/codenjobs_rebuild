import React from "react";
import Link from "next/link";

// import CreateIcon from "@material-ui/icons/Create";

import {
  MessageButton,
  MessageButtonText,
} from "./ProfileUserCSS";

const NewBlogPost = () => {
  return (
    <MessageButton>
      <Link href={"/blog/post"}>
        {/* <CentralizeChildren> */}
        {/* <CreateIcon /> */}
        <MessageButtonText>
            Post a blog
        </MessageButtonText>
        {/* </CentralizeChildren> */}
      </Link>
    </MessageButton>
  );
};

export default NewBlogPost;