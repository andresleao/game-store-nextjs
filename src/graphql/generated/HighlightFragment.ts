/* tslint:disable */
/* eslint-disable */

export enum ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT {
    left = "left",
    right = "right",
  }

export interface HighlightFragment_background {
  __typename: "UploadFile";
  url: string;
}

export interface HighlightFragment_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface HighlightFragment {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HighlightFragment_background | null;
  floatImage: HighlightFragment_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}
