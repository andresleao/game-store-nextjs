'use client';
import Button from '@/components/Button';
import * as S from './styles'

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink?: string;
  backgroundImg: string;
  floatImg?: string;
  alignment?: 'right' | 'left';
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel = 'Buy now',
  buttonLink,
  backgroundImg,
  floatImg,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper backgroundImg={backgroundImg} alignment={alignment}>
    {!!floatImg && <S.FloatImg src={floatImg} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button
        as="a"
        href={buttonLink}
      >
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
);

export default Highlight;
