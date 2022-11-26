import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BlogPostType } from "../../../types/blog.type";

import {
  BlogNoSearchListHeader,
  BlogListPaginationButtonsContainer,
  BlogListPaginationNextButton,
  BlogListPaginationPrevButton,
} from "./BlogListCSS";

import NoSearchList from "../../SearchList/NoSearchList";
import CentralizeChildren from "../../CentralizeChildren";
import { useRouter } from "next/router";
import Community from "../../Community";
import TopUsersForHire from "../../TopUsersForHire";
import { BlogPageBanner } from "../../SearchList/ListBanner";
import { findBlogList, findTotalBlogList } from "../../../api/blog";
import { scrollToTop } from "../../../browser/scroll";
import useBlogListForm from "../BlogListForm/useBlogListForm";
import moment from "moment";
import { Search } from "@material-ui/icons";
import { BlogSpotlight } from "../../Homepage/Spotlight/Cards";
import Carousel from "../../Elements/carousel";
import NavBar from "./Navbar";

type Props = {
  topPosts: BlogPostType[];
  handleSubmit: (e: React.SyntheticEvent) => void;
  value: string;
  onBlur: (e) => void;
  handleChange: (e) => void;
};

const spotlight = {
  username: "codenjobs",
  company_name: "Offchain Labs",
  company_logo:
    "https://res.cloudinary.com/codenjobs/image/upload/v1667044158/user/company/logo/brtm3e7jtc79nrkccmit.png",
  job_id: "8e46c111-bdf5-4afe-846b-b8ada7ad0acc",
  job_title: "Blockchain Developer",
  job_location: "Remote",
  job_type: "Full-Time",
  job_category: "Blockchain",
  job_skills: ["Blockchain", "Solidity", "Ethereum"],
  job_salary: "Not listed",
  job_pay_in_cryptocurrency: false,
  job_created_at: "2022-10-29T11:49:18.913013",
  job_updated_at: null,
  job_published_at: "2022-10-29T11:53:48.245998",
};

const BlogSidebar = ({
  topPosts,
  handleSubmit,
  handleChange,
  onBlur,
  value,
}: Props) => {
  return (
    <aside className="w-full p-10 space-y-5 sticky top-0">
      <form onSubmit={handleSubmit}>
        <div className="border border-black p-3 flex items-center overflow-hidden rounded-full">
          <Search />
          <input
            className="outline-none px-2 text-sm"
            type="text"
            name="title"
            placeholder="Search for blog post..."
            id="title"
            onChange={handleChange}
            value={value}
            onBlur={onBlur}
          />
        </div>
      </form>
      <div className="px-5 space-y-14">
        <div className="space-y-5">
          <h3 className="text-sm text-black font-medium">Staff Pick</h3>
          <Community list={topPosts.slice(0, 5)} />
        </div>
        <div className="border-b-2" />
        <div className="space-y-5">
          <h3 className="text-sm text-black font-medium">Trending content</h3>
          <Community list={topPosts.slice(5)} />
        </div>
        <article className="list-banner blog-mod">
          <Carousel dots autoplay autoplaySpeed={2500} arrows={false}>
            {new Array(4).fill("rehkmansa").map((n, idx) => (
              <BlogSpotlight key={idx} {...spotlight} />
            ))}
          </Carousel>
        </article>
      </div>

      {/* <TopUsersForHire limit={10}  /> */}
    </aside>
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
  const [topPosts, setTopPosts] = useState([]);

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

  const fetchTopPosts = () => {
    findBlogs({
      currentPage: 1,
      blogsPerPage: 10,
      title: "",
      category: "",
      tag: "",
      sort: "top",
      setBlogList: setTopPosts,
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
    fetchTopPosts();
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
          <NavBar />
          <BlogPageBanner posts={sliderContent} />
          <section className="container sm:min-h-screen mx-auto px-8 sm:px-20 font-manrope flex gap-10 justify-between">
            <div className="py-10 sm:flex-[0.8]">
              <div className="flex px-5 pb-1.5 border-b-2 py-5">
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
              <div className="space-y-8 text-[#6B6868]">
                {blogList.length !== 0 ? (
                  <>
                    {blogList.map((blog) => (
                      <article
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
                              {moment.utc(blog.updated_at).format("MMM DD, YY")}
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
                      </article>
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
            </div>
            <div className="min-w-[300px] sm:flex-[0.4] bg-white ">
              <BlogSidebar
                handleSubmit={handleSubmit}
                topPosts={topPosts}
                value={values.title}
                handleChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default BlogList;
