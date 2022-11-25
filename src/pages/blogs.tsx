import React from "react";
import Layout from "../components/layouts";
import BlogList from "../components/blog/BlogList";
import Head from "next/head";
import {
  COMPANY_LOGO,
  COMPANY_LOGO_WHITE,
  COMPANY_NAME,
} from "../config/environment";
import useBlogListForm from "../components/blog/BlogListForm/useBlogListForm";
import Metatags from "../components/Metatags";

const Blogs = ({
  title,
  category,
  tag,

  page,

  sort,
}) => {
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

const unwrapOrElesString = (str?: string) => {
  return !str ? "" : str;
};

export async function getServerSideProps({ query }) {
  try {
    const { title, category, tag, page, sort } = query;

    return {
      props: {
        title: unwrapOrElesString(title),
        category: unwrapOrElesString(category),
        tag: unwrapOrElesString(tag),

        page: page || 1,

        sort: unwrapOrElesString(sort),
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
