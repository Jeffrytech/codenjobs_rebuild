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

const sortOptions = ["all", "top", "new", "old"] as const;

type SortType = typeof sortOptions[number];

const BlogList = ({ title, category, tag, sort, page }) => {
  const router = useRouter();

  const [blogList, setBlogList] = useState<BlogPostType[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [topPosts, setTopPosts] = useState([]);

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
  }, [category, currentPage, sort, tag, title]);

  const handlePagination = async (target: "prev" | "next") => {
    const pageNum = target === "prev" ? Number(page) - 1 : Number(page) + 1;
    const queries = new URLSearchParams(window.location.search);
    queries.set("page", pageNum.toString());

    const query = Object.fromEntries(queries);
    router.push({
      pathname: window.location.pathname,
      query,
    });
    scrollToTop();
  };

  useEffect(() => {
    findBlogsMethod();
    fetchTopPosts();
  }, [findBlogsMethod]);

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto
      nulla hic ratione necessitatibus consectetur unde fugit. Esse porro earum
      sunt doloremque est. Eum dignissimos rem facere consectetur asperiores
      voluptatum eveniet totam nobis perspiciatis sit sequi quia eligendi
      repellat, ullam excepturi neque, eius esse distinctio saepe facilis itaque
      natus. Totam, deleniti voluptatum! Minima maiores eius delectus? Esse ad
      provident eum explicabo ex omnis, odit voluptas culpa nihil enim,
      excepturi sequi dolores aliquam dolorum fugit debitis? Illum sequi unde
      minima aliquam culpa eos dignissimos placeat quasi nisi. Quo dolorem modi
      ipsum. Aliquam iusto molestias impedit illo eius. Quos beatae nesciunt
      error.
    </div>
  );
};

export default BlogList;
