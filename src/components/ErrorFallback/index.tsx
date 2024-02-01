import * as Styles from './index.styles';

const ErrorFallback = () => {
  return (
    <Styles.Container>
      <p>네트워크 통신 과정에서 에러가 발생하였습니다!</p>
    </Styles.Container>
  );
};

export default ErrorFallback;
