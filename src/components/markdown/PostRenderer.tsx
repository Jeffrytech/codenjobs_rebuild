import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';

// import TweetEmbed from 'react-tweet-embed';

// https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// I can use my theme later?
// import vscdarkplus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';

import style from '../../styles/markdown-styles.module.css';
// import CentralizeChildren from "../CentralizeChildren";
import markdownComponents from "./components";

// const customComponents = {
//   code({ node, inline, className, children, ...props }) {
//     const match = /language-(\w+)/.exec(className || '')
//     return !inline && match ? (
//       <SyntaxHighlighter style={dark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
//     ) : (
//       <code className={className} {...props}>
//         {children}
//       </code>
//     )
//   }
// }

// Use this to test themes.
// const markdownWithCodeSnippet = `Here is some JavaScript code:
// ~~~js
// console.log('It works!')
// ~~~
// `

// import TweetEmbed from 'react-tweet-embed'
// <TweetEmbed id="1441052849392140289" placeholder={'Loading'} />

// const markdownComponents = {
//   code({ node, inline, className, children, ...props }) {
//     const match = /language-(\w+)/.exec(className || '')
//     // alert(match);

//     return !inline && match ? (
//       <SyntaxHighlighter
//         style={vscdarkplus}

//         lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
//         // wrapLines={true}
//         // showLineNumbers={true}

//         language={match[1]}
//         // language={match[1] !== null ? "console" : match[1]} 
//         // language={"hs"} 
//         PreTag="div"
//         children={String(children).replace(/\n$/, '')}
//         {...props}
//       />
//     ) : (
//       <code className={className} {...props}>
//         {children}
//       </code>
//     )
//   },
//   a: (props) => {
//     const isTwit = props.href.startsWith('https://twitter.com');
//     const splitByPath = props.href.split("/");
//     const twitId = splitByPath[splitByPath.length - 1];
//     // alert(twitId);

//     return isTwit ? (
//       <TweetEmbed id={twitId} placeholder={'Loading'} options={{
//         // https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
//         align: "center",
//       }} />
//       // </div>
//       // <CustomTwitterComponent url={props.href} /> // Render Twitter links with custom component
//     ) : (
//       <a href={props.href}>{props.children}</a> // All other links
//     );
//   },
//   img: (props) => {
//     return (
//       <CentralizeChildren>
//         <img src={props.src} title={props.title} />
//       </CentralizeChildren>
//     );
//   }
// };

// Make a separate MessagenRenderer if you allow some markdown for messages?
const PostRenderer = ({
  input,
}) => {
  return (
    <ReactMarkdown 
      className={style.reactMarkDown} 

      // Works with markdown
      // children={markdownWithCodeSnippet}
      
      // Work with markdown
      // children={`<div style="color: white; background: rgb(77, 64, 51); text-shadow: black 0px -0.1em 0.2em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; border: 0.3em solid rgb(122, 102, 82); border-radius: 0.5em; box-shadow: black 1px 1px 0.5em inset;"><code class="language-js" style="color: white; background: none; text-shadow: black 0px -0.1em 0.2em; font-family: Consolas, Monaco, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, monospace; font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; overflow-wrap: normal; line-height: 1.5; tab-size: 4; hyphens: none;"><span class="token console class-name">console</span><span class="token">.</span><span class="token method function property-access">log</span><span class="token">(</span><span class="token" style="color: rgb(189, 224, 82);">'It works!'</span><span class="token">)</span></code></div>`}
      
      children={input}
      
      remarkPlugins={[gfm]}
      rehypePlugins={[rehypeRaw]} 
      // Move it to markdown renderers later?
      components={markdownComponents}
      // lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
      // wrapLines={true}
      linkTarget="_blank" 
    />

  // <>
  //   <p>Here is some JavaScript code:</p>
  //   <pre>
  //     <SyntaxHighlighter language="py" style={dark} PreTag="div" children="print('It works!')" />
  //   </pre>
  // </>
  );
};

export default PostRenderer;

// {/* Should find how to edit image, font size etc */ }
// {/* https://github.com/remarkjs/react-markdown */ }
// {/* https://github.com/remarkjs/react-markdown#appendix-b-node-types */ }
// {/* https://github.com/remarkjs/react-markdown/issues/100 */ }
// {/* Include renderers for link and the image later? */ }

// <>
//   <p>Here is some JavaScript code:</p>
//   <pre>
//     <SyntaxHighlighter language="py" style={dark} PreTag="div" children="print('It works!')" />
//   </pre>
// </>