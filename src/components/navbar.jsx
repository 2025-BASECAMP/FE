import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from "../styles/navbarStyle.style";
import Sidebar from "./sidebar";

const navbar = ({ showLogo, title }) => {
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false); // 사이드바 상태

    return (
        <>
            <S.Nav>
                {showLogo ? (
                    <S.Logo onClick={() => navigate("/home")}>BASECAMP</S.Logo>
                ) : <S.BackIcon onClick={() => navigate(-1)} />}
                <S.Title>{title}</S.Title>
                <S.BaseballIcon onClick={() => setSidebarOpen(true)} />
            </S.Nav>

            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    )
}

export default navbar