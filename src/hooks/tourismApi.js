import axios from "axios";

/**
 * 관광공사 위치기반 리스트 조회 (공용)
 * @returns {Promise<{ items: any[], hasMore: boolean }>}
 */
export async function fetchPlaceData({
  serviceKey,
  appName = "BasecampApp",
  os = "ETC",
  mapX,
  mapY,
  pageNo = 1,
  numOfRows = 10,
  radius = 3000,
  contentTypeId, // 12:관광지, 32:숙박, 39:음식점
}) {
  const url = `https://apis.data.go.kr/B551011/KorService2/locationBasedList2`;
  const params = {
    serviceKey,
    mapX,
    mapY,
    radius,
    MobileApp: appName,
    MobileOS: os,
    arrange: "C",
    contentTypeId,
    _type: "json",
    numOfRows,
    pageNo,
  };

  const { data } = await axios.get(url, { params });

  const header = data?.response?.header;
  if (!header || header.resultCode !== "0000") {
    return { items: [], hasMore: false };
  }

  const raw = data?.response?.body?.items?.item ?? [];
  const items = Array.isArray(raw) ? raw : raw ? [raw] : [];
  return {
    items,
    hasMore: items.length >= numOfRows,
  };
}
