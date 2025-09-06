import React from "react";
import { useParams } from "react-router-dom";
import * as S from "../../styles/location/PlacePage.style.js";
import usePlaceList from "../../hooks/usePlaceList";

import PlaceHeader from "../../components/location/PlaceHeader.jsx";
import ActivityCard from "../../components/location/PlaceCard";
import ErrorBlock from "../../components/common/ErrorBlock";
import EmptyState from "../../components/common/EmptyState";
import Loading from "../../components/common/Loading.jsx";
import EndMessage from "../../components/common/EndMessage";
import { locationMap } from "../../mocks/stadium";

const ActivityPage = () => {
  const { id } = useParams();
  const { list, loading, hasMore, error, lastElementRef, selectedLocation } =
    usePlaceList({ stadiumId: id, contentTypeId: 12 }); // 관광지/놀거리

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
        category="activity"
        stadiumName={selectedLocation?.name}
        teamName={selectedLocation?.team}
        radius={3000}
      />

      {list.length === 0 && !loading ? (
        <EmptyState title="주변에 놀거리를 찾지 못했습니다." description="다른 구장을 선택해보세요!" />
      ) : (
        <S.CardList>
          {list.map((item, idx) => (
            <ActivityCard
              key={`${item.contentid}-${idx}`}
              title={item.title}
              image={item.firstimage}
              address={item.addr1}
              phone={item.tel}
              distance={item.dist}
              overview={item.overview}
              refProp={idx === list.length - 1 ? lastElementRef : null}
            />
          ))}
        </S.CardList>
      )}

      {loading && <Loading text="주변 놀거리 탐색 중..." />}
      {!hasMore && list.length > 0 && (
        <EndMessage text={`총 ${list.length}개의 놀거리를 모두 불러왔습니다`} />
      )}
    </S.Container>
  );
};

export default ActivityPage;
