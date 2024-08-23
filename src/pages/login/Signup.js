import { useForm } from "react-hook-form";
import { Container, Wrap, Text, ErrorMessage } from "./components/LoginStyle";
import { routes } from "../../routes";
import { CgPill } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";

export const Signup = () => {
  useScrollTop();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navi = useNavigate();
  const signupHandler = ({ username, password }) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("가입되었습니다 😊");
    navi(routes.login);
  };

  return (
    <Container>
      <Wrap onSubmit={handleSubmit(signupHandler)}>
        <h2>회원가입</h2>
        <input
          {...register("username", {
            required: "아이디를 입력해주세요",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage>{errors?.username?.message}</ErrorMessage>
        <input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "올바른 이메일 형식을 입력해주세요",
            },
          })}
          type="text"
          placeholder="이메일"
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
          })}
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        <button>회원가입</button>

        <Text>
          <h2>
            이미 회원 이신가요? 지금
            <Link to={routes.login}>
              <span> 로그인 </span>
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
