import React, { useEffect, useState } from "react";

import CancelIcon from "@material-ui/icons/Cancel";

import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import DirectionsIcon from "@material-ui/icons/Directions";
// import SettingsIcon from '@material-ui/icons/Settings';

import Search from "baseui/icon/search";
import DeleteAlt from "baseui/icon/delete-alt";

import {
  BlogListContainer,
  BlogListSection,
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
} from "./BlogListCSS";
// import Skill from "../Skill";
// import { API } from "../../config/environment";
import { Chip, makeStyles, Tooltip } from "@material-ui/core";
// import { Avatar } from "baseui/avatar";
// import { UsernameWrapper } from "../UserProfileCard/UserProfileCardCSS";

import NoSearchList from "../../SearchList/NoSearchList";

// import { blogOptions, yes, yesOrNo } from "../../../typeDefinitions/select";
import {
  BlogListTagContainer,
  BlogListTag,
} from "./BlogListTags/BlogListTagsCSS";
// import { PostedBy } from "../BlogHeader/BlogHeaderCSS";

import PostedBy from "../../PostedBy";
import { formatPathTitle } from "../../../title/path";
import CentralizeChildren from "../../CentralizeChildren";
import { useRouter } from "next/router";
// import { blue } from "../../../design/colors";
import Community from "../../Community";
import TopUsersForHire from "../../TopUsersForHire";
import { blogPostTitleMaxLength } from "../../../validators";
import BlogSearchListSkeleton from "./BlogSearchListSkeleton";
import ListBanner, { BlogPageBanner } from "../../SearchList/ListBanner";
import ListBySortOptionNavbar from "../../ListBySortOptionNavbar";
import { findBlogList, findTotalBlogList } from "../../../api/blog";
import PrimarySpinner from "../../spinners/PrimarySpinner";
import { formatBlogListTitle } from "../../../title/blog";
import { black, green } from "../../../design/colors";
import { scrollToTop } from "../../../browser/scroll";
import useBlogListForm from "../BlogListForm/useBlogListForm";
import { blue } from "@mui/material/colors";

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

  if (error) {
    console.log("findBlogList error");
    console.error(error);
  }

  if (data) {
    const { blogList, totalBlogList } = data;
    // setBlogList(data);
    setBlogList(blogList);
    // alert(totalBlogList);
    // alert(data.length);
    setTotalPage(Math.ceil(totalBlogList / blogsPerPage));
  }
};

const BlogList = ({ title, category, tag, sort, page }) => {
  const router = useRouter();

  const [blogList, setBlogList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const blogsPerPage = 10;

  let currentPage;
  if (page === null || page === 1) {
    currentPage = 1;
  } else {
    currentPage = page;
  }

  if (currentPage > totalPage) {
    // alert(totalPage);
    if (currentPage !== 1) {
      const queries = new URLSearchParams(window.location.search);
      // const query = Object.fromEntries(queries);
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

    isSubmitting,
    submitForm,
  } = useBlogListForm({
    title,
    category,
    tag,
    sort,
  });

  // console.log("values");
  // console.log(values);

  useEffect(() => {
    findBlogs({
      currentPage,
      blogsPerPage,
      title,
      category,
      tag,
      sort,
      setBlogList,
      setTotalPage,
    });
  }, [page, title, category, tag, sort]);

  if (blogList.length === 0) {
    return (
      <>
        <BlogPageBanner posts={blogList.slice(0, 3)} />

        <ListBySortOptionNavbar
          includeTopOption={true}
          setFieldValue={setFieldValue}
          submitForm={submitForm}
        />

        <BlogSearchListContainer>
          <BlogSearchListContent>
            <BlogSearchListPrimaryWrapper>
              <BlogNoSearchListHeader>
                <CentralizeChildren>
                  <NoSearchList href="/blogs" message="No results" />
                </CentralizeChildren>
              </BlogNoSearchListHeader>
              <BlogSearchListSkeleton />
              <BlogSearchListSkeleton />
              <BlogSearchListSkeleton />
              <BlogSearchListSkeleton />
              <BlogSearchListSkeleton />
              <BlogSearchListSkeleton />
            </BlogSearchListPrimaryWrapper>

            <BlogSearchListSecondary />
          </BlogSearchListContent>
        </BlogSearchListContainer>
      </>
    );
  }

  // const classes = useStyles();

  return (
    <>
      <BlogPageBanner posts={blogList.slice(0, 3)} />

      <ListBySortOptionNavbar
        includeTopOption={true}
        setFieldValue={setFieldValue}
        submitForm={submitForm}
      />

      <BlogSearchListContainer>
        <BlogSearchListContent>
          <BlogSearchListPrimaryWrapper>
            <BlogSearchListHeader>
              <form
                style={{
                  width: "100%",
                }}
                onSubmit={handleSubmit}
              >
                <BlogSearchListTextInputWrapper>
                  {/* <IconButton
                    type="submit"
                    aria-label="search"
                    // className={classes.searchButton} 
                  > */}
                  <BlogListInputSearchButtonWrapper
                    aria-label="search"
                    click={async () => {
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

            {blogList.map(
              (
                {
                  username,

                  id,
                  cover,
                  title,

                  category: blogListCategory,
                  tags,

                  // created_at,
                  // updated_at,
                  published_at,

                  total_blog_post_money_voters,
                },
                index
              ) => {
                // alert(blogListCategory);
                // const isCategroySelected = values.category === undefined ? false : values.category.value === blogListCategory;
                const isCategroySelected = values.category === blogListCategory;
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
                              setFieldValue("category", blogListCategory);

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
                              const selected = blog_tag === values.tag;
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
                                        border: "1px solid rgb(17, 160, 245)",
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
                                            color: "rgb(17, 160, 245)",
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
          </BlogSearchListPrimaryWrapper>

          <BlogSearchListSecondary />
        </BlogSearchListContent>
      </BlogSearchListContainer>
    </>
  );
};

export default BlogList;
