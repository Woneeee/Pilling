import styled from "styled-components";
import { point } from "../../../GlobalStyled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 510px) {
    height: 100%;
  }
`;

export const Wrap = styled.form`
  max-width: 400px;
  width: 100%;
  height: 600px;
  border: 1px solid #88888860;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
  margin: 220px auto;
  position: relative;
  h2 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 50px;
    font-weight: 500;
  }
  input {
    all: unset;
    border: 1px solid #55555540;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    margin-top: 6px;
    padding: 0 10px;
    box-sizing: border-box;

    &::placeholder {
      font-size: 15px;
      opacity: 0.7;
    }
  }
  button {
    all: unset;
    width: 100%;
    height: 55px;
    margin-top: 20px;
    background-color: ${point.smooth};
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    font-weight: 500;
  }

  @media screen and (max-width: 510px) {
    margin: 110px auto;
    max-width: 370px;
    width: 100%;
    height: 520px;
    padding: 30px 20px;
    h2 {
      margin-bottom: 35px;
    }
  }
`;

export const Text = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 16px;
    font-weight: 400;
  }
  span {
    color: crimson;
    font-weight: 700;
    font-size: 18px;
  }
  p {
    letter-spacing: -1px;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 15px;
  color: ${point.color};
  margin-top: 5px;
`;
