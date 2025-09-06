import React, { memo } from "react";
import { FaMapMarkerAlt, FaPhone, FaWalking } from "react-icons/fa";
import * as S from "../../styles/location/PlaceCard.style";

const FoodCard = ({ title, image, address, phone, distance, overview, refProp }) => {
  return (
    <S.Card ref={refProp}>
      {image && (
        <S.CardImage
          src={image}
          alt={title}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      )}

      <S.CardTitle>{title}</S.CardTitle>

      {address && (
        <S.CardInfo>
          <FaMapMarkerAlt /> {address}
        </S.CardInfo>
      )}

      {phone && (
        <S.CardInfo>
          <FaPhone /> {phone}
        </S.CardInfo>
      )}

      {distance && (
        <S.CardDistance>
          <FaWalking /> 구장에서 약 {Math.round(distance)}m
        </S.CardDistance>
      )}

      {overview && <S.CardOverview>{overview}</S.CardOverview>}
    </S.Card>
  );
};

export default memo(FoodCard);
