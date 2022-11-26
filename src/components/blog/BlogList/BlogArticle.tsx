import moment from "moment";
import { useState } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { BlogPostType } from "../../../types/blog.type";
import { BookmarkAddOutlined, MoreHorizOutlined } from "@mui/icons-material";

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

export const BlogArticle = ({
  id,
  username,
  published_at,
  title,
  tags,
  cover,
  category,
  updated_at,
}: BlogPostType) => {
  const [showModal, setShowModal] = useState(false);

  const ref = useOnClickOutside(() => setShowModal(false));

  return (
    <article
      className="flex items-center justify-between gap-4 py-8 pb-16 border-b-2"
      key={id}
    >
      <div className="min-w-1/2 space-y-3">
        <PostedBy username={username} published_at={published_at} />
        <div className="space-y-3 sm:max-w-2xl">
          <h4 className="text-lg font-extrabold text-black">{title}</h4>
          <div className="flex items-center gap-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            architecto culpa cupiditate laboriosam dicta eligendi dolorum?
            Necessitatibus neque corporis dicta.
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs gap-2">
            <button className=" bg-[#E6E6E6] text-sm px-4 py-1 rounded-[20px]">
              {category || "Custom"}
            </button>
            <p className="text-black">
              Last updated: {moment.utc(updated_at).format("MMM DD, YY")} -
            </p>
            <p className="text-black first-letter:capitalize">
              {tags?.[0] || "Selected for you"}
            </p>
          </div>
          <div className="gap-3 flex items-center">
            <BookmarkAddOutlined className="cursor-pointer" />
            <div ref={ref} className="relative">
              <MoreHorizOutlined
                className="cursor-pointer"
                onClick={() => setShowModal((m) => !m)}
              />
              {showModal && (
                <div className="absolute bg-white p-5 shadow-mm rounded-md right-0 mt-2 w-fit text-xs min-w-[160px] space-y-3">
                  <p>Mute this author</p>
                  <p>Report of block</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {cover && (
        <div className="">
          <img
            className="w-[180px] h-[180px] rounded object-cover"
            src={cover}
            alt=""
          />
        </div>
      )}
    </article>
  );
};
