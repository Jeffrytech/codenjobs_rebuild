const config = {
  REACT_ENV: process.env.REACT_ENV,

  NODE_ENV: process.env.NODE_ENV,
  API: process.env.NEXT_PUBLIC_API,
  FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
  ADMIN_URL: process.env.NEXT_PUBLIC_ADMIN_URL,

  COMPANY_NAME: "Code&Jobs",
  COMPANY_LOGO: "https://www.codenjobs.com/static/logo.png",
  COMPANY_LOGO_WHITE: "https://www.codenjobs.com/static/logo_white.png",
  COMPANY_COVER: "https://www.codenjobs.com/static/main_money.jpg",

  COMPANY_DESCRIPTION: "The worldwide network to help you find a job and candidate",
  LOGIN_DESCRIPTION: "Be a part of the worldwide network to help you find a job and candidate",

  COMPANY_WEBSITE: "codenjobs.com",
  COMPANY_DOCS_WEBSITE: "https://docs.codenjobs.com",
  COMPANY_ENGLISH_DOCS_WEBSITE: "https://docs.codenjobs.com/en",

  HTTPS: "https://www.",

  COMPANY_WEBSITE_HTTPS: "https://www.codenjobs.com",
  COMPANY_CODE_OF_CONDUCT: "/company/policies/code-of-conduct",
  COMPANY_TWITTER: "@codenjobs",
  COMPANY_NFT_TWITTER: "@CodeandJobsNFT",

  SOLANA_DEX: "https://solana.codenjobs.com",

  ReCAPTCHA_PUBLIC: "6Lf6ieYbAAAAAPhSPsHpxkscGvxPYeIIQhrXtALd",

  TELEGRAM_CHANNEL: "https://t.me/codenjobs",
  TELEGRAM_BOT: "https://t.me/codenjobsbot",
  TELEGRAM_GROUP: "https://t.me/codenjobsgroup",

  DISCORD_SERVER: "https://discord.gg/eWTXzPrsJ3",
  TWITTER: "https://twitter.com/codenjobs",

  // Referrals
  // Use a website with a partership instead to purcahse Solana

  // TODO
  // Use our own DEX Swap code
  BUY_CODE: "https://raydium.io/swap/?inputCurrency=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputCurrency=Code7hV6DaK5Werof8c7vPwBxLvhmEWVUbU2AfhBZArB&inputAmount=0&outputAmount=0&fixed=out",

  // Crypto
  SOLSCAN: "https://solscan.io",
  SOLANA_NETWORK: "main", // https://api.mainnet-beta.solana.com

  CODE_SOLANA_OWNER: "CodeX8ftGXEB6PZhs8FHJV1jzcEfaKXfFSi5xQWREwpc",
  CODE_SOLANA_TOKEN: "Code7hV6DaK5Werof8c7vPwBxLvhmEWVUbU2AfhBZArB",

  LAMPORTS_PER_CODE: 1000000,

  JOB_POST_PRICE: "$299",
  JOB_POST_CODE_DISCOUNT_PRICE: "$284",
  JOB_PREFIX: "job",
  JOB_POST_PREFIX: "job-post",

  // Devnet
  // Should be equal to what are used in the server
  // JOB_SOLANA_CONTRACT: "FZNfe7f26BWAkEhRbJCurvqeP4NprBTNMBJx1FjUz83h",
  // // JOB_SOLANA_CONTRACT: "FZNfe7f26BWAkEhRbJCurvqeP4NprBTNMBJx1FjUz83h", // Use dev contract and prod contract?
  // JOB_PUBLIC_KEY: "FifGf4Lp9sVHKEtEGaWoQtugt2TKEVsonUqJJQQbc4Cz", // Update with job/script/create.js
  JOB_SOLANA_CONTRACT: "Jobin86N61eQGkHCrXHc4NeDVNE6CQE7ATzuFRTYEnT",
  JOB_PUBLIC_KEY: "Job3ZdUtPRp6B5nQ2hnnLhqHiJ51fdpMB61M5CLG2FH", // Update with job/script/create.js

  // Emails
  SUPPORT_EMAIL: "support@codenjobs.com",
};

module.exports = { ...config };