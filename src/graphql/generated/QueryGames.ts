export interface QueryGames_games_cover {
    __typename: "UploadFile";
    url: string;
  }

  export interface QueryGames_games_developers {
    __typename: "Developer";
    name: string;
  }

  export interface QueryGames_games {
    __typename: "Game";
    name: string;
    slug: string;
    cover: QueryGames_games_cover | null;
    developers: QueryGames_games_developers[];
    price: number;
  }
  export interface QueryGames {
    games: QueryGames_games[];
  }

  export interface QueryGamesVariables {
    pageSize: number;
  }
