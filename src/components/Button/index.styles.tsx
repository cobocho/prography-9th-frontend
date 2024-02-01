import styled from 'styled-components';
import { Props } from '.';
import { memo } from 'react';

const BIG_HEIGHT = 70;

const MEDIUM_HEIGHT = 40;

const SMALL_HEIGHT = 20;

export const Container = memo(styled.button<Props>`
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

  font-size: ${({ size }) => {
    switch (size) {
      case 'big':
        return `24px`;
      case 'medium':
        return `16px`;
      case 'small':
        return `12px`;
    }
  }};

  &:hover {
    cursor: pointer;
  }
`);
