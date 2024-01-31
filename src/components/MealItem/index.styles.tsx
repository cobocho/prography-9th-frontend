import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 1/ 1;

  border-radius: 10px;

  background-color: lightgray;
`;

export const Info = styled.div`
  min-height: 30px;
  margin: 10px 0 30px 0;
`;
