import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BlogPostType } from "../../../types/blog.type";

import { BlogNoSearchListHeader } from "./BlogListCSS";

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
import { ArrowForwardIosOutlined, Search } from "@material-ui/icons";
import { BlogSpotlight } from "../../Homepage/Spotlight/Cards";
import Carousel from "../../Elements/carousel";
import NavBar from "./Navbar";
import { BlogArticle } from "./BlogArticle";

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
    <aside className="w-full pb-10 sm:p-5 sm:py-10 xl:p-10 space-y-5 sticky top-0">
      <form className="sm:block hidden" onSubmit={handleSubmit}>
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
      <div className="sm:px-5 px-2 space-y-14">
        <div className="space-y-5">
          <h3 className="text-sm text-black font-medium">Staff Pick</h3>
          <Community list={topPosts.slice(0, 5)} />
        </div>
        <div className="border-b-2" />
        <div className="space-y-5">
          <h3 className="text-sm text-black font-medium">Trending content</h3>
          <Community list={topPosts.slice(5, 10)} />
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

// const sortOptions = ["all", "top", "new", "old"] as const;
const sortOptions = ["for you", "following"];

type SortType = typeof sortOptions[number];

const serializeValue = (str: any) => str || "";

const BlogList = () => {
  const {
    query: { title, category, tag, sort, page },
    push,
  } = useRouter();

  const [blogList, setBlogList] = useState<BlogPostType[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [topPosts, setTopPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 10;

  let currentPage: number;
  if (page === undefined || page === "1") {
    currentPage = 1;
  } else {
    currentPage = Number(page);
  }

  if (currentPage > totalPage) {
    if (currentPage !== 1) {
      push({
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

  const handlePagination = async (target: "prev" | "next") => {
    const num = page || 1;
    const pageNum = target === "prev" ? Number(num) - 1 : Number(num) + 1;
    const queries = new URLSearchParams(window.location.search);

    queries.set("page", pageNum.toString());
    const query = Object.fromEntries(queries);

    push({
      pathname: window.location.pathname,
      query,
    });
    scrollToTop();
  };

  const fetchBlogPost = useCallback(async () => {
    await findBlogs({
      currentPage,
      blogsPerPage,
      title: serializeValue(title),
      category: serializeValue(category),
      tag: serializeValue(tag),
      sort: serializeValue(sort),
      setBlogList,
      setTotalPage,
    });
    setLoading(false);
  }, [category, currentPage, sort, tag, title]);

  useEffect(() => {
    fetchBlogPost();
    fetchTopPosts();
  }, [fetchBlogPost]);

  return (
    <main className="sm:bg-[#F8F6F3] bg-white">
      {loading ? (
        <div />
      ) : (
        <>
          <BlogPageBanner posts={topPosts.slice(0, 5)} />
          <section className="sm:min-h-screen px-5 sm:px-10 md:px-20 lg:px-0 font-manrope lg:flex gap-10 justify-between">
            <NavBar />
            <div className="pb-10 md:flex-[0.8]">
              {false && blogList && totalPage > 1 && (
                <div className="w-fit ml-auto">
                  <div className="flex gap-4 items-center">
                    {page !== undefined && Number(page) !== 1 && (
                      <button
                        aria-label="previous page"
                        className="text-[#6b6868] h-[30px] w-[30px] overflow-hidden flex justify-center items-center border-2 p-1.5 rounded-full"
                        onClick={() => handlePagination("prev")}
                      >
                        <ArrowForwardIosOutlined
                          fontSize="small"
                          className="-scale-x-100"
                          color="inherit"
                        />
                      </button>
                    )}
                    {Number(page) !== totalPage && (
                      <button
                        aria-label="next page"
                        className="text-[#6b6868] h-[30px] w-[30px] overflow-hidden flex justify-center items-center border-2 p-1.5 rounded-full"
                        onClick={() => handlePagination("next")}
                      >
                        <ArrowForwardIosOutlined
                          fontSize="small"
                          color="inherit"
                        />
                      </button>
                    )}
                  </div>
                </div>
              )}
              <div className="flex px-5 pb-1.5 border-b-2 py-5 gap-x-1">
                +
                {sortOptions.map((name) => (
                  <div onClick={() => console.log(name)} key={name}>
                    <button
                      className={`first-letter:capitalize whitespace-nowrap pb-3 px-3 -mb-2 cursor-pointer ${
                        name === sortOption && "border-b-[#818181] border-b-2"
                      }`}
                    >
                      {name}
                    </button>
                  </div>
                ))}
              </div>
              <div className="space-y-5 sm:space-y-8 text-[#6B6868]">
                {blogList.length !== 0 ? (
                  <>
                    {blogList.map((blog) => (
                      <BlogArticle key={blog.id} {...blog} />
                    ))}
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
