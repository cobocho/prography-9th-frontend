import styled from 'styled-components';
import { SkeletonProps } from '.';

export const Container = styled.div<SkeletonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border-radius: ${({ borderradius }) => borderradius};

  animation: skeleton-gradient 1.8s infinite ease-in-out;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;
