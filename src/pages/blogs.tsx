import React from "react";
import BlogList from "../components/blog/BlogList";
import { COMPANY_LOGO_WHITE, COMPANY_NAME } from "../config/environment";
import Metatags from "../components/Metatags";

const Blogs = () => {
  const meta_title = `Blogs - ${COMPANY_NAME}`;
  const meta_description = `Read blog posts from ${COMPANY_NAME} users`;

  return (
    <>
      <Metatags
        title={meta_title}
        description={meta_description}
        image={COMPANY_LOGO_WHITE}
      />

      {/* <Layout> */}
      <BlogList />
      {/* </Layout> */}
    </>
  );
};

export default Blogs;
