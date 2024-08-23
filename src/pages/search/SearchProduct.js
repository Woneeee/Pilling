import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import { point } from "../../GlobalStyled";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes";
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
import { supDetail } from "../../api";
import { useState } from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultWrap = styled.div`
  max-width: 1260px;
  width: 100%;
  @media screen and (max-width: 510px) {
    padding: 0 15px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
`;

const ProContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 510px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Con = styled.div`
  height: 140px;
  border-top: 1px solid #55555550;
  display: flex;
`;

const Img = styled.div``;

const Text = styled.div`
  h2 {
    font-weight: 500;
    margin-top: 20px;
  }
  p {
    font-size: 15px;
    opacity: 0.8;
    margin-top: 10px;
  }
`;

export const SearchProduct = () => {
  const [supDetailData, setSupDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [prNmData, setPrNmData] = useState();
  const [searchData, setSearchData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navi = useNavigate();
  const productHandler = async ({ product }) => {
    setPrNmData(product);

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
    setIsLoading(false);

    const supName = supDetailResult.filter((res) =>
      res.item.PRDUCT.includes(product)
    );
    setSearchData(supName);
  };

  console.log(searchData);

  return (
    <>
      <SearchContainer onSubmit={handleSubmit(productHandler)}>
        <Form>
          <input
            {...register("product", {
              required: "검색어를 입력해주세요",
            })}
            type="text"
            placeholder="자주먹는 영양제를 검색해보세요."
          />

          <button>
            <GoSearch />
          </button>
          <ErrorMessage>{errors?.product?.message}</ErrorMessage>
        </Form>
      </SearchContainer>

      <MenuContainer>
        <MenuWrap>
          <li>
            <Link
              to={routes.searchproduct}
              style={{
                borderBottom: `2px solid ${point.color}`,
                color: point.color,
                fontWeight: 500,
                opacity: 1,
              }}
            >
              영양제 검색하기
            </Link>
          </li>

          <li>
            <Link to={routes.searchfunction}>건강고민별 검색하기</Link>
          </li>
        </MenuWrap>
      </MenuContainer>

      <WordContainer>
        <WordWrap>
          <h2>검색어 예시 ex)</h2>

          <Word>
            <li>비타민</li>

            <li>오메가3</li>

            <li>프로바이오틱스</li>

            <li>마그네슘</li>
          </Word>
        </WordWrap>
      </WordContainer>

      {searchData?.length === 0 ? (
        <Title>검색결과가 없습니다.</Title>
      ) : (
        <>
          {searchData && (
            <ResultContainer>
              <ResultWrap>
                <Title>{prNmData}</Title>

                <ProContainer>
                  {searchData.map((res) => (
                    <Link
                      key={res.item.PRDUCT}
                      to={`/supdetail/${res.item.PRDUCT}`}
                    >
                      <Con>
                        <Img>
                          <img src="" alt="" />
                        </Img>

                        <Text>
                          <h2>{res.item.PRDUCT}</h2>
                          <p>{res.item.ENTRPS}</p>
                        </Text>
                      </Con>
                    </Link>
                  ))}
                </ProContainer>
              </ResultWrap>
            </ResultContainer>
          )}
        </>
      )}
    </>
  );
};
