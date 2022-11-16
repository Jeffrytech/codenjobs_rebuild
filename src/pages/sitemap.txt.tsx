import React from "react";
import axios from "axios";
// import globby from "globby";
// import fs from "fs";

import { HTTPS, COMPANY_WEBSITE, API, NODE_ENV } from "../config/environment";
// import moment from "moment";
// import { update } from "lodash";
// import moment from "moment";

// TXT
const SitemapTXT = () => {
    
};

// https://nextjs.org/docs/advanced-features/custom-error-page
export const getServerSideProps = async ({ res }) => {
  const basePath = `${HTTPS}${COMPANY_WEBSITE}`;
  const today = new Date().toISOString();

  // const amp = "&amp;"; // & doens't work at xml
  const amp = "&"; // & doens't work at xml

  // frequencies
  // const always = "always";
  // const hourly = "hourly";
  // const daily = "daily";
  // const weekly = "weekly";
  // const monthly = "monthly";
  // const yearly = "yearly";
  // const never = "never";

  const { data } = await axios.get(`${API}/api/v1/sitemap`);
  const { 
    user_list, 
    job_list,
    blog_list, 
  } = data;

  const userListSitemap = user_list && user_list.length !== 0 && user_list.map(({ username }) => {
    const profile = `${basePath}/user/${username}`;

    const blogs = `${profile}/blogs`;
    const jobs = `${profile}/jobs`;
    const followers = `${profile}/followers`;

    return `${profile}\n${blogs}\n${jobs}\n${followers}\n`;
  }).join("");

  const blogListSitemap = blog_list && blog_list.length !== 0 && blog_list.map(({
    id,
    title,
    // published_at,
    // updated_at, 
    // created_at, 
  }) => {
    // const loc = `${https}${COMPANY_WEBSITE}/job?title=${title}&id=${id}`.split(" ").join("-");
    const loc = `${basePath}/blog?title=${title}${amp}id=${id}`.split(" ").join("-");
    // console.log(loc);
    // new Date().toISOString();
    // <lastmod>${moment(new Date(updated_at || created_at)).format("YYYY-MM-DD")}</lastmod>

    return `${loc}\n`;
  }).join("");

  const jobListSitemap = job_list && job_list.length !== 0 && job_list.map(({ 
    id, 
    title, 
  }) => {
    const loc = `${basePath}/job?title=${title}${amp}id=${id}`.split(" ").join("-");

    return `${loc}\n`;
  }).join("");

  // console.log(dynamicPages);

  // const users = 
  // const jobs =
  // const blogs =

  // Frontend
  // Ignore Next.js specific files (e.g., _app.js) and API routes.

  const staticPages = [
    COMPANY_WEBSITE,
    `${COMPANY_WEBSITE}/register`,
    `${COMPANY_WEBSITE}/signin`,
    `${COMPANY_WEBSITE}/jobs`,
    `${COMPANY_WEBSITE}/blogs`,
    `${COMPANY_WEBSITE}/forhire`,
    `${COMPANY_WEBSITE}/hiring`,
    `${COMPANY_WEBSITE}/pageviews`,
    // `${COMPANY_WEBSITE}/policies/terms`,
    // `${COMPANY_WEBSITE}/policies/privacy`,
    // `${COMPANY_WEBSITE}/policies/code-of-conduct`,
  ].map((loc) => {
    return `${loc}\n`;
  }).join("");
    
  const unwrapStringOrEmpty = (option) => {
    if (option === false) {
      return "";
    } else {
      return option;
    }
  };

  const txt = `${staticPages}${unwrapStringOrEmpty(userListSitemap)}${unwrapStringOrEmpty(blogListSitemap)}${unwrapStringOrEmpty(jobListSitemap)}`;

  res.setHeader("Content-Type", "text/txt");
  res.write(txt);
  res.end();

  return {
    props: {},
  };
};

export default SitemapTXT;
