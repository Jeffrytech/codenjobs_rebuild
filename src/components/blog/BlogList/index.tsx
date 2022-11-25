import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BlogPostType } from "../../../types/blog.type";

import {
  BlogSearchListSecondaryWrapper,
  BlogNoSearchListHeader,
  BlogListPaginationButtonsContainer,
  BlogListPaginationNextButton,
  BlogListPaginationPrevButton,
} from "./BlogListCSS";
import { Chip, makeStyles, Tooltip } from "@material-ui/core";

import NoSearchList from "../../SearchList/NoSearchList";

// import { formatPathTitle } from "../../../title/path";
// import dynamic from "next/dynamic";
// import { blogPostTitleMaxLength } from "../../../validators";

import CentralizeChildren from "../../CentralizeChildren";
import { useRouter } from "next/router";
import Community from "../../Community";
import TopUsersForHire from "../../TopUsersForHire";
import { BlogPageBanner } from "../../SearchList/ListBanner";
import { findBlogList, findTotalBlogList } from "../../../api/blog";
import { scrollToTop } from "../../../browser/scroll";
import useBlogListForm from "../BlogListForm/useBlogListForm";
import moment from "moment";

const BlogSearchListSecondary = () => {
  return (
    <BlogSearchListSecondaryWrapper>
      <Community list={"blog"} />

      <TopUsersForHire limit={10} list={"blog"} />
    </BlogSearchListSecondaryWrapper>
  );
};

const findBlogs = async ({
  currentPage,
  blogsPerPage,
  title,
  category,
  tag,
  sort,
  setBlogList,
  setTotalPage,
}) => {
  const skip = (currentPage - 1) * blogsPerPage;
  const limit = blogsPerPage;

  const { data, error } = await findBlogList(
    title,
    category,
    tag,
    sort,
    skip,
    limit
  );

  console.log(title, category, tag, sort, skip, limit, "this is something");

  if (error) {
    console.log("findBlogList error");
    console.error(error);
  }

  if (data) {
    const { blogList, totalBlogList } = data;
    setTotalPage(Math.ceil(totalBlogList / blogsPerPage));
    setBlogList(blogList);

    return blogList;
  }
};

/*

  check if tag is selected by destructuring from values
onClick={async (e) => {
                                              e.preventDefault();

                                              if (!selected) {
                                                setFieldValue("tag", blog_tag);
                                                await submitForm();
                                              }

                                              if (selected) {
                                                // e.preventDefault();
                                                setFieldValue("tag", "");
                                                await submitForm();
                                              }
                                            }} */

// alert(totalBlogList);
// alert(data.length);
// alert(totalPage);
// const query = Object.fromEntries(queries);

// url for blogpost /blog?&title=${formatPathTitle(title)}&id=${id}

// {!total_blog_post_money_voters ? 0 : total_blog_post_money_voters}

const sortOptions = ["all", "top", "new", "old"] as const;

type SortType = typeof sortOptions[number];

type PostedByProps = {
  username: string;
  published_at: string;
};
const PostedBy = ({ username, published_at }: PostedByProps) => (
  <div className="flex items-center gap-1.5 text-sm font-manrope text-[#6B6868]">
    <div className="sm:block hidden">
      <img src="/static/icons/avatar.png" alt="" />
    </div>
    <div className="flex flex-col sm:text-xs space-y-1">
      <p className="sm:text-black first-letter:capitalize w-fit">
        {username}
        <span className="sm:pl-0 pl-2  w-fit">
          {" "}
          . {moment.utc(published_at).format("DD MMM")}
        </span>
      </p>
      <div className="sm:block hidden">Software Developer</div>
    </div>
  </div>
);

