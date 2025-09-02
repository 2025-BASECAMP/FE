import React from "react";
import { useParams } from "react-router-dom";
import * as S from "../../styles/location/PlacePage.style.js";
import usePlaceList from "../../hooks/usePlaceList";

import PlaceHeader from "../../components/location/PlaceHeader.jsx";
import FoodCard from "../../components/location/PlaceCard.jsx";
import ErrorBlock from "../../components/common/ErrorBlock";
import EmptyState from "../../components/common/EmptyState";
import Loading from "../../components/common/Loading.jsx";
import EndMessage from "../../components/common/EndMessage";
import { locationMap } from "../../mocks/stadium";

const FoodPage = () => {
  const { id } = useParams();
  const { list, loading, hasMore, error, lastElementRef, selectedLocation } =
    usePlaceList({ stadiumId: id, contentTypeId: 39 }); // 음식점

  if (error) {
    return (
      <ErrorBlock
        title="오류 발생"
        message={error}
        footer={
          <>
            <p>사용 가능한 구장 ID:</p>
            <ul>
              {Object.entries(locationMap).map(([key, location]) => (
                <li key={key}>
                  {key}: {location.name}
                </li>
              ))}
            </ul>
          </>
        }
      />
    );
  }

  return (
    <S.Container>
    <PlaceHeader
      category="food"
      stadiumName={selectedLocation?.name}
      teamName={selectedLocation?.team}
      radius={3000}
    />

      {list.length === 0 && !loading ? (
        <EmptyState title="해당 구장 주변에서 맛집을 찾을 수 없습니다." description="다른 구장을 선택해보세요!" />
      ) : (
        <S.CardList>
          {list.map((food, index) => (
            <FoodCard
              key={`${food.contentid}-${index}`}
              title={food.title}
              image={food.firstimage}
              address={food.addr1}
              phone={food.tel}
              distance={food.dist}
              overview={food.overview}
              refProp={index === list.length - 1 ? lastElementRef : null}
            />
          ))}
        </S.CardList>
      )}

      {loading && <Loading text="더 많은 맛집을 찾는 중..." />}
      {!hasMore && list.length > 0 && (
        <EndMessage text={`총 ${list.length}개의 맛집을 모두 불러왔습니다`} />
      )}
    </S.Container>
  );
};

export default FoodPage;
