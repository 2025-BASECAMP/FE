import React from "react";
import * as S from "../../styles/auth/login.style";

const login = () => {
  return (
    <S.LoginWrapper>
      <S.LoginBox>
        <S.Title>로그인</S.Title>
        <S.Input type="text" placeholder="이메일" />
        <S.Input type="password" placeholder="비밀번호" />
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginBox>
    </S.LoginWrapper>
  );
};

export default login;
