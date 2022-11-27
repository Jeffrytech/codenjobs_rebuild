/* {
	"0": {
		"username": "tokah",
		"id": "963fb028-dc50-49d6-aa40-334896db2217",
		"cover": "https://res.cloudinary.com/codenjobs/image/upload/v1668133437/user/blog/cover/pnslzsk4nn41qo2ojohb.png",
		"title": "Don't miss our World Cup 2022:Qatar NFT launch - November 18th, 3:00 pm UTC",
		"category": "Marketing",
		"tags": [
			"Blockchain",
			"Crypto",
			"NFT",
			"Solana",
			"Product"
		],
		"created_at": "2022-11-11T02:23:01.360743",
		"updated_at": "2022-11-11T02:23:57.734248",
		"published_at": "2022-11-11T02:23:23.031217",
		"total_blog_post_money_voters": 1
	}
} */

export type BlogPostType = {
  id: string;
  cover: string;
  title: string;
  username: string;
  category: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  published_at: string;
  total_blog_post_money_voters: number;
};
