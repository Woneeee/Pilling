import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const point = {
  color: "#5871ff",
  smooth: "#5871ff40",
  verySmooth: "#5871ff10",
};

export const GlobalStyled = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    color: #322e22;
    font-family: "Noto Sans KR", sans-serif;
  }

  a {
    text-decoration: none;
    color: #322e22;
  }

  li {
    list-style: none;
  }

  img {
    width: 100%;
    display: block;
  }
`;
