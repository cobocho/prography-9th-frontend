import Button from '@components/Button';
import * as Styles from './index.styles';

interface Props {
  reset: () => void;
}

const ErrorFallback = ({ reset }: Props) => {
  return (
    <Styles.Container>
      <p>네트워크 통신 과정에서 에러가 발생하였습니다!</p>
      <Button onClick={reset}>재시도</Button>
    </Styles.Container>
  );
};

export default ErrorFallback;
