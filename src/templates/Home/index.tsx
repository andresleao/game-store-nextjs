import { Container } from '@/components/Container';
import { BannerProps } from '@/components/Banner';
import { GameCardProps } from '@/components/GameCard';
import { HighlightProps } from '@/components/Highlight';
import newGames from '@/components/GameCardSlider/mock';
import * as S from './styles';
import BannerSlider from '@/components/BannerSlider';
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

export default async function HomePage({
    ...props
}: HomeTemplateProps) {

    return(
        <Base>
            <Container>
                <S.SectionBanner>
                    <BannerSlider items={props.banners} />
                </S.SectionBanner>
            </Container>

            <S.SectionNews>
                <Showcase title='News' games={newGames} />
            </S.SectionNews>

            <Showcase
                title='Most Popular'
                highlight={props.mostPopularHighlight}
                games={props.mostPopularGames}
            />

            <S.SectionUpcoming>
                <Showcase
                    title='Upcoming'
                    games={props.upcommingGames}
                />
                <Showcase
                    highlight={props.upcommingHighligth}
                    games={props.upcommingMoreGames}
                />
            </S.SectionUpcoming>

            <Showcase
                title='Free games'
                highlight={props.freeHighligth}
                games={props.freeGames}
            />
        </Base>
    );
};
