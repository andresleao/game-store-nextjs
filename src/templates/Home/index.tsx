import Menu from '@/components/Menu';
import { Container } from '@/components/Container';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import { BannerProps } from '@/components/Banner';
import { GameCardProps } from '@/components/GameCard';
import Highlight, { HighlightProps } from '@/components/Highlight';
import banners from '@/components/BannerSlider/mock';
import newGames from '@/components/GameCardSlider/mock';
import highlight from '@/components/Highlight/mock';
import GameCardSlider from '@/components/GameCardSlider';
import * as S from './styles';
import BannerSlider from '@/components/BannerSlider';

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

export default async function HomePage() {
    const data = await getData();

    return(
        <section>
            <Container>
                <Menu />
                <S.SectionBanner>
                    <BannerSlider items={data.banners} />
                </S.SectionBanner>
            </Container>
            <S.SectionNews>
                <Container>
                    <Heading
                        lineLeft
                        lineColor='secondary'
                    >
                        News
                    </Heading>
                    <GameCardSlider items={newGames} color="black" />
                </Container>
            </S.SectionNews>
            <S.SectionMostPopular>
                <Heading lineLeft lineColor="secondary">
                    Most Popular
                </Heading>
                <Highlight {...data.mostPopularHighlight} />
                <GameCardSlider items={data.mostPopularGames} />
            </S.SectionMostPopular>
            <S.SectionUpcoming>
                <Heading lineLeft lineColor="secondary">
                    Upcomming
                </Heading>
                <GameCardSlider items={data.upcommingGames} />
                <Highlight {...data.upcommingHighligth} />
                <GameCardSlider items={data.upcommingMoreGames} />
            </S.SectionUpcoming>
            <S.SectionFreeGames>
                <Heading lineLeft lineColor="secondary">
                    Free games
                </Heading>
                <Highlight {...data.freeHighligth} />
                <GameCardSlider items={data.freeGames} />
            </S.SectionFreeGames>
              <S.SectionFooter>
                <Container>
                    <Footer />
                </Container>
            </S.SectionFooter>
        </section>
    );
};
