import { HEADER_HEIGHT } from '@styles/layout-variables';
import { device, media } from '@styles/media';
import styled from 'styled-components';

export const Container = styled.div`
  width: ${device.desktop};

  margin: 0 auto;
  padding-top: calc(${HEADER_HEIGHT + 80}px);

  ${media.desktop`
    width: 100dvw;
    padding: calc(${HEADER_HEIGHT + 20}px) 20px;
  `}
`;
