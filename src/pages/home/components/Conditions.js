import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../../routes";
import { FaAngry, FaArrowRight, FaHeartbeat } from "react-icons/fa";
import { BiSolidSleepy } from "react-icons/bi";
import { MdRemoveRedEye } from "react-icons/md";
import { LuBone } from "react-icons/lu";
import { GiMuscleUp } from "react-icons/gi";
import { point } from "../../../GlobalStyled";

const ConContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  max-width: 1260px;
  width: 100%;
  /* background-color: pink; */
  h2 {
    font-size: 25px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const GoSearch = styled.div`
  width: 25%;
  border: 2px solid ${point.color};
  margin-top: 20px;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  p {
    font-size: 15px;
  }
  &:hover {
    transform: scale(1.04);
  }
`;

const Condition = styled.ul`
  width: 100%;
  /* background-color: aliceblue; */
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 40px;
  li {
    text-align: center;
    h3 {
      font-weight: 500;
      margin-top: 10px;
    }
    &:hover {
      transform: scale(1.06);
    }
  }
`;

const Bg = styled.div`
  height: 176px;
  border-radius: 100%;
  background-color: ${point.verySmooth};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 60px;
  }
`;

export const Conditions = () => {
  return (
    <ConContainer>
      <Wrap>
        <h2>어떤 고민이 있으신가요?</h2>

        <Link to={routes.search}>
          <GoSearch>
            <p>고민별 제품 찾으러가기</p>
            <span>
              <FaArrowRight />
            </span>
          </GoSearch>
        </Link>

        <Condition>
          <li>
            <Link to={"/recommand/스트레스"}>
              <Bg>
                <FaAngry />
              </Bg>
              <h3>스트레스</h3>
            </Link>
          </li>
          <li>
            <Link to={"/recommand/콜레스테롤"}>
              <Bg>
                <FaHeartbeat />
              </Bg>
              <h3>콜레스테롤</h3>
            </Link>
          </li>
          <li>
            <Link to={"/recommand/피로"}>
              <Bg>
                <BiSolidSleepy />
              </Bg>
              <h3>피로</h3>
            </Link>
          </li>
          <li>
            <Link to={"/recommand/눈"}>
              <Bg>
                <MdRemoveRedEye />
              </Bg>
              <h3>눈</h3>
            </Link>
          </li>
          <li>
            <Link to={"/recommand/뼈"}>
              <Bg>
                <LuBone />
              </Bg>
              <h3>뼈</h3>
            </Link>
          </li>
          <li>
            <Link to={"/recommand/운동단백질"}>
              <Bg>
                <GiMuscleUp />
              </Bg>
              <h3>운동 단백질</h3>
            </Link>
          </li>
        </Condition>
      </Wrap>
    </ConContainer>
  );
};
