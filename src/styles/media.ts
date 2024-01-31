import { css, Interpolation } from 'styled-components';
import { RuleSet, Styles } from 'styled-components/dist/types';

export const device = {
  desktop: '1000px',
  phone: '600px',
};

type deviceTypes = keyof typeof device;

export const media: {
  [key in deviceTypes]: (
    styles: Styles<object>,
    ...interpolations: Interpolation<object>[]
  ) => RuleSet;
} = {
  desktop: (styles, ...interpolations) => css`
    @media (max-width: ${device.desktop}) {
      ${css(styles, ...interpolations)}
    }
  `,
  phone: (styles, ...interpolations) => css`
    @media (max-width: ${device.phone}) {
      ${css(styles, ...interpolations)}
    }
  `,
};
