import { DESKTOP_CONTAINER_WIDTH, HEADER_HEIGHT } from '@styles/layout-variables';
import styled from 'styled-components';

export const Container = styled.div`
  width: ${DESKTOP_CONTAINER_WIDTH};

  margin: 0 auto;
  padding: calc(${HEADER_HEIGHT + 80}px) 0;
`;
