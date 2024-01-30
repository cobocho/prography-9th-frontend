import styled from 'styled-components';
import { Props } from '.';

const BIG_HEIGHT = 70;

const MEDIUM_HEIGHT = 40;

const SMALL_HEIGHT = 20;

export const Container = styled.button<Props>`
  height: ${({ size }) => {
    switch (size) {
      case 'big':
        return `${BIG_HEIGHT}px`;
      case 'medium':
        return `${MEDIUM_HEIGHT}px`;
      case 'small':
        return `${SMALL_HEIGHT}px`;
    }
  }};

  padding: 0 20px;

  background-color: ${({ color }) => {
    switch (color) {
      case 'primary':
        return `lightgrey`;
      case 'secondary':
        return `pink`;
    }
  }};

  border-radius: ${({ size }) => {
    switch (size) {
      case 'big':
        return `${BIG_HEIGHT / 2}px`;
      case 'medium':
        return `${MEDIUM_HEIGHT / 2}px`;
      case 'small':
        return `${SMALL_HEIGHT / 2}px`;
    }
  }};
  border: none;

  &:hover {
    cursor: pointer;
  }

  &.skeleton {
    width: 70px;

    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }

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
