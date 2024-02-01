import Button from '@components/Button';
import { PATH } from '@constants/path';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      <p>페이지를 찾을 수 없습니다!</p>
      <Link to={PATH.root}>
        <Button size="big">홈으로</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20dvh 0;

  p {
    margin-bottom: 50px;

    font-size: 3rem;
    text-align: center;
  }
`;

export default NotFound;
