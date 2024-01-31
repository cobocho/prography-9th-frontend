import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

  &.skeleton {
    aspect-ratio: 1/ 1.4;

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

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 1/ 1;

  border-radius: 10px;
`;

export const Info = styled.div`
  padding: 10px 0 30px 0;
`;
