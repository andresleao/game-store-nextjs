/* tslint:disable */
/* eslint-disable */

export enum ENUM_GAME_RATING {
    BR0 = "BR0",
    BR10 = "BR10",
    BR12 = "BR12",
    BR14 = "BR14",
    BR16 = "BR16",
    BR18 = "BR18",
}

export interface QueryGameBySlug_games_gallery {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryGameBySlug_games_cover {
  __typename: "UploadFile";
  src: string;
}

export interface QueryGameBySlug_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGameBySlug_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryGameBySlug_games_categories {
  __typename: "Category";
  name: string;
}

export interface QueryGameBySlug_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryGameBySlug_games {
  __typename: "Game";
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING | null;
  release_date: any | null;
  gallery: QueryGameBySlug_games_gallery[];
  cover: QueryGameBySlug_games_cover | null;
  developers: QueryGameBySlug_games_developers[];
  publisher: QueryGameBySlug_games_publisher | null;
  categories: QueryGameBySlug_games_categories[];
  platforms: QueryGameBySlug_games_platforms[];
}

export interface QueryGameBySlug {
  games: QueryGameBySlug_games[];
}

export interface QueryGameBySlugVariables {
  slug: string;
}
