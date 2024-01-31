import { media } from '@styles/media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 20px 0;

  .dropdown-box {
    display: flex;
    gap: 10px;
  }

  ${media.desktop`
    .dropdown-box {
      .column-quantity {
        display: none
      }
    }
  `}
`;
