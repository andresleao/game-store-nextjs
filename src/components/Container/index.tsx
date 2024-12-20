'use client';

import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({theme}) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    paddgin-left: calc(${theme.grid.gutter} / 2);
    paddgin-right: calc(${theme.grid.gutter} / 2);
  `}
`;
