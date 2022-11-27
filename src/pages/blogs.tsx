import React from "react";
import BlogList from "../components/blog/BlogList";
import { COMPANY_LOGO_WHITE, COMPANY_NAME } from "../config/environment";
// import useBlogListForm from "../components/blog/BlogListForm/useBlogListForm";
import Metatags from "../components/Metatags";

const Blogs = ({ title, category, tag, page, sort }) => {
  const meta_title = `Blogs - ${COMPANY_NAME}`;
  const meta_description = `Read blog posts from ${COMPANY_NAME} users`;

  return (
    <>
      <Metatags
        title={meta_title}
        description={meta_description}
        image={COMPANY_LOGO_WHITE}
      />

      <>
        <BlogList
          title={title}
          category={category}
          tag={tag}
          sort={sort}
          page={parseInt(page)}
          // sort={sort}
        />
      </>
    </>
  );
};

const unwrapString = (str: string) => str || "";

export async function getServerSideProps({ query }) {
  try {
    const { title, category, tag, page, sort } = query;

    return {
      props: {
        title: unwrapString(title),
        category: unwrapString(category),
        tag: unwrapString(tag),
        page: page || 1,
        sort: unwrapString(sort),
      },
    };
  } catch (error) {
    return {
      // Solve unserialable json problem with this.
      props: {
        data: null,
        // error,
      },
    };
  }
}

export default Blogs;
