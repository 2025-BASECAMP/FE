import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
