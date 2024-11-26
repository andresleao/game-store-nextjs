import { gql } from "@apollo/client";

export const QUERY_GAMES = gql`
    query QueryGames($pageSize: Int!) {
        games(pagination: { pageSize: $pageSize }) {
            name
            slug
            cover {
            url
            }
            developers {
            name
            }
            price
        }
    }
`;

export const QUERY_GAME_BY_SLUG = gql`
    query QueryGameBySlug($slug: String!) {
        games(filters: { slug: { eq: $slug } }) {
            name
            short_description
            description
            price
            rating
            release_date
            gallery {
            src: url
            label: alternativeText
            }
            cover {
            src: url
            }
            developers {
            name
            }
            categories {
            name
            }
            platforms {
            name
            }
        }
    }
`;