const BlogList = ({ title, category, tag, sort, page }) => {
  const router = useRouter();

  const [blogList, setBlogList] = useState<BlogPostType[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sliderContent, setSliderContent] = useState([]);

  console.log(sort);
  const blogsPerPage = 10;

  let currentPage: number;
  if (page === null || page === 1) {
    currentPage = 1;
  } else {
    currentPage = page;
  }

  if (currentPage > totalPage) {
    if (currentPage !== 1) {
      const queries = new URLSearchParams(window.location.search);

      router.push({
        pathname: window.location.pathname,
      });
    }
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setFieldValue,
    submitForm,
  } = useBlogListForm({
    title,
    category,
    tag,
    sort,
  });

  const handleSorting = async (name: SortType) => {
    const queries = new URLSearchParams(window.location.search);

    if (setFieldValue && submitForm) {
      setFieldValue("sort", name === "all" ? "" : name);
      await submitForm();
    } else {
      name === "all" ? queries.delete("sort") : queries.set("sort", "top");
    }
  };

  const sortOption: SortType = useMemo(
    () => values.sort || "all",
    [values.sort]
  );

  const fetchSliderContent = () => {
    findBlogs({
      currentPage: 1,
      blogsPerPage: 6,
      title: "",
      category: "",
      tag: "",
      sort: "new",
      setBlogList: setSliderContent,
      setTotalPage: () => {},
    });
  };

  const findBlogsMethod = useCallback(async () => {
    await findBlogs({
      currentPage,
      blogsPerPage,
      title,
      category,
      tag,
      sort,
      setBlogList,
      setTotalPage,
    });
    setLoading(false);
  }, [category, currentPage, sort, tag, title]);

  useEffect(() => {
    fetchSliderContent();
  }, []);

  useEffect(() => {
    findBlogsMethod();
  }, [findBlogsMethod]);

  return (
    <main className="sm:bg-[#F8F6F3] bg-white">
      {loading ? (
        <div className="h-screen w-screen flex items-center justify-center" />
      ) : (
        <>
          <BlogPageBanner posts={sliderContent} />
          <section className="container mx-auto px-8 sm:px-20 font-manrope">
            <div className="flex px-5 pb-1.5 border-b-2">
              +
              {sortOptions.map((name) => (
                <div onClick={() => handleSorting(name)} key={name}>
                  <button
                    className={`first-letter:capitalize pb-1.5 px-3 -mb-2 cursor-pointer ${
                      name === sortOption && "border-b-[#818181] border-b-2"
                    }`}
                  >
                    {name}
                  </button>
                </div>
              ))}
            </div>

            <>
              <div className="py-5 sm:flex justify-between gap-4">
                <div className="space-y-5 sm:flex-[0.8] text-[#6B6868]">
                  {blogList.length !== 0 ? (
                    <>
                      {blogList.map((blog) => (
                        <div
                          className="flex items-center justify-between gap-4 py-8 pb-16 border-b-2"
                          key={blog.id}
                        >
                          <div className="min-w-1/2 space-y-3">
                            <PostedBy
                              username={blog.username}
                              published_at={blog.published_at}
                            />
                            <div className="space-y-3 sm:max-w-2xl">
                              <h4 className="text-lg font-extrabold text-black">
                                {blog.title}
                              </h4>
                              <div className="flex items-center gap-2">
                                {/* {blog.tags.map((d) => (
                                  <p key={d}>{d}</p>
                                ))} */}
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Adipisci architecto culpa
                                cupiditate laboriosam dicta eligendi dolorum?
                                Necessitatibus neque corporis dicta.
                              </div>
                            </div>
                            <div className="flex items-center text-xs gap-2">
                              <button className=" bg-[#E6E6E6] text-sm px-4 py-1 rounded-[20px]">
                                {blog.category || "Custom"}
                              </button>
                              <p className="text-black">
                                Last updated:{" "}
                                {moment
                                  .utc(blog.updated_at)
                                  .format("MMM DD, YY")}
                              </p>
                              <p className="text-black">
                                {blog.tags?.[0] || "Selected for you"}
                              </p>
                            </div>
                          </div>
                          {blog.cover && (
                            <div className="">
                              <img
                                className="w-[180px] h-[180px] rounded object-cover"
                                src={blog.cover}
                                alt=""
                              />
                            </div>
                          )}
                        </div>
                      ))}

                      {blogList && totalPage > 1 && (
                        <div className="w-full border">
                          <BlogListPaginationButtonsContainer
                            style={{
                              paddingLeft: "2rem",
                              background: "none",
                              borderRadius: "0.5rem",
                              marginBottom: "1rem",
                              border: "none",
                              padding: "0.25rem",
                            }}
                          >
                            {page !== 1 && (
                              <BlogListPaginationPrevButton
                                onClick={async (e) => {
                                  e.preventDefault();

                                  const prevPage = page - 1;
                                  const queries = new URLSearchParams(
                                    window.location.search
                                  );
                                  queries.set("page", prevPage.toString());

                                  const query = Object.fromEntries(queries);
                                  router.push({
                                    pathname: window.location.pathname,
                                    query,
                                  });
                                  scrollToTop();
                                }}
                              >
                                Prev
                              </BlogListPaginationPrevButton>
                            )}
                            {page !== totalPage && (
                              <BlogListPaginationNextButton
                                onClick={async (e) => {
                                  e.preventDefault();

                                  const nextPage = page + 1;
                                  const queries = new URLSearchParams(
                                    window.location.search
                                  );
                                  queries.set("page", nextPage.toString());

                                  const query = Object.fromEntries(queries);
                                  router.push({
                                    pathname: window.location.pathname,
                                    query,
                                  });
                                  scrollToTop();
                                }}
                              >
                                Next
                              </BlogListPaginationNextButton>
                            )}
                          </BlogListPaginationButtonsContainer>
                        </div>
                      )}
                    </>
                  ) : (
                    <BlogNoSearchListHeader>
                      <CentralizeChildren>
                        <NoSearchList href="/blogs" message="No results" />
                      </CentralizeChildren>
                    </BlogNoSearchListHeader>
                  )}
                </div>

                <div className="min-w-[300px] flex-[0.4] sm: pl-5">
                  <BlogSearchListSecondary />
                </div>
              </div>
            </>
          </section>
        </>
      )}
    </main>
  );
};

