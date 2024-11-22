'use client';
import GameCard, { GameCardProps } from '@/components/GameCard';
import Base from '@/templates/Base';
import * as S from './styles';
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar';
import { Grid } from '@/components/Grid';
import { KeyboardArrowDown } from '@styled-icons/material-outlined';

export type GamesTemplateProps = {
  games?: GameCardProps[];
  finteredItems: ItemProps[];
}

const Games = ({
  games = [],
  finteredItems = []
}: GamesTemplateProps) => {
  const handleFilter = () => {return;}

  const handleShowMore = () => {return;}

  return (
    <Base>
      <S.Main>
      <ExploreSidebar
          items={finteredItems}
          onFilter={handleFilter}
        />

        <section>
          <Grid>
            {games.map((g) => (
              <GameCard
                key={g.title}
                {...g}
              />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <KeyboardArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  );
};

export default Games;
