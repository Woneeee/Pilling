import { CgPill } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Menu = styled.div`
  font-size: 18px;
  width: 25%;
  display: flex;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  li {
    margin-left: 30px;
    font-size: 23px;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Wrap>
        <Link to={routes.home}>
          <Logo>
            <CgPill />
            &nbsp;Pilling
          </Logo>
        </Link>

        <Menu>
          <Link>
            <li>성분별 영양제</li>
          </Link>

          <Link>
            <li>기능별 영양제</li>
          </Link>
        </Menu>

        <User>
          <Link to={routes.search}>
            <li>
              <GoSearch />
            </li>
          </Link>

          <Link to={routes.login}>
            <li>
              <FaUser />
            </li>
          </Link>
        </User>
      </Wrap>
    </Container>
  );
};
