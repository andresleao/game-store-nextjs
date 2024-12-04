import { gql } from '@apollo/client';
import { BannerFragment } from '@/graphql/fragments/banner';
import { GameFragment } from '@/graphql/fragments/game';

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }
    newGames: games(
      filters: {
        release_date: { gt: "2024-01-01" }
      }
      sort: ["release_date:desc"]
      pagination: { pageSize: 8 }
    ) {
        ...GameFragment
      }
      upcomingGames: games(
        filters: {
          release_date: { gt: "2024-11-01" }
        }
        sort: ["release_date:asc"]
        pagination: { pageSize: 8 }
        ) {
          ...GameFragment
        }
      freeGames: games(
        filters: {
          price: { eq: 0 }
        }
        sort: ["release_date:asc"]
        pagination: { pageSize: 8 }
      ) {
          ...GameFragment
        }
  }
    ${BannerFragment}
    ${GameFragment}
`;


