import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Slider>;

const Carousel = ({ children, ...rest }: Props) => (
  <Slider {...rest}>{children}</Slider>
);

export default Carousel;
