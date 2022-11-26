import React from "react";
import { BlogPostType } from "../../types/blog.type";

type Props = {
  list: BlogPostType[];
};

const Community = ({ list }: Props) => (
  <div className="space-y-4">
    {list.map(({ id, title, username }) => (
      <div key={id} className="space-y-1">
        <div className="w-fit flex items-center gap-1">
          <img className="w-[30px]" src="/static/icons/avatar.png" alt="" />
          <p className="text-[#414A5C] text-xs capitalize">{username}</p>
        </div>
        <h5 className="text-sm font-semibold">{title}</h5>
      </div>
    ))}
  </div>
);

export default Community;

/*  */
