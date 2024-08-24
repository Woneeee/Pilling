import styled from "styled-components";
import { point } from "../../../GlobalStyled";

export const SearchContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 510px) {
    margin-top: 70px;
  }
`;

export const Form = styled.form`
  max-width: 1260px;
  width: 100%;
  position: relative;

  input {
    all: unset;
    width: 100%;
    height: 55px;
    padding: 0 20px;
    font-size: 18px;
    box-sizing: border-box;
    background-color: white;
    border: 2px solid #55555520;
    border-radius: 18px;
    &::placeholder {
      font-size: 17px;
      opacity: 0.7;
    }
  }
  button {
    all: unset;
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 510px) {
    padding: 0 15px;
    input {
      padding: 0 15px;
      height: 50px;
      font-size: 17px;
      &::placeholder {
        font-size: 16px;
      }
    }
    button {
      right: 25px;
      font-size: 25px;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: ${point.color};
  margin-top: 7px;
  padding: 0 20px;
  @media screen and (max-width: 510px) {
    font-size: 15px;
    padding: 0 15px;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuWrap = styled.ul`
  max-width: 1260px;
  width: 100%;
  display: flex;
  li {
    width: 50%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #55555530;
    a {
      height: 100%;
      line-height: 45px;
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 510px) {
    padding: 0 15px;
  }
`;

export const WordContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const WordWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  h2 {
    font-weight: 500;
  }
  @media screen and (max-width: 510px) {
    padding: 0 15px;
  }
`;

export const Word = styled.ul`
  width: 100%;
  display: flex;
  margin-top: 15px;
  li {
    padding: 10px 12px;
    /* background-color: ${point.verySmooth}; */
    border-radius: 16px;
    margin-right: 20px;
    border: 1px solid ${point.smooth};
    font-size: 15px;
  }
  @media screen and (max-width: 510px) {
    li {
      margin-right: 10px;
    }
  }
`;
