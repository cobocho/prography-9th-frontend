import styled from 'styled-components';
import { ColumnQuantityType } from '@store/filter';

interface ContainerProps {
  column: ColumnQuantityType;
}

export const Container = styled.ul<ContainerProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.column}, 1fr)`};
  grid-gap: 10px;

  width: 100%;
`;
