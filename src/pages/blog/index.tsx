import React, { useEffect, useState } from "react";

import Head from "next/head";

import Layout from "../../components/layouts";
import Container from "../../components/Container";
import Content from "../../components/Content";

import BlogPostPrimary from "../../components/blog/BlogPostView/BlogPostPrimary";
// import JobPostSecondary from "../../components/job/JobPostView/JobPostSecondary";

import { API, COMPANY_COVER, COMPANY_NAME } from "../../config/environment";
import BlogPostSecondary from "../../components/blog/BlogPostView/BlogPostSecondary";
// import PrimarySection from "../../components/PrimayContainer";
import PrimaryContainer from "../../components/PrimaryContainer";
import MoreJobsByCategory from "../../components/job/MoreJobsByCategory";
import MoreBlogsByCategory from "../../components/blog/MoreBlogsByCategory";

import BlogCommentList from "../../components/blog/BlogCommentList";
import { findBlogCommentList } from "../../api/blogComment";
import Metatags from "../../components/Metatags";

// https://ourcodeworld.com/articles/read/376/how-to-strip-html-from-a-string-extract-only-text-content-in-javascript
// This doens't work here.
// function stripHtml(html) {
//   // Create a new div element
//   var temporalDivElement = document.createElement("div");
//   // Set the HTML content with the providen
//   temporalDivElement.innerHTML = html;
//   // Retrieve the text property of the element (cross-browser support)
//   return temporalDivElement.textContent || temporalDivElement.innerText || "";
// }

// makes api calls in getserver sideprops rehkmansa blog single

const Blog = ({
  data,
  id,

  showComment,
  commentId,
  // commentResponse,
  showVoters,
}) => {
  const [userProfile, setUserProfile] = useState(null);
  const [blogCommentList, setBlogCommentList] = useState(null); // null means loading from the server database
  const totalBlogComments = !blogCommentList ? 0 : blogCommentList.length;

  const [sortBlogCommentList, setSortBlogCommentList] = useState("new");

  useEffect(() => {
    findBlogCommentList(id)
      .then(({ data }) => {
        // alert(data);
        // console.log("findBlogCommentList");
        // console.log(data);

        // No need for database for new, old options only yet
        if (sortBlogCommentList === "new") {
          setBlogCommentList(data);
        } else {
          setBlogCommentList(data.reverse());
        }
      })
      .catch((error) => {
        console.log("findBlogCommentList error");
        console.error(error);
      });
  }, [sortBlogCommentList]);

  if (!data || data.detail) {
    // TODO
    // Show better error page instead similar to 404 page
    return <div>Verify there is correct id for the blog in the path.</div>;
  }

  const {
    username, // Just use user_username,

    cover,

    title,
    published_at,
    category,

    body,
    tags,

    status,
    commentable,
  } = data;

  // alert(commentable);

  // if (job_status === "Draft") {
  //   return null;
  // }

  const removeTag = body.replace(/<[^>]+>/g, "");
  const limit = 160;

  const meta_description =
    removeTag.length > limit ? `${removeTag.slice(0, limit)}...` : removeTag;
  const meta_image = cover !== null ? cover : COMPANY_COVER;

  return (
    <>
      {/* <Head>
        <title>{title} - {COMPANY_NAME}</title>

        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />

        <meta name="description" content={meta_body} />
        <meta property="og:description" content={meta_body} />
        <meta name="twitter:description" content={meta_body} />

        <meta property="og:image" content={meta_image} />
        <meta name="twitter:image" content={meta_image} />
        <meta name="image" content={meta_image} />

        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head> */}

      <Metatags
        title={title}
        description={meta_description}
        image={meta_image}
        keywords={tags && tags.length > 0 && tags.join(", ")}
      />

      <Layout>
        <Container>
          <Content>
            <PrimaryContainer>
              <BlogPostPrimary
                id={id}
                username={username}
                cover={cover}
                title={title}
                published_at={published_at}
                category={category}
                body={body}
                tags={tags}
                status={status}
                commentable={commentable}
                userProfile={userProfile}
                setUserProfile={setUserProfile}
                totalBlogComments={totalBlogComments}
                showVoters={showVoters}
              />

              {/* <BlogShare
                title={title}
                url={`https://${COMPANY_WEBSITE}/BLOG?&title=${title.split(" ").join("-")}&id=${id}`}

                // blog_id={id}

                totalBlogComments={totalBlogComments}
              /> */}

              <MoreBlogsByCategory category={category} blog_id={id} />

              <MoreJobsByCategory category={category} job_id={null} />
            </PrimaryContainer>

            {/* Use user information instead? */}
            <BlogPostSecondary
              status={status}
              id={id}
              username={username}
              userProfile={userProfile}
              setUserProfile={setUserProfile}
            />
          </Content>
        </Container>
      </Layout>

      <BlogCommentList
        blog_id={id}
        writer={username}
        blogCommentList={blogCommentList}
        setBlogCommentList={setBlogCommentList}
        totalBlogComments={totalBlogComments}
        sortBlogCommentList={sortBlogCommentList}
        setSortBlogCommentList={setSortBlogCommentList}
        showComment={showComment}
        commentId={commentId}
        blogCommentable={commentable}
        // commentResponse={commentResponse}
      />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const {
    id,
    showComment,
    showVoters,

    commentId,
    // commentResponse,
  } = query;

  if (!id) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  // Use .env later with API?
  const target = `${API}/api/v1/blog?id=${id}`;

  // Use axios instead later?.
  // eslint-disable-next-line no-undef
  const res = await fetch(target);

  const data = await res.json();

  return {
    props: {
      data,
      id,

      showComment: showComment || false,
      showVoters: showVoters || false,

      commentId: commentId || null,
      // commentResponse: commentResponse || null,
    },
  };
}

export default Blog;

{
  /* <meta property="og:title" content="Building a Crypto Price Tracker with Flutter">
<meta name="twitter:title" content="Building a Crypto Price Tracker with Flutter">
<meta name="description" content=" Introduction In this article, we will be building a crypto currency price tracker using flutter and Coingecko API. Flutter is google UI framework used to deve...">
<meta property="og:description" content=" Introduction In this article, we will be building a crypto currency price tracker using flutter and Coingecko API. Flutter is google UI framework used to deve...">
<meta name="twitter:description" content=" Introduction In this article, we will be building a crypto currency price tracker using flutter and Coingecko API. Flutter is google UI framework used to deve...">
<meta property="og:image" content="https://res.cloudinary.com/codenjobs/image/upload/v1667147163/user/blog/cover/ssmjlqawnfmxdqzj3hrd.jpg">
<meta name="twitter:image" content="https://res.cloudinary.com/codenjobs/image/upload/v1667147163/user/blog/cover/ssmjlqawnfmxdqzj3hrd.jpg">
<meta name="image" content="https://res.cloudinary.com/codenjobs/image/upload/v1667147163/user/blog/cover/ssmjlqawnfmxdqzj3hrd.jpg">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary_large_image"></meta> */
}
