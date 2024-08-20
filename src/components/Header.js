import { CgPill } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { point } from "../GlobalStyled";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
`;

const Wrap = styled.div`
  max-width: 1260px;
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -1px;
  svg {
    font-size: 23px;
  }
`;

const User = styled.ul`
  display: flex;
  li {
    margin-left: 30px;
    font-size: 23px;
    transition-duration: 0.2s;
  }
  li:hover {
    transform: scale(1.12);
  }
`;

export const Header = () => {
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
            <Link to={routes.search}>
              <GoSearch />
            </Link>
          </li>

          <li>
            <Link to={routes.login}>
              <FaUser />
            </Link>
          </li>
        </User>
      </Wrap>
    </Container>
  );
};
