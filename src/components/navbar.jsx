import React from 'react'
import * as S from "../styles/navbarStyle.style";
import { useNavigate } from 'react-router-dom';

const navbar = ({ showLogo, title }) => {
    const navigate = useNavigate();

    return (
        <S.Nav>
            {showLogo ? (
                <S.Logo onClick={() => navigate("/home")}>BASECAMP</S.Logo>
            ) : <S.BackIcon onClick={() => navigate(-1)} />}
            <S.Title>{title}</S.Title>
            <S.BaseballIcon />
        </S.Nav>
    )
}

export default navbar