import React, { useCallback, useEffect, useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import SearchIcon from "@material-ui/icons/Search";

import {
  BlogListCoverWrapper,
  BlogListCover,
  BlogListHeader,
  BlogListUsernamerWrapper,
  BlogListTitle,
  BlogCategory,
  TotalMoneyVoteContainer,
  TotalMoneyVoteWrapper,
  BlogSearchListHeader,
  BlogSearchListTextInput,
  // useStyles,
  BlogSearchListCardContainer,
  BlogSearchListSecondaryWrapper,
  BlogSearchListPrimaryWrapper,
  BlogSearchListContent,
  BlogSearchListContainer,
  BlogNoSearchListHeader,
  BlogListPaginationButtonsContainer,
  BlogListPaginationNextButton,
  BlogListPaginationPrevButton,
  BlogSearchListTextInputWrapper,
  BlogListInputSearchButtonWrapper,
  BlogListInputClearButtonWrapper,
  BlogListSection,
  BlogListContainer,
} from "./BlogListCSS";
import { Chip, makeStyles, Tooltip } from "@material-ui/core";

import NoSearchList from "../../SearchList/NoSearchList";

import {
  BlogListTagContainer,
  BlogListTag,
} from "./BlogListTags/BlogListTagsCSS";

import PostedBy from "../../PostedBy";
import { formatPathTitle } from "../../../title/path";
import CentralizeChildren from "../../CentralizeChildren";
import { useRouter } from "next/router";
import Community from "../../Community";
import TopUsersForHire from "../../TopUsersForHire";
import { blogPostTitleMaxLength } from "../../../validators";
import { BlogPageBanner } from "../../SearchList/ListBanner";
import { findBlogList, findTotalBlogList } from "../../../api/blog";
import { scrollToTop } from "../../../browser/scroll";
import useBlogListForm from "../BlogListForm/useBlogListForm";
import dynamic from "next/dynamic";

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

// alert(totalBlogList);
// alert(data.length);
// alert(totalPage);
// const query = Object.fromEntries(queries);

const sortOptions = ["all", "top", "new", "old"] as const;

type SortType = typeof sortOptions[number];

const BlogList = ({ title, category, tag, sort, page }) => {
  const router = useRouter();

  const [blogList, setBlogList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sliderContent, setSliderContent] = useState([]);
  const [activeSort, setActiveSort] = useState<SortType>("all");

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
    setActiveSort(name);

    if (setFieldValue && submitForm) {
      setFieldValue("sort", name === "all" ? "" : name);
      await submitForm();
    } else {
      name === "all" ? queries.delete("sort") : queries.set("sort", "top");
      /* const redirect = `${window.location.pathname}${
        name !== "all" && `?${queries.toString()}`
      }`; */
    }
  };

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
              {sortOptions.map((s) => (
                <div onClick={() => handleSorting(s)} key={s}>
                  <button
                    className={`first-letter:capitalize pb-1.5 px-3 -mb-2 cursor-pointer ${
                      s === activeSort && "border-b-[#818181] border-b-2 "
                    }`}
                  >
                    {s}
                  </button>
                </div>
              ))}
            </div>

            <BlogSearchListContainer>
              <BlogSearchListContent>
                <BlogSearchListPrimaryWrapper>
                  {blogList.length !== 0 ? (
                    <>
                      {blogList.map(
                        ({
                          username,
                          id,
                          cover,
                          title,
                          category: blogListCategory,
                          tags,
                          published_at,
                          total_blog_post_money_voters,
                        }) => {
                          // alert(blogListCategory);
                          // const isCategroySelected = values.category === undefined ? false : values.category.value === blogListCategory;
                          const isCategroySelected =
                            values.category === blogListCategory;
                          // alert(isCategroySelected);
                          return (
                            <BlogSearchListCardContainer key={id}>
                              <BlogListContainer>
                                <BlogListSection>
                                  {cover && (
                                    <BlogListCoverWrapper
                                      href={`/blog?&title=${formatPathTitle(
                                        title
                                      )}&id=${id}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Tooltip title={title} arrow>
                                        <BlogListCover
                                          alt={"cover"}
                                          // title={title}
                                          src={cover}
                                        />
                                      </Tooltip>
                                    </BlogListCoverWrapper>
                                  )}

                                  <BlogListHeader>
                                    <BlogListUsernamerWrapper>
                                      <PostedBy
                                        username={username}
                                        published_at={published_at}
                                      />
                                    </BlogListUsernamerWrapper>
                                  </BlogListHeader>

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

                                  <a
                                    href={`/blog?&title=${formatPathTitle(
                                      title
                                    )}&id=${id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      color: "black",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <BlogListTitle>{title}</BlogListTitle>
                                  </a>

                                  <TotalMoneyVoteContainer>
                                    <TotalMoneyVoteWrapper>
                                      <img
                                        src="/static/logo.svg"
                                        style={{
                                          width: "1rem",
                                          height: "1rem",
                                        }}
                                        alt=""
                                      />
                                      <span
                                        style={{
                                          marginLeft: "0.25rem",
                                        }}
                                      >
                                        {!total_blog_post_money_voters
                                          ? 0
                                          : total_blog_post_money_voters}
                                      </span>
                                    </TotalMoneyVoteWrapper>
                                  </TotalMoneyVoteContainer>

                                  <BlogListTagContainer>
                                    {tags &&
                                      tags.map((blog_tag: string) => {
                                        const selected =
                                          blog_tag === values.tag;
                                        return (
                                          <BlogListTag
                                            key={blog_tag}
                                            onClick={async (e) => {
                                              e.preventDefault();

                                              if (!selected) {
                                                setFieldValue("tag", blog_tag);
                                                await submitForm();
                                              }
                                            }}
                                          >
                                            {!selected ? (
                                              <Chip
                                                key={blog_tag}
                                                variant="outlined"
                                                label={blog_tag}
                                                style={{
                                                  cursor: "pointer",
                                                }}
                                              />
                                            ) : (
                                              <Chip
                                                key={blog_tag}
                                                variant="outlined"
                                                label={blog_tag}
                                                style={{
                                                  cursor: "pointer",
                                                  color: "rgb(17, 160, 245)",
                                                  border:
                                                    "1px solid rgb(17, 160, 245)",
                                                }}
                                                onClick={async (e) => {
                                                  // e.preventDefault();
                                                  setFieldValue("tag", "");
                                                  await submitForm();
                                                }}
                                                onDelete={async (e) => {
                                                  // e.preventDefault();
                                                  setFieldValue("tag", "");
                                                  await submitForm();
                                                }}
                                                deleteIcon={
                                                  <CancelIcon
                                                    style={{
                                                      color:
                                                        "rgb(17, 160, 245)",
                                                    }}
                                                  />
                                                }
                                              />
                                            )}
                                          </BlogListTag>
                                        );
                                      })}
                                  </BlogListTagContainer>
                                </BlogListSection>
                              </BlogListContainer>
                            </BlogSearchListCardContainer>
                          );
                        }
                      )}

                      {blogList && totalPage > 1 && (
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
                      )}
                    </>
                  ) : (
                    <BlogNoSearchListHeader>
                      <CentralizeChildren>
                        <NoSearchList href="/blogs" message="No results" />
                      </CentralizeChildren>
                    </BlogNoSearchListHeader>
                  )}
                </BlogSearchListPrimaryWrapper>

                <BlogSearchListSecondary />
              </BlogSearchListContent>
            </BlogSearchListContainer>
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
</BlogSearchListHeader>                */
}
