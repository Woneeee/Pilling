import styled from "styled-components";
import { point } from "../../../GlobalStyled";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  max-width: 1260px;
  width: 100%;
  height: 600px;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: top;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 30px;
    line-height: 40px;
    font-weight: 500;
  }
`;

export const MainBanner = () => {
  return (
    <Container>
      <Wrap>
        <img src="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <Text>
          <h2>Filling + Pill 💊</h2>
          <h2>자신의 몸을 건강하게 채우세요</h2>
        </Text>
      </Wrap>
    </Container>
  );
};
