import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
    @media (min-width: 360px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 600px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 960px) {
      ${css(...args)}
    }
  `,
};
