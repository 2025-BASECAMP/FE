import React, { useState } from 'react'
import mapImage from "../images/map.jpg"
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import RegionPin from '../components/RegionPin.jsx'

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

const teamDataByRegion = {
  seoul: [
    { id: '1', name: '키움 히어로즈', logo: heroesLogo },
    { id: '2', name: 'LG 트윈스', logo: twinsLogo },
    { id: 'bears', name: '두산 베어스', logo: bearsLogo },
  ],
  gwangju: [
    { id: '5', name: 'KIA 타이거즈', logo: tigersLogo },
  ],
  daegu: [
    { id: '4', name: '삼성 라이온즈', logo: lionsLogo },
  ],
  suwon: [
    { id: '7', name: 'KT 위즈', logo: wizLogo },
  ],
  incheon: [
    { id: '9', name: 'SSG 랜더스', logo: landersLogo },
  ],
  daejeon: [
    { id: '6', name: '한화 이글스', logo: eaglesLogo },
  ],
  busan: [
    { id: '3', name: '롯데 자이언츠', logo: giantsLogo },
  ],
  changwon: [
    { id: '8', name: 'NC 다이노스', logo: dinosLogo },
  ],
};

const regionNameMap = {
  seoul: '서울',
  busan: '부산',
  suwon: '수원',
  gwangju: '광주',
  daegu: '대구',
  incheon: '인천',
  daejeon: '대전',
  changwon: '창원',
};

const home = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      border: '1px solid #ccc',
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
      <TransformWrapper
        initialScale={3}
        initialPositionX={-380}
        initialPositionY={-680}
        disabled
      >
        <TransformComponent>
          <div style={{ position: 'relative', width: '100%' }}>
            <img src={mapImage} alt="지도" width="100%" style={{ position: 'relative', zIndex: 1 }} />

            {/* 핀 */}
            <RegionPin
              regionName="서울"
              top="51%"
              left="44%"
              onClick={() => setSelectedRegion('seoul')}
            />
            <RegionPin
              regionName="광주"
              top="68%"
              left="43%"
              onClick={() => setSelectedRegion('gwangju')}
            />
            <RegionPin
              regionName="대구"
              top="63%"
              left="57%"
              onClick={() => setSelectedRegion('daegu')}
            />
            <RegionPin
              regionName="수원"
              top="53%"
              left="45%"
              onClick={() => setSelectedRegion('suwon')}
            />
            <RegionPin
              regionName="인천"
              top="52%"
              left="42%"
              onClick={() => setSelectedRegion('incheon')}
            />
            <RegionPin
              regionName="부산"
              top="67%"
              left="61%"
              onClick={() => setSelectedRegion('busan')}
            />
            <RegionPin
              regionName="대전"
              top="61%"
              left="48%"
              onClick={() => setSelectedRegion('daejeon')}
            />
            <RegionPin
              regionName="창원"
              top="68%"
              left="57%"
              onClick={() => setSelectedRegion('changwon')}
            />

            {/* 전체 구단 로고 */}
          </div>
        </TransformComponent>
      </TransformWrapper>

      {/* 구단 목록 표시 영역 */}
      {selectedRegion && teamDataByRegion[selectedRegion] && (
        <div style={{ padding: '20px', backgroundColor: '#fafafa', borderTop: '1px solid #ccc' }}>
          <h3 style={{ marginBottom: '15px' }}>{regionNameMap[selectedRegion]}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '50px 1fr repeat(3, 60px)', alignItems: 'center', rowGap: '10px' }}>
            {teamDataByRegion[selectedRegion].map((team) => (
              <React.Fragment key={team.id}>
                <img src={team.logo} alt={team.name} width="30px" />
                <strong>{team.name}</strong>
                <button onClick={() => navigate(`/location/${team.id}/food`)}>맛집</button>
                <button onClick={() => navigate(`/location/${team.id}/activity`)}>놀거리</button>
                <button onClick={() => navigate(`/location/${team.id}/hotel`)}>숙소</button>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default home
