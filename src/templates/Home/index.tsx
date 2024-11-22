import { Container } from '@/components/Container';
import { BannerProps } from '@/components/Banner';
import { GameCardProps } from '@/components/GameCard';
import { HighlightProps } from '@/components/Highlight';
import banners from '@/components/BannerSlider/mock';
import newGames from '@/components/GameCardSlider/mock';
import highlight from '@/components/Highlight/mock';
import * as S from './styles';
import BannerSlider from '@/components/BannerSlider';
import { gql } from '@apollo/client';
import { initializeApollo } from '@/lib/client';
import Showcase from '@/components/Showcase';
import Base from '../Base';

export type HomeTemplateProps = {
    banners: BannerProps[];
    newGames: GameCardProps[];
    mostPopularHighlight: HighlightProps;
    mostPopularGames: GameCardProps[];
    upcommingGames: GameCardProps[];
    upcommingHighligth: HighlightProps;
    upcommingMoreGames: GameCardProps[];
    freeGames: GameCardProps[];
    freeHighligth: HighlightProps;
}

async function getData(): Promise<HomeTemplateProps> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
            banners: banners,
            newGames: newGames,
            mostPopularHighlight: highlight,
            mostPopularGames: newGames,
            upcommingGames: newGames,
            upcommingHighligth: highlight,
            upcommingMoreGames: newGames,
            freeGames: newGames,
            freeHighligth: highlight,
        });
      }, 1000);
    });
}

const GET_GAMES_QUERY = gql`
    query {
        games(pagination: { page: 1, pageSize: 100 }) {
            name
        }
    }
`;

type GameProps = {
    name: string;
}

type GamesResponseProps = {
    games: GameProps[]
}

export default async function HomePage() {
    const dataHome = await getData();
    const apolloClient = initializeApollo();
    const { data: { games } } = await apolloClient.query<GamesResponseProps>({query: GET_GAMES_QUERY});

    return(
        <Base>
            <Container>
                <S.SectionBanner>
                    <BannerSlider items={dataHome.banners} />
                </S.SectionBanner>
            </Container>

            <S.SectionNews>
                <Showcase title='News' games={newGames} />
            </S.SectionNews>

            <Showcase
                title='Most Popular'
                highlight={dataHome.mostPopularHighlight}
                games={dataHome.mostPopularGames}
            />

            <S.SectionUpcoming>
                <Showcase
                    title='Upcoming'
                    games={dataHome.upcommingGames}
                />
                <Showcase
                    highlight={dataHome.upcommingHighligth}
                    games={dataHome.upcommingMoreGames}
                />
            </S.SectionUpcoming>

            <Showcase
                title='Free games'
                highlight={dataHome.freeHighligth}
                games={dataHome.freeGames}
            />
        </Base>
    );
};
