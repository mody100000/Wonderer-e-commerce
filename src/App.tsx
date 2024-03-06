import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout/LandingLayout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import TokenContextProvider, { tokenContext } from "./contexts/authContext";
import MainLayout from "./layouts/MainLayout/MainLayout";
import ProtectedRouteAuth from "./components/ProtectedRouteAuth/ProtectedRouteAuth";
import Products from "./pages/Products/Products";

const routes = createBrowserRouter([
  {
    path: "",
    element: <LandingLayout />,
    children: [
      { index: true, path: "", element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "auth",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <TokenContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </TokenContextProvider>
    </>
  );
}

export default App;
