import Heading from '@/components/Heading';
import Highlight, { HighlightProps } from '@/components/Highlight';
import { GameCardProps } from '@/components/GameCard';
import GameCardSlider from '@/components/GameCardSlider';
import * as S from './styles'

export type ShowCaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
}

const Showcase = ({
  title,
  highlight,
  games
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!title &&
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    }
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
</S.Wrapper>
);

export default Showcase;
