/* tslint:disable */
/* eslint-disable */
import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./QueryHome";

export interface BannerFragment_image {
  __typename: "UploadFile";
  url: string;
}

export interface BannerFragment_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface BannerFragment_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface BannerFragment {
  __typename: "Banner";
  image: BannerFragment_image | null;
  title: string;
  subtitle: string;
  button: BannerFragment_button | null;
  ribbon: BannerFragment_ribbon | null;
}
