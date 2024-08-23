import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../../routes";
import { FaArrowRight } from "react-icons/fa";
import { BiSolidSleepy } from "react-icons/bi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { LuBone } from "react-icons/lu";
import { GiMuscleUp } from "react-icons/gi";
import { point } from "../../../GlobalStyled";
import { RiHeartPulseLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";

const ConContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  @media screen and (max-width: 510px) {
    margin-top: 45px;
  }
`;

const Wrap = styled.div`
  max-width: 1260px;
  width: 100%;
  h2 {
    font-size: 25px;
    font-weight: 500;
    letter-spacing: -1px;
  }
  @media screen and (max-width: 510px) {
    padding: 0 15px;
  }
`;

const GoSearch = styled.div`
  width: 25%;
  border: 2px solid ${point.color};
  margin-top: 20px;
  border-radius: 40px;
  padding: 10px;
  p {
    font-size: 15px;
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    transform: scale(1.04);
  }
  @media screen and (max-width: 510px) {
    width: 250px;
    padding: 8px;
    &:hover {
      transform: none;
    }
  }
`;

const Condition = styled.ul`
  width: 100%;
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 40px;
  li {
    text-align: center;
    h3 {
      font-weight: 500;
      margin-top: 15px;
    }
    &:hover {
      transform: scale(1.06);
    }
  }
  @media screen and (max-width: 510px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 25px;
    margin-top: 30px;
    li {
      display: flex;
      justify-content: center;
      h3 {
        margin-top: 10px;
        font-size: 15px;
        opacity: 0.8;
      }
      &:hover {
        transform: none;
      }
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
  @media screen and (max-width: 510px) {
    width: 100px;
    height: 100px;
    svg {
      font-size: 40px;
    }
  }
`;

export const Conditions = () => {
  return (
    <ConContainer>
      <Wrap>
        <h2>어떤 고민이 있으신가요?</h2>

        <GoSearch>
          <Link to={routes.searchfunction}>
            <p>
              고민별 제품 찾으러가기 <FaArrowRight />
            </p>
          </Link>
        </GoSearch>

        <Condition>
          <li>
            <Link to={"/recommand/면역력"}>
              <Bg>
                <MdOutlineHealthAndSafety />
              </Bg>
              <h3>면역력</h3>
            </Link>
          </li>
          <li>
            <Link to={"/recommand/콜레스테롤"}>
              <Bg>
                <RiHeartPulseLine />
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
                <IoEyeOutline />
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
            <Link to={"/recommand/단백질"}>
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
