import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Carousel.module.css";

type Props = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Slider>;

type CSSProps = {
  children: React.ReactNode;
};

const Carousel = ({ children, ...rest }: Props) => (
  <Slider {...rest}>{children}</Slider>
);

export const CSSOnlyCarousel = ({ children }: CSSProps) => (
  <div
    className={`relative py-5 flex items-center justify-center overflow-x-hidden ${styles.fullBleed}`}
  >
    <div className={`w-full flex absolute left-0 ${styles.animateCarousel}`}>
      <div className={`w-1/2 flex ${styles.animateItem}`}>{children}</div>
      <div className={`w-1/2 flex ${styles.animateItem}`}>{children}</div>
    </div>
  </div>
);

export default Carousel;
