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
import { Link } from "react-router-dom";
import { point } from "../../GlobalStyled";
import { routes } from "../../routes";
import { GoSearch } from "react-icons/go";

export const SearchFunction = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const functionHandler = () => {};

  return (
    <>
      <SearchContainer onSubmit={handleSubmit(functionHandler)}>
        <Form>
          <input
            {...register("product", {
              required: "검색어를 입력해주세요",
            })}
            type="text"
            placeholder="평소 건강고민을 검색해보세요."
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
              <Link># 간</Link>
            </li>

            <li>
              <Link># 노화</Link>
            </li>

            <li>
              <Link># 체지방</Link>
            </li>

            <li>
              <Link># 혈압</Link>
            </li>
          </Word>
        </WordWrap>
      </WordContainer>
    </>
  );
};
