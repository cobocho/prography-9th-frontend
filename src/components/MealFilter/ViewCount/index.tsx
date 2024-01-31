import * as Styles from './index.styles';

interface Props {
  current: number;
  total: number;
}

const ViewCount = ({ current, total }: Props) => {
  return (
    <Styles.Container>
      <span className="current">{current}</span> / <span className="total">{total}</span> 개 조회
    </Styles.Container>
  );
};

export default ViewCount;
