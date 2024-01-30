import { DESKTOP_CONTAINER_WIDTH, HEADER_HEIGHT } from '@styles/layout-variables';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  position: fixed;
  left: 0;
  right: 0;

  width: ${DESKTOP_CONTAINER_WIDTH};
  height: ${HEADER_HEIGHT}px;

  padding: 20px;
  margin: 0 auto;
`;

export const LogoImage = styled.img`
  height: inherit;
`;
