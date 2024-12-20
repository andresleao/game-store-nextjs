import { AddShoppingCart, Favorite, FavoriteBorder } from '@styled-icons/material-outlined';
import * as S from './styles';
import Button from '@/components/Button';
import Image from 'next/image';
import Ribbon, { RibbonColor, RibbonSize } from '@/components/Ribbon';
import Link from 'next/link';

export type GameCardProps = {
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  isFavorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColor;
  ribbonSize?: RibbonSize;
}

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  isFavorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
}: GameCardProps) => (
  <S.Wrapper>
   {!!ribbon &&
    <S.RibbonContainer>
      <Ribbon
        size={ribbonSize}
        color={ribbonColor}>
        {ribbon}
      </Ribbon>
    </S.RibbonContainer>
    }

    <S.ImageBox>
      <Link href={`games/${slug}`} passHref>
        <Image
          src={img}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
    </S.ImageBox>

   <S.Content>
    <Link href={`games/${slug}`} passHref style={{textDecoration: 'none'}}>
      <S.Info>
        <S.Title>
          {title}
        </S.Title>
        <S.Developer>
          {developer}
        </S.Developer>
      </S.Info>
    </Link>
    <S.FavButton role="button" onClick={onFav}>
      {isFavorite
        ? <Favorite aria-label="Remove from wish list" />
        : <FavoriteBorder aria-label="Add to wish list" />
      }
    </S.FavButton>
    <S.BuyBox>
      {!!promotionalPrice &&
        <S.Price isPromotional>
          {price}
        </S.Price>
      }
      <S.Price>{promotionalPrice || price}</S.Price>
      <Button
        icon={<AddShoppingCart />}
        size="small"
      />
    </S.BuyBox>
   </S.Content>
  </S.Wrapper>
);

export default GameCard;
