const commonFeatures = [
  { allowed: true, title: "Share at our website" },
  { allowed: true, title: "Share at our Telegram channel" },
  { allowed: true, title: "Share at our Discord" },
  { allowed: true, title: "Share in your blog posts" },
  { allowed: true, title: "Share to your followers with our email" },
  { allowed: true, title: "Display for 4 weeks" },
];

const jobPlans = [
  {
    name: "CODE",
    price: "284",
    paymentMethod: "code",
    features: [
      { allowed: true, title: "5% Discount" },
      ...commonFeatures
    ],
  },
  {
    name: "Solana",
    price: "299",
    paymentMethod: "solana",
    features: [
      { allowed: false, title: "No 5% Discount" },
      ...commonFeatures,
    ],
  },
];

export default jobPlans;
