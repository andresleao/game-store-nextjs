/* tslint:disable */
/* eslint-disable */

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
    primary = "primary",
    secondary = "secondary",
  }
  export enum ENUM_COMPONENTPAGERIBBON_SIZE {
    normal = "normal",
    small = "small",
  }

export interface QueryHome_banners_image {
  __typename: "UploadFile";
  url: string;
}
export interface QueryHome_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface QueryHome_banners {
  __typename: "Banner";
  image: QueryHome_banners_image | null;
  title: string;
  subtitle: string;
  button: QueryHome_banners_button | null;
  ribbon: QueryHome_banners_ribbon | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
}
