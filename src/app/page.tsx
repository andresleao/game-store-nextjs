import { RibbonColor, RibbonSize } from "@/components/Ribbon";
import { QueryHome, QueryHome_banners } from "@/graphql/generated/QueryHome";
import { QUERY_HOME } from "@/graphql/queries/home";
import { initializeApollo } from "@/lib/client";
import HomePage, { HomeTemplateProps } from "@/templates/Home";
import newGames from '@/components/GameCardSlider/mock';
import highlight from '@/components/Highlight/mock';

// async function getHomeData() {
//   const apolloClient = initializeApollo();

//   const { data: {
//     banners,
//     newGames,
//   }} = await apolloClient.query<QueryHome>({
//       query: QUERY_HOME,
//       fetchPolicy: 'network-only', // Used for first execution
//   });

//   return {
//     banners,
//     newGames
//   };
// }


async function getHomeResponse() {
  try {
    const banners = await fetch('http://localhost:1337/api/banners');
    const response = await fetch('http://localhost:1337/api/home?[populate][image][populate][category][populate][newGames]=*');

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error(`Erro ao buscar dados: ${response.status} - ${errorDetails}`);
      throw new Error(`Erro ao buscar dados: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const ban = banners.json();
    // console.log(JSON.stringify(jsonResponse, null, 2));

    // if (!jsonResponse || !jsonResponse.data) {
    //   throw new Error('Resposta da API não contém o campo esperado `data`.');
    // }

    // const { data } = jsonResponse;

    return {
      banners,
      newGames: data.attributes?.newGames ?? [],
    };
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
}


async function getData(): Promise<HomeTemplateProps> {
  const api: QueryHome = await getHomeResponse();

  if (!api) {
    throw new Error('Banners não encontrados na resposta da API');
  }

  const bannersData = api.banners.map((b: QueryHome_banners) => ({
      img: `http://localhost:1337${b.image!.url}`,
      title: b.title,
      subtitle: b.subtitle,
      buttonLabel: b.button?.label,
      buttonLink: b.button?.link,
      ribbon: b.ribbon?.text || null,
      ribbonColor: b.ribbon?.color as RibbonColor || null ,
      ribbonSize: b.ribbon?.size as RibbonSize || null
  }));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
          banners: bannersData,
          newGames: api.newGames.map(game => ({
            title: game.name,
            slug: game.slug,
            developer: game.developers[0].name,
            img: `http://localhost:1337${game.cover?.url}`,
            price: game.price,
            promotionalPrice: game.price
          })),
          mostPopularHighlight: highlight,
          mostPopularGames: newGames,
          upcommingGames: newGames,
          upcommingHighligth: highlight,
          upcommingMoreGames: newGames,
          freeGames: newGames,
          freeHighligth: highlight,
      });
    });
  });
}

export default async function Home() {
  const dataHome = await getData();

  return <HomePage {...dataHome} />;
}
