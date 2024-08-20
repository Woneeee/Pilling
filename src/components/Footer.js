import styled from "styled-components";
import { point } from "../GlobalStyled";

const Container = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 300px;
  background-color: ${point.smooth};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return <Container>&copy; Woneeee 2024</Container>;
};
