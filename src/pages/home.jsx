import React from 'react'
import mapImage from "../images/map.jpg"
// 위치 정확히 알고 싶으면 map-name.jpg 사용
// 이미지 더 괜찮은 거 찾아서 수정...
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import TeamLogo from "../components/TeamLogo.jsx"

import heroesLogo from "../images/heroes.png"
import tigersLogo from "../images/tigers.svg"
import lionsLogo from "../images/lions.svg"
import bearsLogo from "../images/bears.svg"
import dinosLogo from "../images/dinos.png"
import eaglesLogo from "../images/eagles.svg"
import giantsLogo from "../images/giants.svg"
import landersLogo from "../images/landers.svg"
import twinsLogo from "../images/twins.svg"
import wizLogo from "../images/wiz.svg"

import { useNavigate } from "react-router-dom";

const home = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      border: '1px solid #ccc',
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
      <TransformWrapper
        initialScale={3} // 배율 고정
        initialPositionX={-380} // 좌우 고정
        initialPositionY={-680} // 상하 고정
      >
        <TransformComponent>
          <img src={mapImage} alt="지도" width="100%" />

          <TeamLogo
            logo={heroesLogo}
            name="키움 히어로즈"
            top="50%"
            left="45%"
            size={20}
            onClick={() => navigate('/location/:id')}
          />
          <TeamLogo
            logo={tigersLogo}
            name="기아 타이거즈"
            top="67%"
            left="43%"
            size={20}
            onClick={() => navigate('/location/:id')}
          />
          <TeamLogo
            logo={lionsLogo}
            name="삼성 라이온즈"
            top="61%"
            left="57%"
            size={20}
            onClick={() => navigate('/location/:id')}
          />
          <TeamLogo
            logo={bearsLogo}
            name="두산 베어스"
            top="50%"
            left="45%"
            size={20}
            onClick={() => navigate('/location/:id')}
          />
          <TeamLogo
            logo={dinosLogo}
            name="엔씨 다이노스"
            top="66%"
            left="57%"
            size={20}
            onClick={() => navigate('/location/:id')}
          />
          <TeamLogo
            logo={eaglesLogo}
            name="한화 이글스"
            top="58%"
            left="47%"
            size={20}
            onClick={() => navigate('/location/:id')}
          />
          <TeamLogo
            logo={giantsLogo}
            name="롯데 자이언츠"
            top="65%"
            left="61%"
            size={20}
            onClick={() => navigate('/location/:id')}
          />
          <TeamLogo
            logo={landersLogo}
            name="SSG 랜더스"
            top="51%"
            left="42%"
            size={20}
            onClick={() => navigate('/location/:id')}
          />
          <TeamLogo
            logo={twinsLogo}
            name="엘지 트윈스"
            top="50%"
            left="45%"
            size={20}
            onClick={() => navigate('/location/:id')}
          />
          <TeamLogo
            logo={wizLogo}
            name="케이티 위즈"
            top="52%"
            left="45%"
            size={20}
            onClick={() => navigate('/location/:id')}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}
export default home
