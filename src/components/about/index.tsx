import { styled } from "baseui";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./App.module.scss";
import RiseIn from "./components/RiseIn/RiseIn";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import FAQ from "./components/FAQ/FAQ";
import Post from "./components/Post/Post";

// import styled from ""

import solanaLogo from "./assets/solana.png";

import ExternalLink from "../ExternalLink";
import {
  BUY_CODE,
  CODE_SOLANA_TOKEN,
  COMPANY_NAME,
} from "../../config/environment";
import { black, blue, solana } from "../../design/colors";
import { findBlogListByUsername } from "../../api/blog";
// import { blue } from "@material-ui/core/colors";

const Link = styled("span", {
  ":hover": {
    color: blue,
  },
});

const lessFAQs = [
  {
    question: "Where can I read Code&Jobs Whitepaper?",
    // answer: https://www.codenjobs.com/company/whitepaper`,
    answer: (
      <ExternalLink href="/company/whitepaper">
        <span className={styles.faqlink}>
          You can find our whitepaper here.
          {/* You can find {COMPANY_NAME} whitepaper here at our website. */}
        </span>
      </ExternalLink>
    ),
  },
  {
    question: "Where can I buy CODE token?",
    answer: (
      <ExternalLink href={BUY_CODE}>
        <span className={styles.faqlink}>
          You can buy CODE token with USDC here.
        </span>
      </ExternalLink>
    ),
  },
  {
    question: "Where can I find jobs",
    answer: (
      <ExternalLink href={"https://www.codenjobs.com/jobs"}>
        <span className={styles.faqlink}>You can find jobs here.</span>
      </ExternalLink>
    ),
  },
  {
    question: "How can I post a job?",
    answer: (
      <ExternalLink href={"https://www.codenjobs.com/job/post"}>
        <span className={styles.faqlink}>
          You can post a job after you make an account and login at our website.
        </span>
      </ExternalLink>
    ),
  },
];

const moreFAQs = [
  ...lessFAQs,
  {
    question: "How can I find blogs?",
    answer: (
      <ExternalLink href={"https://www.codenjobs.com/blogs"}>
        <span className={styles.faqlink}>You can find blogs here.</span>
      </ExternalLink>
    ),
  },
  {
    question: "How can I post a blog?",
    answer: (
      <ExternalLink href={"https://www.codenjobs.com/blog/post"}>
        <span className={styles.faqlink}>
          You can post a blog after you make an account and login at our
          website.
        </span>
      </ExternalLink>
    ),
  },
  {
    question: "Where can I find recruiters?",
    answer: (
      <ExternalLink href={"https://www.codenjobs.com/hiring"}>
        <span className={styles.faqlink}>You can find recruiters here.</span>
      </ExternalLink>
    ),
  },
  {
    question: "Where can I find candidates?",
    answer: (
      <ExternalLink href={"https://www.codenjobs.com/forhire"}>
        <span className={styles.faqlink}>You can find candidates here.</span>
      </ExternalLink>
    ),
  },
];

// Use database
const blogList = [
  {
    title: "Code&Jobs Whitepaper",
    cover:
      "https://res.cloudinary.com/codenjobs/image/upload/v1650475589/user/blog/cover/zsregoy0vp3scpjcey2r.jpg",
    published_at: "2022-03-15T11:57:44.857412",
    href: "https://www.codenjobs.com/blog?&title=Code&Jobs-Whitepaper&id=f6b3d260-168c-40b5-bd1d-34718d211089",
  },
  {
    title: "The interview with Code&Jobs",
    cover:
      "https://res.cloudinary.com/codenjobs/image/upload/v1650475589/user/blog/cover/zsregoy0vp3scpjcey2r.jpg",
    published_at: "2022-03-15T12:40:31.608586",
    href: "https://www.codenjobs.com/blog?&title=The-interview-with-the-Code&Jobs&id=77777a7d-7777-40fe-92de-6da46cea6a6f",
  },
  {
    title: "L'intervista con Code&Jobs",
    cover:
      "https://res.cloudinary.com/codenjobs/image/upload/v1650475589/user/blog/cover/zsregoy0vp3scpjcey2r.jpg",
    published_at: "2022-03-15T12:17:30.510618",
    href: "https://www.codenjobs.com/blog?&title=-L%27intervista-con-Code&Jobs&id=e177c677-a77e-43d1-97a8-f668601df777",
  },
];

const noMargin = {
  margin: 0,
};

