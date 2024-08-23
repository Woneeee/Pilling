import { CgPill } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { point } from "../GlobalStyled";
import { useEffect, useState } from "react";
import { IoLogOut } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: white;
`;

const Wrap = styled.div`
  max-width: 1260px;
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 510px) {
    padding: 12px 15px;
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -1px;
  svg {
    font-size: 23px;
  }
  @media screen and (max-width: 510px) {
    font-size: 23px;
    svg {
      font-size: 18px;
    }
  }
`;

const User = styled.ul`
  display: flex;
  li {
    margin-left: 30px;
    font-size: 25px;
    transition-duration: 0.2s;
  }
  li:hover {
    transform: scale(1.12);
  }
  @media screen and (max-width: 510px) {
    li {
      margin-left: 25px;
      font-size: 23px;
    }
  }
`;

export const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    (() => {
      if (localStorage.getItem("login") === "on") {
        setIsLogin(true);
      }
    })();
  }, [pathname]);

  const logoutHandler = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("login");
    alert("로그아웃 되었습니다 😊");
    setIsLogin(false);
  };

  return (
    <Container>
      <Wrap>
        <Logo>
          <Link to={routes.home}>
            <CgPill />
            &nbsp;Pilling
          </Link>
        </Logo>

        <User>
          <li>
            <Link to={routes.searchproduct}>
              <GoSearch />
            </Link>
          </li>

          <li>
            {isLogin ? (
              <Link onClick={logoutHandler}>
                <IoLogOut />
              </Link>
            ) : (
              <Link to={routes.login}>
                <FaUser />
              </Link>
            )}
          </li>
        </User>
      </Wrap>
    </Container>
  );
};
