import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import RootLayout from "./layout/root-layout";
import NotFoundPage from "./pages/notFound";

import HomePage from "./pages/home";

// auth
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/signup";

// location
import LocationDetailPage from "./pages/location/LocationDetailPage";
import FoodPage from "./pages/location/FoodPage";
import ActivityPage from "./pages/location/ActivityPage";
import HotelPage from "./pages/location/HotelPage";

const router = createBrowserRouter([
  // auth
  {
    path: "/login",
    element: <LoginPage />, // 로그인 페이지
  },
  {
    path: "/signup",
    element: <SignupPage />, // 회원가입 페이지
  },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> }, // 기본 화면
      // location
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
        element: <ActivityPage />,  // 놀거리 페이지
      },
      {
        path: "location/:id/hotel",
        element: <HotelPage />,  // 숙소 페이지
      },
    ]
  }
]);

const queryClient = new QueryClient;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App
