export type ArticleId = "hero" | "drinker" | "eternal" | "temple" | "vue";

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
    "1": ["hero"],
  },
  // Tablet
  md: {
    "1": [],
    "2": [],
  },
  // Desktop
  lg: {
    "1": ["drinker"],
    "2": ["hero"],
    "3": ["eternal"],
  },
};
