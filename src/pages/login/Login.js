import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { CgPill } from "react-icons/cg";
import { Container, Wrap, Text, ErrorMessage } from "./components/LoginStyle";
import { useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";

export const Login = () => {
  useScrollTop();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLogin, setIsLogin] = useState();

  const navi = useNavigate();
  const loginHandler = ({ username, password }) => {
    if (
      localStorage.getItem("username") === username &&
      localStorage.getItem("password") === password
    ) {
      alert("로그인 되었습니다 😊");
      navi(routes.home);
      localStorage.setItem("login", "on");
    } else {
      setIsLogin("비밀번호를 다시 확인해주세요"); // set 안에 변수문자숫자 다됨
    }
  };

  return (
    <Container>
      <Wrap onSubmit={handleSubmit(loginHandler)}>
        <h2>로그인</h2>
        <input
          {...register("username", {
            required: "아이디를 입력해주세요",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage>{errors?.username?.message}</ErrorMessage>
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        <button>로그인</button>
        <ErrorMessage style={{ textAlign: "center" }}>{isLogin}</ErrorMessage>

        <Text>
          <h2>
            아직 회원이 아니신가요? 지금
            <Link to={routes.signup}>
              <span> 가입 </span>
            </Link>
            하세요. 😊
          </h2>
          <p>
            <Link to={routes.home}>
              <CgPill />
              &nbsp;Pilling
            </Link>
          </p>
        </Text>
      </Wrap>
    </Container>
  );
};
