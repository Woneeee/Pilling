import styled from "styled-components";
import { point } from "../../../GlobalStyled";

const Container = styled.div`
  width: 100%;
  height: 720px;
  display: flex;
  align-items: center;
  background: url(${(props) => props.$bgUrl}) no-repeat top / cover;
  position: relative;
  background-position-y: 22%;

  @media screen and (max-width: 510px) {
    height: 500px;
  }
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.1);
  position: absolute;
  top: 0;
  left: 0;
`;

const Text = styled.div`
  margin-top: 400px;
  margin-left: 40px;
  h2 {
    color: white;
    font-size: 38px;
    line-height: 55px;
    font-weight: 500;
  }
  h2:nth-child(2) {
    font-size: 46px;
  }

  @media screen and (max-width: 510px) {
    margin-top: 300px;
    margin-left: 15px;
    max-width: 330px;
    h2 {
      font-size: 27px;
      font-weight: 600;
      line-height: 40px;
    }
    h2:nth-child(2) {
      font-size: 32px;
    }
  }
`;

export const MainBanner = () => {
  return (
    <Container $bgUrl="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      <Bg />
      <Text>
        <h2>Filling + Pill 💊</h2>
        <h2>자신의 몸을 건강하게 채우세요</h2>
      </Text>
    </Container>
  );
};
