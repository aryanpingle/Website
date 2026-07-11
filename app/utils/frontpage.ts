export type ArticleId =
  | "hero"
  | "drinker"
  | "eternal"
  | "island"
  | "xkcd"
  | "contact"
  | "website"
  | "blogs";

export type ColumnwiseArticles = {
  1?: ArticleId[];
  2?: ArticleId[];
  3?: ArticleId[];
};

export type Breakpoints = {
  sm: ColumnwiseArticles;
  md: ColumnwiseArticles;
  lg: ColumnwiseArticles;
};

export const ARTICLES: Breakpoints = {
  // Mobile
  sm: {
    "1": [
      "hero",
      "island",
      "blogs",
      "drinker",
      "eternal",
      "contact",
      "website",
      "xkcd",
    ],
  },
  // Tablet
  md: {
    "1": ["island", "contact", "drinker", "blogs", "xkcd"],
    "2": ["hero", "eternal", "website"],
  },
  // Desktop
  lg: {
    "1": ["island", "drinker", "blogs"],
    "2": ["hero", "website"],
    "3": ["contact", "eternal", "xkcd"],
  },
};
