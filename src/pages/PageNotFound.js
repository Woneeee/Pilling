import styled from "styled-components";

const Container = styled.div`
  padding: 250px 0;
  text-align: center;
`;

const Text = styled.div`
  h3 {
    font-size: 60px;
    margin-bottom: 40px;
  }
  p {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const PageNotFound = () => {
  return (
    <Container>
      <Text>
        <h3>잘못된 경로입니다!</h3>
        <p>죄송합니다. 해당 페이지를 찾을 수 없습니다 😢</p>
        <p>홈페이지로 이동해 원하시는 컨텐츠를 찾아보세요.</p>
      </Text>
    </Container>
  );
};
