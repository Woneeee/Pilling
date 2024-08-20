import { BounceLoader } from "react-spinners";
import styled from "styled-components";
import { point } from "../GlobalStyled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${point.smooth};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Loading = () => {
  return (
    <Container>
      <Wrap>
        <BounceLoader size={55} color={point.color} />
      </Wrap>
    </Container>
  );
};
