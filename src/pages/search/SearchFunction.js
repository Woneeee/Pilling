import { useForm } from "react-hook-form";
import {
  SearchContainer,
  Form,
  ErrorMessage,
  MenuContainer,
  MenuWrap,
  WordContainer,
  WordWrap,
  Word,
} from "./components/SearchStyle";
import { Link, useNavigate } from "react-router-dom";
import { point } from "../../GlobalStyled";
import { routes } from "../../routes";
import { GoSearch } from "react-icons/go";
import { useScrollTop } from "../../lib/useScrollTop";
import { supDetail } from "../../api";
import { useState } from "react";
import styled from "styled-components";

const NoResult = styled.div`
  font-size: 25px;
  font-weight: 500;
  max-width: 1260px;
  margin: 0 auto;
  @media screen and (max-width: 510px) {
    padding: 0 15px;
  }
`;

export const SearchFunction = () => {
  useScrollTop();

  const [supDetailData, setSupDetailData] = useState();
  const [noResult, setNoResult] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navi = useNavigate();
  const functionHandler = async ({ condition }) => {
    const {
      body: { items: detail1 },
    } = await supDetail(1);
    const {
      body: { items: detail2 },
    } = await supDetail(2);
    const {
      body: { items: detail3 },
    } = await supDetail(3);
    const supDetailResult = detail1.concat(detail2, detail3);
    setSupDetailData(supDetailResult);

    const data = supDetailResult.filter((res) =>
      res.item.MAIN_FNCTN.includes(condition)
    );
    if (data.length !== 0) {
      navi(`/recommand/${condition}`);
    } else {
      setNoResult("검색 결과가 없습니다 😢");
    }
  };

  return (
    <>
      <SearchContainer onSubmit={handleSubmit(functionHandler)}>
        <Form>
          <input
            {...register("condition", {
              required: "검색어를 입력해주세요",
            })}
            type="text"
            placeholder="평소 건강고민을 검색해보세요."
          />

          <button>
            <GoSearch />
          </button>
          <ErrorMessage>{errors?.function?.message}</ErrorMessage>
        </Form>
      </SearchContainer>

      <MenuContainer>
        <MenuWrap>
          <li>
            <Link to={routes.searchproduct}>영양제 검색하기</Link>
          </li>

          <li>
            <Link
              to={routes.searchfunction}
              style={{
                borderBottom: `2px solid ${point.color}`,
                color: point.color,
                fontWeight: 500,
                opacity: 1,
              }}
            >
              건강고민별 검색하기
            </Link>
          </li>
        </MenuWrap>
      </MenuContainer>

      <WordContainer>
        <WordWrap>
          <h2>추천 검색어</h2>

          <Word>
            <li>
              <Link to={"/recommand/피부"}># 피부</Link>
            </li>

            <li>
              <Link to={"/recommand/항산화"}># 항산화</Link>
            </li>

            <li>
              <Link to={"/recommand/체지방"}># 체지방</Link>
            </li>

            <li>
              <Link to={"/recommand/혈압"}># 혈압</Link>
            </li>
          </Word>
        </WordWrap>
      </WordContainer>

      <NoResult>{noResult}</NoResult>
    </>
  );
};
