import { RibbonColor, RibbonSize } from "@/components/Ribbon";
import { QueryHome, QueryHome_banners } from "@/graphql/generated/QueryHome";
import { QUERY_HOME } from "@/graphql/queries/home";
import { initializeApollo } from "@/lib/client";
import HomePage, { HomeTemplateProps } from "@/templates/Home";
import newGames from '@/components/GameCardSlider/mock';
import highlight from '@/components/Highlight/mock';

async function getHomeData() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryHome>({
      query: QUERY_HOME,
  });

  return data;
}

async function getBanners() {
  try {
    const response = await fetch('http://localhost:1337/api/banners?populate=*');

    if (!response.ok) {
      throw new Error('Erro ao buscar banners');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}

async function getData(): Promise<HomeTemplateProps> {
  const api = await getBanners();

  if (!api) {
    throw new Error('Banners não encontrados na resposta da API');
  }

  const bannersData = api.data.map((b: QueryHome_banners) => ({
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
          newGames: newGames,
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
