import React from "react";

import Link from "next/link";

import moment from "moment";

import Username from "../Username";

import {
  PostedByContainer,
  UsernameWrapper,
  PostTime,
} from "./PostedByCSS";

const PostedBy = ({
  username,
  published_at,
  // redirect = "jobs",
}) => {
  // console.log(published_at); // 2021-08-04T22:34:05.498211
  // console.log("2021-08-04 22:34:05.498211");
  return (
    <PostedByContainer>
      <div style={{
        // marginRight: "0.25rem",
        display: "flex",
      }} >
        <span style={{
          marginRight: "0.25rem",
        }}>
          Posted by
        </span>
        {/* <Link href={`/user/${username}/jobs`}> */}
        <Link href={`/user/${username}`}>
          <UsernameWrapper>
            <Username username={username} />
            {/* <Username username={username} >u/{username}</Username> */}
          </UsernameWrapper>
        </Link>
      </div>

      <PostTime>
        {/* {published_at === null ? moment.utc(new Date()).fromNow() : moment.utc(new Date("2021-08-04T22:34:05.498211")).fromNow()} */}
        {/* Should remove new Date */}
        {published_at === null ? moment.utc(new Date()).fromNow() : moment.utc(published_at).fromNow()}
      </PostTime>

    </PostedByContainer>
  );
};

export default PostedBy;