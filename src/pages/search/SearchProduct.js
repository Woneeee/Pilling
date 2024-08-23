import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import { point } from "../../GlobalStyled";
import { Link } from "react-router-dom";
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

export const SearchProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const productHandler = () => {};

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
          <h2>추천 검색어</h2>

          <Word>
            <li>
              <Link># 비타민</Link>
            </li>

            <li>
              <Link># 오메가3</Link>
            </li>

            <li>
              <Link># 프로바이오틱스</Link>
            </li>

            <li>
              <Link># 마그네슘</Link>
            </li>
          </Word>
        </WordWrap>
      </WordContainer>
    </>
  );
};
