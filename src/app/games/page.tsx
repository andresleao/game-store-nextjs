import Games from "@/templates/Games";
import SidebarItemsMock from '@/components/ExploreSidebar/mock';
import { initializeApollo } from "@/lib/client";
import { QUERY_GAMES } from "@/graphql/queries/games";
import { QueryGames, QueryGamesVariables } from "@/graphql/generated/QueryGames";
import formatPrice from "@/utils/formatPrice";

export default async function GamesPage() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {pageSize: 9}
  });

  const games = data.games.map((g) => ({
    slug: g.slug,
    title: g.name,
    developer: g.developers[0].name,
    img: `http://localhost:1337${g.cover?.url}`,
    price: formatPrice(g.price)
  }));

  return (
    <Games
      finteredItems={SidebarItemsMock}
      games={games}
    />
  );
}
