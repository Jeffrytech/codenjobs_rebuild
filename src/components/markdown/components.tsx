import React from "react";
import TweetEmbed from 'react-tweet-embed';

// https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// I can use my theme later?
import vscdarkplus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import CentralizeChildren from "../CentralizeChildren";

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    // alert(match);

    return !inline && match ? (
      <SyntaxHighlighter
        style={vscdarkplus}

        lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
        // wrapLines={true}
        // showLineNumbers={true}

        language={match[1]}
        // language={match[1] !== null ? "console" : match[1]} 
        // language={"hs"} 
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  a: (props) => {
    const isTwit = props.href.startsWith('https://twitter.com');
    const splitByPath = props.href.split("/");
    
    if (isTwit) {
      if (splitByPath.length === 4) {
        // account
        return <a href={props.href}>{props.children}</a>;
      }

      const twitId = splitByPath[splitByPath.length - 1];
      return <TweetEmbed id={twitId} placeholder={'Loading'} options={{
        // https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
        align: "center",
      }} />;
    }

    return (
      <a href={props.href}>{props.children}</a> // All other links
    );
  },
  img: (props) => {
    return (
      <CentralizeChildren>
        <img src={props.src} title={props.title} />
      </CentralizeChildren>
    );
  }
};

export default components;