import Head from 'next/head';
import { 
  COMPANY_DESCRIPTION, COMPANY_LOGO_WHITE, COMPANY_NAME, COMPANY_TWITTER, COMPANY_WEBSITE_HTTPS 
} from '../config/environment';

const Metatags = ({
  title,
  description = COMPANY_DESCRIPTION,
  image = COMPANY_LOGO_WHITE,

  // siteName,
  url = COMPANY_WEBSITE_HTTPS,
  keywords = "Job, NFTs, Blog, DEX, Blockchain, Crypto, Solana, ETH",

  // twitterSite, // Twitter Username @codenjobs
  rest = null,
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} key="keywords" />

      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:image" content={image} key="og:image" />
      <meta property="og:description" content={description} key="og:description" />
      {/* <meta property="og:site_name" content={title} /> */}
      {/* <meta property="og:site_name" content={siteName} /> */}
      <meta property="og:site_name" content={COMPANY_NAME} key="og:site_name" />

      {/* <meta name="twitter:site" content={twitterSite} /> */}
      <meta name="twitter:site" content={COMPANY_TWITTER} key="twitter:site" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta name="twitter:description" content={description} key="twitter:description" />
      <meta name="twitter:image:src" content={image} key="twitter:image:src" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />

      {/* Include this to update the metadata with https://telegram.me/webpagebot */}
      <meta prefix="og: http://ogp.me/ns#" key="og: http://ogp.me/ns#" />

      {rest}
    </Head>
  );

};

export default Metatags;
