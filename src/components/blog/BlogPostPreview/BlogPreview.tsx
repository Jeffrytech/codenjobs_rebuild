import React from "react";

import {
  BlogPreviewContainer,
  BlogPreviewBody,
} from "./BlogPreviewCSS";

import BlogCover from "../BlogCover";
import BlogHeader from "../BlogHeader";
import BlogPostTags from "../BlogPostTags";
import PostRenderer from "../../markdown/PostRenderer";

const BlogPreview = ({
  username,

  cover,

  title,
  category,

  body,
  tags,

  published_at,
}) => {
  // alert(published_at);

  return (
    <BlogPreviewContainer>
      {/* Cover image wrapper or something. */}
      <BlogCover cover={cover} />
      {/* Should incldue id? */}
      {/* @ts-ignore */}
      <BlogHeader username={username} title={title} published_at={published_at} page={"preview"} category={category} />
      <BlogPreviewBody>
        <PostRenderer input={body} />
      </BlogPreviewBody>
     
      <BlogPostTags tags={tags} isPreview={true} />
    </BlogPreviewContainer>
  );
};

export default BlogPreview;

// {/* <div
//           dangerouslySetInnerHTML={{
//             __html: body,
//           }}
//         /> */}
// {/* Separate this? */ }

// {/* Should find how to edit image, font size etc */ }
// {/* https://github.com/remarkjs/react-markdown */ }
// {/* https://github.com/remarkjs/react-markdown#appendix-b-node-types */ }
// {/* https://github.com/remarkjs/react-markdown/issues/100 */ }
// {/* Include renderers for link and the image later? */ }