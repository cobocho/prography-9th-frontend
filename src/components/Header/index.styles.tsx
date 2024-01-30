import { DESKTOP_CONTAINER_WIDTH, HEADER_HEIGHT } from '@styles/layout-variables';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;

  width: 100dvw;
  height: ${HEADER_HEIGHT}px;
`;

export const HeaderBox = styled.header`
  width: ${DESKTOP_CONTAINER_WIDTH};
  height: 100%;

  padding: 10px;
  margin: auto;
`;

export const LogoImage = styled.img`
  height: 100%;
`;
