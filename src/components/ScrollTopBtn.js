import { LuArrowUpToLine } from "react-icons/lu";
import styled from "styled-components";
import { point } from "../GlobalStyled";
import { useEffect } from "react";

const Btn = styled.div`
  background-color: ${point.smooth};
  width: 90px;
  height: 90px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  color: ${point.color};
  cursor: pointer;
`;

export const ScrollTopBtn = () => {
  const btnHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Btn onClick={btnHandler}>
      <LuArrowUpToLine />
    </Btn>
  );
};
