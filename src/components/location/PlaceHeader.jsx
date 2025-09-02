import React from "react";
import { FaUtensils, FaBaseballBall, FaMapMarkerAlt } from "react-icons/fa";
import * as S from "../../styles/location/PlaceHeader.style";

const FoodHeader = ({ stadiumName, teamName }) => {
  return (
    <S.Header>
      <h2>
        <FaUtensils /> {stadiumName} 주변 맛집
      </h2>
      <p>
        <FaBaseballBall /> {teamName} | <FaMapMarkerAlt /> 반경 3km 이내
      </p>
    </S.Header>
  );
};

export default FoodHeader;
