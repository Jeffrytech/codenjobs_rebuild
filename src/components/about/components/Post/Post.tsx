import React from "react";
import moment from "moment";

import ExternalLink from "../../../ExternalLink";

import styles from "./Post.module.scss";

const Post = ({ 
  title, 
  cover,
  published_at,
  href,
}) => {
  return (
    <div className={styles.post_wrapper}>
      <div className={styles.post_lower}>
        {/* <div className={styles.image}>
          <h2>IMAGE</h2>
        </div> */}
        <img 
          src={cover}
          alt="cover"

          style={{
            maxWidth: "8rem",
            marginRight: "1rem",
          }}
        />
        <div className={styles.info}>
          <ExternalLink href={href} >
            <div className={styles.title}>
              <h6 className={styles.make_cover}>{title}</h6>
            </div>
          </ExternalLink>
          <div className={styles.more}>
            <h6>{moment.utc(new Date(published_at)).fromNow()}</h6>
            {/* <ExternalLink href={href} >
              <h6 className={styles.make_cover}>Read Article</h6>
            </ExternalLink> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
