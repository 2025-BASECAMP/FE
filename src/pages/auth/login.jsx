import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/auth/login.style";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.LoginTitle>로그인</S.LoginTitle>

        <S.LoginForm onSubmit={handleSubmit}>
          <S.FormGroup>
            <label>아이디</label>
            <input
              type="id"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <label>비밀번호</label>
            <input
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </S.FormGroup>

          <S.LoginBtn type="submit">로그인</S.LoginBtn>
        </S.LoginForm>

        <S.SignupText>
          계정이 없으신가요?{" "}
          <S.SignupLink href="/signup">회원가입</S.SignupLink>
        </S.SignupText>
      </S.LoginCard>
    </S.LoginContainer>
  );
}
