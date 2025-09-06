import React from "react";
import {
  FaUtensils,
  FaBed,
  FaHiking,
  FaBaseballBall,
  FaMapMarkerAlt,
} from "react-icons/fa";
import * as S from "../../styles/location/PlaceHeader.style";

const CATEGORY_META = {
  food: { icon: FaUtensils, label: "맛집" },
  activity: { icon: FaHiking, label: "놀거리" },
  hotel: { icon: FaBed, label: "숙소" },
};

function formatRadius(meters) {
  if (typeof meters !== "number") return "";
  if (meters >= 1000) {
    const km = (meters / 1000).toFixed(1).replace(/\.0$/, "");
    return `${km}km`;
  }
  return `${meters}m`;
}

const PlaceHeader = ({ category = "food", stadiumName, teamName, radius = 3000 }) => {
  const { icon: Icon, label } = CATEGORY_META[category] || {
    icon: FaMapMarkerAlt,
    label: "주변",
  };

  return (
    <S.Header>
      <h2>
        <Icon /> {stadiumName} 주변 {label}
      </h2>
      <p>
        <FaBaseballBall /> {teamName} | <FaMapMarkerAlt /> 반경 {formatRadius(radius)} 이내
      </p>
    </S.Header>
  );
};

export default PlaceHeader;