export default BlogList;
{
  /* <ListBySortOptionNavbar
includeTopOption={true}
setFieldValue={setFieldValue}
submitForm={submitForm}
/> */
}

{
  /* <IconButton
type="submit"
aria-label="search"
// className={classes.searchButton} 
> 


<BlogSearchListHeader>
<form
style={{
width: "100%",
}}
onSubmit={handleSubmit}
>
<BlogSearchListTextInputWrapper>
<BlogListInputSearchButtonWrapper
aria-label="search"
click={async (e) => {
e.preventDefault();
await submitForm();
}}
>
<SearchIcon />
</BlogListInputSearchButtonWrapper>

<BlogSearchListTextInput
id="title"
name="title"
type="text"
placeholder="Type a blog title"
maxLength={blogPostTitleMaxLength}
value={values.title}
onChange={handleChange}
onBlur={handleBlur}
/>

<BlogListInputClearButtonWrapper>
<CancelIcon
onClick={(e) => {
e.preventDefault();

router.push("/blogs");
scrollToTop();
}}
type="button"
aria-label="reset form"
/>
</BlogListInputClearButtonWrapper>
</BlogSearchListTextInputWrapper>
</form>
</BlogSearchListHeader>               

<BlogCategory
                                    $isCategorySelected={isCategroySelected}
                                    onClick={async () => {
                                      if (isCategroySelected) {
                                        // // TODO
                                        // // Improve this
                                        // const queries = new URLSearchParams(window.location.search);
                                        // queries.delete("category");
                                        // queries.delete("page");
                                        // // // const redirect = `${window.location.pathname}?${queries.toString()}`;
                                        // const redirect = `/blogs?${queries.toString()}`;
                                        // // // @ts-ignore
                                        // // // window.location = redirect;
                                        // router.push(redirect);
                                        setFieldValue("category", "");

                                        await submitForm();
                                      } else {
                                        // if (blogListCategory === "Else") {
                                        //   setFieldValue("category", { label: "Not in the list", value: blogListCategory });
                                        // } else {
                                        //   setFieldValue("category", { label: blogListCategory, value: blogListCategory });
                                        // }
                                        setFieldValue(
                                          "category",
                                          blogListCategory
                                        );

                                        await submitForm();
                                      }
                                    }}
                                  >
                                    {blogListCategory === "Else"
                                      ? "Not in the list"
                                      : blogListCategory}
                                  </BlogCategory>

*/
}
/* const redirect = `${window.location.pathname}${
        name !== "all" && `?${queries.toString()}`
      }`; */
