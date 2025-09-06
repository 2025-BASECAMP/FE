import { useEffect, useRef, useState, useCallback } from "react";
import { locationMap } from "../mocks/stadium";
import { fetchPlaceData } from "./tourismApi";

export default function usePlaceList({ stadiumId, contentTypeId, numOfRows = 10, radius = 3000 }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const observerRef = useRef(null);
  const mountedRef = useRef(true);

  const serviceKey = import.meta.env.VITE_TOUR_API_KEY;
  const appName = import.meta.env.VITE_TOUR_API_APP_NAME || "BasecampApp";
  const os = import.meta.env.VITE_TOUR_API_OS || "ETC";

  const selectedLocation = locationMap[stadiumId];

  // 초기/구장 변경 시
  useEffect(() => {
    mountedRef.current = true;

    const loadFirst = async () => {
      if (!selectedLocation) {
        setError("지원하지 않는 구장 ID입니다.");
        setList([]);
        setHasMore(false);
        setLoading(false);
        return;
      }

      setList([]);
      setPage(1);
      setHasMore(true);
      setError(null);
      setLoading(true);

      try {
        const { items, hasMore } = await fetchPlaceData({
          serviceKey,
          appName,
          os,
          mapX: selectedLocation.mapX,
          mapY: selectedLocation.mapY,
          pageNo: 1,
          numOfRows,
          radius,
          contentTypeId,
        });
        if (!mountedRef.current) return;

        setList(items);
        setHasMore(hasMore && items.length > 0);
      } catch (err) {
        if (!mountedRef.current) return;
        setError(err.message || "데이터 로딩 중 오류가 발생했습니다.");
        setList([]);
        setHasMore(false);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    };

    loadFirst();

    return () => {
      mountedRef.current = false;
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [stadiumId, contentTypeId, numOfRows, radius, selectedLocation, serviceKey, appName, os]);

  // 페이지 증가 시 추가 로딩
  useEffect(() => {
    const loadMore = async () => {
      if (page <= 1) return;
      if (!selectedLocation) return;

      setLoading(true);
      try {
        const { items: newItems, hasMore: more } = await fetchPlaceData({
          serviceKey,
          appName,
          os,
          mapX: selectedLocation.mapX,
          mapY: selectedLocation.mapY,
          pageNo: page,
          numOfRows,
          radius,
          contentTypeId,
        });
        if (!mountedRef.current) return;

        if (newItems.length === 0) {
          setHasMore(false);
          return;
        }

        setList((prev) => {
          const exist = new Set(prev.map((i) => i.contentid));
          const uniq = newItems.filter((i) => !exist.has(i.contentid));
          return [...prev, ...uniq];
        });

        if (!more || newItems.length < numOfRows) setHasMore(false);
      } catch (err) {
        if (!mountedRef.current) return;
        setError(err.message || "추가 로딩 중 오류가 발생했습니다.");
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    };

    loadMore();
  }, [page, selectedLocation, serviceKey, appName, os, numOfRows, radius, contentTypeId]);

  // 마지막 카드 ref — 교차 관찰로 페이지 증가
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  return {
    list,
    loading,
    hasMore,
    error,
    lastElementRef,
    selectedLocation,
  };
}
