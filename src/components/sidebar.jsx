import React from 'react'
import profileImg from '../images/profile.jpg';
import { useNavigate } from 'react-router-dom';
import * as S from "../styles/sidebarStyle.style";

const sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <>
      <S.Container $isOpen={isOpen}>
        <S.CloseIcon onClick={onClose} />
        <S.Profile src={profileImg} alt="프로필 사진">
        </S.Profile>
        <S.Name>
          이름님
        </S.Name>
        <S.List>
          <S.ListItem><S.MyIcon />마이페이지</S.ListItem>
        </S.List>
        <S.Logout onClick={() => navigate('/')}>
          로그아웃
        </S.Logout>
      </S.Container>
    </>
  );
}

export default sidebar
