'use client';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import { Close } from '@styled-icons/material-outlined';
import Slider, { SliderSettings } from '@/components/Slider';
import * as S from './styles';
import { useState } from 'react';

const PrevArrow = () => <ArrowLeft aria-label="next image" />;
const NextArrow = () => <ArrowRight aria-label="previous image" />;

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

export type GalleryImageProps = {
  src: string;
  label: string;
}

export type GalleryProps = {
  items: GalleryImageProps[];
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => setIsOpen(true)}
          />
        ))}
      </Slider>
      <S.Modal
        aria-label="modal"
        isOpen={isOpen}
        aria-hidden={!isOpen}>
        <S.Close
          role='button'
          aria-label='close modal'
          onClick={() => setIsOpen(false)}
        >
          <Close size={40}/>
        </S.Close>
      </S.Modal>
    </S.Wrapper>
  );
}
export default Gallery;
