import { styled } from "baseui";
import { XS } from "../../design/breakpoints";

const ListBannerImage = styled("img", {
  width: "100%",
  height: "12rem",
  objectFit: "fill",

  [XS]: {
    height: "8rem",
  }
});

const ListBanner = () => {
  return <ListBannerImage
    // src="https://res.cloudinary.com/codenjobs/image/upload/v1661475067/user/blog/cover/g61lai94xgxvdd1v3xvc.png"
    // src="https://res.cloudinary.com/codenjobs/image/upload/v1662154257/user/blog/cover/yhphzdxxajc67eyuw33x.jpg"
    src="/static/design/blockchain_cover.webp"
    alt="List Banner"
  />;
};

export default ListBanner;