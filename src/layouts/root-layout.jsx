import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 60px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const RootLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const noNavbarPaths = ["/", "/signup"];
  const shouldShowNavbar = !noNavbarPaths.includes(currentPath);

  // 경로에 따른 Navbar 설정
  const navbarConfig = (() => {
    // 경로 - home
    if (currentPath === "/home") {
      return { showLogo: true, title: "" };
    }

    // 경로 - location/:id
    const locationMatch = currentPath.match(/^\/location\/([^/]+)$/);
    if (locationMatch) {
      return { showLogo: false, title: "지역 상세 정보" };
    }

    // 경로 - location/:id/food
    const foodMatch = currentPath.match(/^\/location\/([^/]+)\/food$/);
    if (foodMatch) {
      return { showLogo: false, title: "맛집 정보" };
    }

    // 경로 - location/:id/activity
    const activityMatch = currentPath.match(/^\/location\/([^/]+)\/activity$/);
    if (activityMatch) {
      return { showLogo: false, title: "놀거리 정보" };
    }

    // 경로 - location/:id/hotel
    const hotelMatch = currentPath.match(/^\/location\/([^/]+)\/hotel$/);
    if (hotelMatch) {
      return { showLogo: false, title: "숙소 정보" };
    }

    return { showLogo: false, title: "잘못된 접근" };
  })();

  return (
    <LayoutContainer>
      {shouldShowNavbar && <Navbar {...navbarConfig} />}
      <MainContent>
        <Content>
          <Outlet />
        </Content>
      </MainContent>
    </LayoutContainer>
  );
};

export default RootLayout;
