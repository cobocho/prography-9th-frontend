import { CSSProperties } from 'styled-components';
import * as Styles from './index.styles';
import { PropsWithChildren } from 'react';

export interface SkeletonProps extends CSSProperties, PropsWithChildren {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  borderradius?: CSSProperties['borderRadius'];
}

const Skeleton = ({
  width = 'auto',
  height = 'auto',
  borderradius = '0px',
  children,
  ...rest
}: SkeletonProps) => {
  return (
    <Styles.Container width={width} height={height} borderradius={borderradius} style={rest}>
      {children}
    </Styles.Container>
  );
};

export default Skeleton;
