import Heading from '@/components/Heading';
import MediaMatch from '@/components/MediaMatch';
import { Apple, Windows, Linux } from '@styled-icons/fa-brands';
import * as S from './styles';

export type  Platform = 'windows' | 'linux' | 'mac';

export type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
  developer: string;
  platforms: Platform[];
  releaseDate: string;
  rating: Rating;
  genres: string[];
  publisher: string;
};

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  rating,
  genres,
  publisher,
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title='Linux' size={18} />,
    mac: <Apple title='Mac' size={18} />,
    windows: <Windows title='Windows' size={18} />,
  };

  const releaseDateDisplay = () => {
    return new Intl.DateTimeFormat(
      'en-US',
      {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }
  ).format(new Date(releaseDate))};

  const ratingDisplay = () => {
    if (rating === 'BR0') return 'FREE';

    return `${rating.replace('BR', '')}+`;
  };

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>
      <S.Content>
        <S.Block>
          <S.Label>{developer}</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {releaseDateDisplay()}
          </S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
                <S.Icon key={icon}>
                  {platformIcons[icon]}
                </S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>
        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>
            {ratingDisplay()}
          </S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>
            {genres.join(' / ')}
          </S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameDetails;
