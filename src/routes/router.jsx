import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";

// auth
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/signup";

import HomePage from "../pages/home";

// location
import LocationDetailPage from "../pages/location/LocationDetailPage";
import FoodPage from "../pages/location/FoodPage";
import ActivityPage from "../pages/location/ActivityPage";
import HotelPage from "../pages/location/HotelPage";

import NotFoundPage from "../pages/notFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <LoginPage /> }, // 로그인 페이지
      {
        path: "/signup",
        element: <SignupPage />, // 회원가입 페이지
      },
      {
        path: "/home",
        element: <HomePage />, // 홈 페이지
      },
      {
        path: "location/:id",
        element: <LocationDetailPage />, // 상세 보기(지역 정보) 페이지
      },
      {
        path: "location/:id/food",
        element: <FoodPage />, // 맛집 페이지
      },
      {
        path: "location/:id/activity",
        element: <ActivityPage />, // 놀거리 페이지
      },
      {
        path: "location/:id/hotel",
        element: <HotelPage />, // 숙소 페이지
      },
    ],
  },
]);

export default router;
