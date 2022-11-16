import React from "react";

// Use it conditionally
import Link from "next/link";

import { Chip } from "@material-ui/core";

import {
  BlogPostTagsContainer,
  BlogPostTagsWrapper,
  BlogPostTag,
} from "./BlogPostTagsCSS";

const BlogPostTags = ({
  tags,
  isPreview,
}) => {
  if (tags) {
    return (
      <BlogPostTagsContainer>
        <BlogPostTagsWrapper>
          {tags.map((tag: string) => {
            if (isPreview) {
              return (
                <BlogPostTag $isPreview={isPreview} key={tag} >
                  <Chip
                    variant="outlined"
                    label={tag}
                  />
                </BlogPostTag>
              );
            } else {
              return (
                <Link key={tag} href={`/blogs?&tag=${encodeURIComponent(tag)}`}>
                  {/* <Link key={tag} href={`/blogs?&tag=${tag}`}> */}
                  <BlogPostTag $isPreview={isPreview} key={tag} >
                    <Chip
                      variant="outlined"
                      label={tag}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </BlogPostTag>
                </Link>
              );
            }
          })}
        </BlogPostTagsWrapper>
      </BlogPostTagsContainer>
    );
  } else {
    return null;
  }
};

export default BlogPostTags;
