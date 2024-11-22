'use client';
import Base from '@/templates/Base';
import GameInfo, { GameInfoProps } from '@/components/GameInfo';
import Gallery, { GalleryImageProps } from '@/components/Gallery';
import TextContent from '@/components/TextContent';
import GameDetails, { GameDetailsProps } from '@/components/GameDetails';
import { GameCardProps } from '@/components/GameCard';
import { HighlightProps } from '@/components/Highlight';
import Showcase from '@/components/Showcase';
import * as S from './styles';
import Image from 'next/image';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
}

export default function Game({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
}: GameTemplateProps) {
  return (
    <Base>
      <S.Cover>
        <Image
          src={cover}
          alt={gameInfo.title}
          fill
          priority
        />
      </S.Cover>

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>
        {!!gallery &&
          <S.SectionGallery>
            <Gallery items={gallery}/>
          </S.SectionGallery>
        }
        <S.SectionDescription>
          <TextContent
            title='Description'
            content={description}
          />
        </S.SectionDescription>
        <S.SectionGameDetails>
          <GameDetails {...details} />
        </S.SectionGameDetails>

        <Showcase
          title='Upcomming'
          games={upcomingGames}
          highlight={upcomingHighlight}
        />
        <Showcase
          title='You may like these games'
          games={recommendedGames}
        />
      </S.Main>
    </Base>
  );
}
