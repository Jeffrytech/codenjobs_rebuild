import { styled } from "baseui";
import moment from "moment";
import { XS } from "../../design/breakpoints";
import { BlogPostType } from "../../types/blog.type";
import Carousel from "../Elements/carousel";

// type BlogPostType =

const ListBannerImage = styled("img", {
  width: "100%",
  height: "12rem",
  objectFit: "fill",

  [XS]: {
    height: "8rem",
  },
});

const posts: BlogPostType[] = [
  {
    username: "tokah",
    id: "963fb028-dc50-49d6-aa40-334896db2217",
    cover:
      "https://res.cloudinary.com/codenjobs/image/upload/v1668133437/user/blog/cover/pnslzsk4nn41qo2ojohb.png",
    title:
      "Don't miss our World Cup 2022:Qatar NFT launch - November 18th, 3:00 pm UTC",
    category: "Marketing",
    tags: ["Blockchain", "Crypto", "NFT", "Solana", "Product"],
    created_at: "2022-11-11T02:23:01.360743",
    updated_at: "2022-11-11T02:23:57.734248",
    published_at: "2022-11-11T02:23:23.031217",
    total_blog_post_money_voters: 1,
  },
  {
    username: "tripster",
    id: "ed566dac-6b3d-427c-91b2-a1977c0f01b9",
    cover:
      "https://res.cloudinary.com/codenjobs/image/upload/v1667755003/user/blog/cover/kj9lu4mgq3o9scudvrni.jpg",
    title: "Building a Flutter Crypto Trading App: Part 1",
    category: "Programming",
    tags: ["Flutter", "Dart", "Blockchain", "Crypto", "Mobile"],
    created_at: "2022-11-06T16:41:52.868897",
    updated_at: "2022-11-06T17:16:43.626717",
    published_at: "2022-11-06T16:47:42.934100",
    total_blog_post_money_voters: 2,
  },
  {
    username: "tripster",
    id: "6b632988-bd80-4052-90b5-7f6015e51ea2",
    cover:
      "https://res.cloudinary.com/codenjobs/image/upload/v1667147163/user/blog/cover/ssmjlqawnfmxdqzj3hrd.jpg",
    title: "Building a Crypto Price Tracker with Flutter",
    category: "Programming",
    tags: ["API", "Flutter", "Dart", "Cryptocurrency"],
    created_at: "2022-10-30T16:02:56.659157",
    updated_at: "2022-10-30T16:26:03.129667",
    published_at: "2022-10-30T16:06:56.530906",
    total_blog_post_money_voters: 2,
  },
];

export const BlogPageBanner = ({ posts }: { posts: BlogPostType[] }) => (
  <header className="sm:p-10 list-banner pb-10 sm:bg-transparent bg-white">
    <Carousel
      autoplay
      slidesToScroll={1}
      infinite
      autoplaySpeed={2000}
      slidesToShow={1}
      dots
    >
      {posts.map(({ id, cover, title, username, published_at }) => (
        <div className="bg-white p-10 sm:p-5 text-manrope" key={id}>
          <div className="sm:flex sm:border-y-4 sm:p-5 gap-5 space-y-5">
            <div className="flex flex-col sm:w-1/2 justify-center gap-4">
              <h3 className="font-manrope font-extrabold text-[22px] leading-8 sm:text-3xl sm-clamp-2">
                {title}
              </h3>
              <div className="text-base text-[#6B6868]">
                Tools that you need as a programmer. - Every time i write code
                across some sound blocks down my workflow sometimes i forget the
                format need to use to create a cron job, metacharacter i need
                to......
              </div>
              <div className="flex items-center gap-2 text-sm font-manrope text-[#6B6868]">
                By
                <div className="sm:block hidden">
                  <img src="/static/icons/avatar.png" alt="" />
                </div>
                <div className="flex flex-col sm:text-xs space-y-1">
                  <p className="sm:text-black first-letter:capitalize w-fit">
                    {username}
                    <span className="sm:pl-0 pl-2">
                      {" "}
                      . {moment.utc(published_at).format("DD MMM")}
                    </span>
                  </p>
                  <div className="sm:block hidden">Software Developer</div>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2">
              <img
                className="sm:h-[200px] h-[120px] w-full rounded-sm object-cover"
                src={cover}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </header>
);

const ListBanner = () => (
  <div>
    <ListBannerImage
      src="/static/design/blockchain_cover.webp"
      alt="List Banner"
    />
  </div>
);

export default ListBanner;

// src="https://res.cloudinary.com/codenjobs/image/upload/v1661475067/user/blog/cover/g61lai94xgxvdd1v3xvc.png"
// src="https://res.cloudinary.com/codenjobs/image/upload/v1662154257/user/blog/cover/yhphzdxxajc67eyuw33x.jpg"