function About() {
  // const [blogList, setBlogList] = useState(null);

  // useEffect(() => {
  //   findBlogListByUsername("codenjobs", "old").then(data => {
  //     // alert(response);
  //     console.log("data");
  //     console.log(data);

  //     // setBlogList(data);
  //   })
  // }, []);

  const initialTop = -20;
  const initialRight = 45;
  const initialRightMiddle = 7;
  const initialTopMiddle = -17;
  const initialTopBottom = 5;
  const initialRightBottom = 5;

  const [right, setRight] = useState(initialRight);
  const [top, setTop] = useState(initialTop);
  const [rightMiddle, setRightMiddle] = useState(initialRightMiddle);
  const [topMiddle, setTopMiddle] = useState(initialTopMiddle);
  const [rightBottom, setRightBottom] = useState(initialRightBottom);
  const [topBottom, setTopBottom] = useState(initialTopBottom);
  const [FAQs, setFAQs] = useState(lessFAQs);
  const [showingMoreFaq, setShowingMoreFaq] = useState(false);

  const topRef = useRef();
  const middleRef = useRef();
  const bottomRef = useRef();

  function handleMouseMove(
    event,
    elementRef,
    setTopFunc,
    setRightFunc,
    initialTopProp,
    initialRightProp
  ) {
    const rect = elementRef.current.getBoundingClientRect();
    const factor = 10;

    const yAxis = Math.round((event.clientY - rect.top) / factor);
    const xAxis = Math.round((event.clientX - rect.left) / factor);
    setRightFunc(initialRightProp - xAxis);
    setTopFunc(initialTopProp + yAxis);
  }

  function handleMouseLeft(
    setTopFunc,
    setRightFunc,
    initialTopProp,
    initialRightProp
  ) {
    setRightFunc(initialRightProp);
    setTopFunc(initialTopProp);
  }

  function handleViewMoreFAQ() {
    if (showingMoreFaq) {
      setFAQs(lessFAQs);
      setShowingMoreFaq(false);
    } else {
      setFAQs(moreFAQs);
      setShowingMoreFaq(true);
    }
  }

  let roundedClass = {
    top,
    right,
  };

  let roundedClassMiddle = {
    top: topMiddle,
    right: rightMiddle,
  };

  let windowWidth = window.matchMedia("(max-width: 600px)");
  if (windowWidth.matches) {
    roundedClassMiddle = {
      top: initialTopMiddle,
      right: rightMiddle + 30,
    };

    roundedClass = {
      top: top + 6,
      right,
    };
  }

  const roundedClassBottom = {
    top: topBottom,
    right: rightBottom,
  };

  return (
    <div className={styles.App}>
      <div className={styles.top}>
        <div>
          <RiseIn text="Building The" delay=".2s" />
          <RiseIn text="Largest Remote" delay=".3s" />
          {/* <RiseIn text="Largest Remote" delay=".3s" /> */}
          <RiseIn text="Crypto community" delay=".4s" />
          {/* <RiseIn text="Code community" delay=".4s" /> */}
          {/* <RiseIn text="Building The" delay=".2s" />
          <RiseIn text="Largest Remote" delay=".3s" />
          <RiseIn text="Job Community" delay=".4s" /> */}
        </div>
        <p className={`paragraph`}>
          {/* Hi there, we are here to help make it easy for people to apply and get */}
          {/* We are here to help make it easy for people to find remote jobs from anywhere in the world with blockchain techs. */}
          We are here to help you find remote blockchain jobs and candidates
          from anywhere in the world.
        </p>
        <div className={styles.top_bottom}>
          <div
            ref={topRef}
            onMouseMove={(event) =>
              handleMouseMove(
                event,
                topRef,
                setTop,
                setRight,
                initialTop,
                initialRight
              )
            }
            onMouseLeave={() =>
              handleMouseLeft(setTop, setRight, initialTop, initialRight)
            }
            className={styles.top_bottom_right}
          >
            <ExternalLink href="/job/post">
              <ScrollUp text="POST A JOB" />
            </ExternalLink>
            <div className={styles.image_with_header}>
              <h4 style={noMargin}>FOR $299(</h4>
              {/* <Image style={{ */}
              <span
                style={{
                  width: "1rem",
                }}
              >
                <Image src={solanaLogo} alt="solana logo" />
              </span>
              <h4 style={noMargin}>)</h4>
            </div>
            {/* <h3 style={noMargin} >OR HAVE 5% DISCOUNT ($284)</h3> */}
            <h3 style={noMargin}>OR HAVE 5% DISCOUNT</h3>
            <h3 style={noMargin}>WITH OUR CODE TOKEN</h3>
            <div
              style={roundedClass}
              className={`${styles.circle_top} circle `}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.faq_wrapper}>
        <div className={styles.faq_questions}>
          {FAQs &&
            FAQs.map((faq) => (
              <FAQ question={faq.question} answer={faq.answer} />
            ))}
        </div>
        <button onClick={() => handleViewMoreFAQ()}>{`View ${
          showingMoreFaq ? "less" : "more"
        } faq`}</button>
      </div>
      <div className={`${styles.message} message`}>
        <ExternalLink href={BUY_CODE}>
          <div className={`${styles.message_inner} `}>
            {/* @ts-ignore */}
            <RiseIn text={"We also have"} />
            <div
              ref={middleRef}
              onMouseMove={(element) =>
                handleMouseMove(
                  element,
                  middleRef,
                  setTopMiddle,
                  setRightMiddle,
                  initialTopMiddle,
                  initialRightMiddle
                )
              }
              onMouseLeave={() =>
                handleMouseLeft(
                  setTopMiddle,
                  setRightMiddle,
                  initialTopMiddle,
                  initialRightMiddle
                )
              }
              className={styles.message_with_circle}
            >
              {/* @ts-ignore */}
              <RiseIn text="our own token" />
              <div
                style={roundedClassMiddle}
                className={`${styles.circle_mid} circle`}
              ></div>
            </div>
          </div>
        </ExternalLink>
        <p
          style={{ width: "45rem", textAlign: "center", marginBottom: "1rem" }}
          className={`paragraph`}
        >
          {/* <span>Our <img style={{ width: "1.25rem", height: "1.25rem" }} src="/static/logo.svg" /> CODE token</span> is deployed on <img style={{ width: "1.25rem", height: "1.25rem"}} src="/static/logos/solana.png" /> Solana blockchain for its speed and */}
          {/* Our <img style={{ width: "1.5rem", height: "1.5rem" }} src="/static/logo.svg" /> <span style={{ color: black }}> CODE</span> token  is deployed on <img style={{ width: "1.25rem", height: "1.25rem" }} src="/static/logos/solana.png" /> Solana blockchain for its speed and */}
          {/* <ExternalLink href={BUY_CODE} ><img style={{ width: "1.25rem", height: "1.25rem" }} src="/static/logo.svg" /><span style={{ color: black }}> CODE</span></ExternalLink>  token  is deployed on <img style={{ width: "1.25rem", height: "1.25rem" }} src="/static/logos/solana.png" /> <span style={{ color: solana }}>Solana</span> blockchain for its speed and */}
          <ExternalLink href={BUY_CODE}>
            <span className={styles.code}>
              {/* <img style={{ width: "1rem", height: "1rem" }} src="/static/logo.svg" /> */}
              {/* <span style={{ color: black }}> CODE</span> */}
              <span style={{ color: black }}> CODE</span>
            </span>
          </ExternalLink>{" "}
          is deployed on{" "}
          <img
            style={{ width: "1rem", height: "1rem" }}
            src="/static/logos/solana.png"
          />{" "}
          <span>Solana</span> blockchain for its speed and robustness while
          remaining decentralized and with low transaction fees, compared to the
          other blockchains.
        </p>
      </div>

      <div className={`${styles.blog_post_wrapper}`}>
        <div className={`${styles.blog_post_controls}`}>
          <h2>Blogs</h2>
          <ExternalLink href="https://www.codenjobs.com/user/codenjobs/posts">
            {/* <button className={`${styles.blogs}`} >all blogs</button> */}
            <button>all blogs</button>
          </ExternalLink>
        </div>
        <div className={`${styles.blog_posts}`}>
          {blogList &&
            blogList?.map((blog) => {
              // alert(blog);

              // console.log("blog");
              // console.log(blog);
              // return null;
              const { title, cover, published_at, href } = blog;

              return (
                <Post
                  title={title}
                  cover={cover}
                  published_at={published_at}
                  href={href}
                  // date={blog.crea}
                />
              );
            })}
        </div>
      </div>

      <div
        className={`${styles.action}`}
        style={{
          marginTop: "4rem",
        }}
      >
        <div className={`${styles.texts}`}>
          {/* @ts-ignore */}
          <RiseIn text="join the" />
          {/* @ts-ignore */}
          <RiseIn text={COMPANY_NAME} />
          {/* <RiseIn text="remote job" /> */}
          {/* @ts-ignore */}
          <RiseIn text="community" />
        </div>
        <div
          ref={bottomRef}
          onMouseMove={(event) =>
            handleMouseMove(
              event,
              bottomRef,
              setTopBottom,
              setRightBottom,
              initialTopBottom,
              initialRightBottom
            )
          }
          onMouseLeave={() =>
            handleMouseLeft(
              setTopBottom,
              setRightBottom,
              initialTopBottom,
              initialRightBottom
            )
          }
          className={styles.sign_circle}
        >
          <ExternalLink href="/register">
            <ScrollUp text="SIGN UP" />
          </ExternalLink>
          <div
            style={roundedClassBottom}
            className={`circle ${styles.circle_lower}`}
          ></div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2>
          {" "}
          our <span>Road map</span>
        </h2>
        <ul
          style={{
            padding: 0,
          }}
        >
          <li>Smart contract for job posting to be expected in Q1 2022.</li>
          <li>Our own decentralized exchange to be expected in Q2 2022.</li>
          <li>We will deploy our own NFT to be expected in Q3 2022.</li>
          <li>NFT market to be expected in Q4 2022.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
