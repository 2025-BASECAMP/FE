import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RootLayout from "./layout/root-layout";
import NotFoundPage from "./pages/notFound";

// auth
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/signup";
import ResetPwdPage from "./pages/auth/resetpwd";

import HomePage from "./pages/home";


const router = createBrowserRouter([
  // auth
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/forgotpasswd",
    element: <ResetPwdPage />,
  },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {index: true, element: <HomePage />}
    ]
  }
]);

const queryClient = new QueryClient;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App
