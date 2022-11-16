import React from "react";
import axios from "axios";
// import globby from "globby";

// import fs from "fs";

import { HTTPS, COMPANY_WEBSITE, API } from "../config/environment";

// XML
const Sitemap = () => {
    
};

// https://nextjs.org/docs/advanced-features/custom-error-page
export const getServerSideProps = async ({ res }) => {
  const basePath = `${HTTPS}${COMPANY_WEBSITE}`;
  const today = new Date().toISOString();

  const amp = "&amp;"; // & doens't work at xml

  // frequencies
  // const always = "always";
  // const hourly = "hourly";
  const daily = "daily";
  const weekly = "weekly";
  const monthly = "monthly";
  // const yearly = "yearly";
  // const never = "never";

  // console.log("Start to build sitemap.xml");

  // PYTHON_ENV should be "prod" at local dev server

  // I can't redirect it to another website
  // https://developers.google.com/search/docs/advanced/robots/robots_txt
  // Use pg connection with postgresql javascript package directly here?
  // Test to see I can make it with heroku server

  // const { data: job_list } = await axios.get("http://localhost:8000/api/v1/job/sitemap"); // Should use JavaScript connection here later
  // const { data: job_list } = await axios.get(`${API}/api/v1/job/sitemap`); // Should use JavaScript connection here later
  // console.log(job_list);
  // const { data: user_list } = await axios.get(`${API}/api/v1/user/sitemap`); // Should use Javascript connection here later
  // const { data: user_list } = await axios.get("http://localhost:8000/api/v1/user/sitemap"); // Should use Javascript connection here later
  // console.log(job_list);

  // const dynamicPages 

  const { data } = await axios.get(`${API}/api/v1/sitemap`);
  // console.log(data);

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

    return `<url>
      <loc>${profile}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${daily}</changefreq>
      <priority>1</priority>
    </url>

    <url>
      <loc>${blogs}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${weekly}</changefreq>
      <priority>1</priority>
    </url>

    <url>
      <loc>${jobs}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${monthly}</changefreq>
      <priority>1</priority>
    </url>

    <url>
        <loc>${followers}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${daily}</changefreq>
        <priority>1</priority>
    </url>`;
  }).join("");

  const jobListSitemap = job_list && job_list.length !== 0 && job_list.map(({ 
    id, 
    title, 
    updated_at, 
    published_at,
    created_at, 
  }) => {
    // const loc = `${https}${COMPANY_WEBSITE}/job?title=${title}&id=${id}`.split(" ").join("-");
    const loc = `${basePath}/job?title=${title.replace("&", amp)}${amp}id=${id}`.split(" ").join("-");
    // console.log(loc);
    // new Date().toISOString();
    // <lastmod>${moment(new Date(updated_at || created_at)).format("YYYY-MM-DD")}</lastmod>
    
    return `<url>
      <loc>${loc}</loc>
      <lastmod>${new Date(updated_at || published_at || created_at).toISOString()}</lastmod>
      <changefreq>${monthly}</changefreq>
      <priority>1</priority>
    </url>`;
  }).join("");

  const blogListSitemap = blog_list && blog_list.length !== 0 && blog_list.map(({ 
    id, 
    title, 
    published_at,
    updated_at, 
    created_at, 
  }) => {
    // const loc = `${https}${COMPANY_WEBSITE}/job?title=${title}&id=${id}`.split(" ").join("-");
    const loc = `${basePath}/blog?title=${title}${amp}id=${id}`.split(" ").join("-");
    // console.log(loc);
    // new Date().toISOString();
    // <lastmod>${moment(new Date(updated_at || created_at)).format("YYYY-MM-DD")}</lastmod>

    return `<url>
      <loc>${loc}</loc>
      <lastmod>${new Date(updated_at || published_at || created_at).toISOString()}</lastmod>
      <changefreq>${monthly}</changefreq>
      <priority>1</priority>
    </url>`;
  }).join("");

  // console.log(blogListSitemap);
  
  // console.log(dynamicPages);

  // const users = 
  // const jobs =
  // const blogs =

  // Frontend
  // Ignore Next.js specific files (e.g., _app.js) and API routes.

  // let staticPages;
  // if (NODE_ENV === "development") {
  //   // This doesn't work with Next js currenctly.
  //   const staticPagesPromise = await globby([
  //     "src/pages/*.tsx",
  //     "!src/pages/_*.tsx",
  //     "src/pages/register/index.tsx"
  //   ]);

  //   staticPages = staticPagesPromise
  //     .filter((staticPage) => {
  //       // console.log(staticPage);
  //       return ![
  //         "src/pages/sitemap.txt.tsx",
  //         "src/pages/sitemap.xml.tsx",
  //         "src/pages/update-email.tsx",
  //       ].includes(staticPage);
  //     }).map((page) => {
  //       const path = page
  //         .replace("pages", "")
  //         .replace(".tsx", "")
  //         .replace("src", "")
  //         .replace("index", "")
  //         .replace("/", "");

  //       const route = path === "/index" ? "" : path;

  //       const loc = `${basePath}${route}`;

  //       // <lastmod>${today}</lastmod>
  //       return `
  //         <url>
  //             <loc>${loc}</loc>
  //             <lastmod>${today}</lastmod>
  //             <changefreq>${monthly}</changefreq>
  //             <priority>1</priority>
  //         </url>
  //       `;
  //     }).join("");
  // } else {
  //   const staticPages = fs
  //     .readdirSync("pages")
  //     .filter((staticPage) => {
  //       return ![
  //         "_app.js",
  //         "_document.js",
  //         "_error.js",
  //         "sitemap.xml.js",
  //       ].includes(staticPage);
  //     })
  //     .map((staticPagePath) => {
  //       return `${basePath}/${staticPagePath}`;
  //     });
  // }

  // 'https://www.codenjobs.com/_app.tsx',
  // 'https://www.codenjobs.com/_document.tsx',
  // 'https://www.codenjobs.com/auth',
  // 'https://www.codenjobs.com/blog',
  // 'https://www.codenjobs.com/blogs.tsx',
  // 'https://www.codenjobs.com/forhire.tsx',
  // 'https://www.codenjobs.com/hiring.tsx',
  // 'https://www.codenjobs.com/index.tsx',
  // 'https://www.codenjobs.com/job',
  // 'https://www.codenjobs.com/jobs.tsx',
  // 'https://www.codenjobs.com/message',
  // 'https://www.codenjobs.com/register',
  // 'https://www.codenjobs.com/reset-password',
  // 'https://www.codenjobs.com/settings',
  // 'https://www.codenjobs.com/signin.tsx',
  // 'https://www.codenjobs.com/sitemap.txt.tsx',
  // 'https://www.codenjobs.com/sitemap.xml.tsx',
  // 'https://www.codenjobs.com/update-email.tsx',
  // 'https://www.codenjobs.com/user'

  // const staticPages = fs
  // .readdirSync("./src/pages") // Top level dir
  // .filter((staticPage) => {
  //   // console.log(staticPage);

  //   return ![
  //     "_app.tsx",
  //     "_document.tsx",
  //     "auth",
  //     "job",
  //     "blog",
  //     "message",
  //     // "index.tsx",
  //     "sitemap.xml.tsx",
  //     "sitemap.txt.tsx",
  //     "user",
  //     "update-email.tsx",
  //     "settings",
  //     "reset-password"
  //   ].includes(staticPage);
  // })
  // .map((staticPagePath) => {
  //   const lastPath = staticPagePath
  //     .replace("pages", "")
  //     .replace(".tsx", "")
  //     .replace("src", "")
  //     .replace("index", "")
  //     .replace("/", "");
  //   return `${basePath}/${lastPath}`;
  // }).map((url) => {
  //   console.log(url);
  //   return `
  //     <url>
  //       <loc>${url}</loc>
  //       <lastmod>${new Date().toISOString()}</lastmod>
  //       <changefreq>monthly</changefreq>
  //       <priority>1.0</priority>
  //     </url>
  //   `;
  // }).join("")

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
  ].map((url) => {
    console.log(url);
    return `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    `;
  }).join("");

  // console.log(staticPages);    

  // console.log("blogListSitemap === false ? "" : blogListSitemap");
  // console.log(blogListSitemap === false ? "" : blogListSitemap);

  const unwrapStringOrEmpty = (option) => {
    if (option === false) {
      return "";
    } else {
      return option;
    }
  };

  // console.log(staticPages);
  // console.log(dynamicPages);
  // ${staticPages}
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages}
      ${unwrapStringOrEmpty(userListSitemap)}
      ${unwrapStringOrEmpty(jobListSitemap)}
      ${unwrapStringOrEmpty(blogListSitemap)}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  
  res.write(xml);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;