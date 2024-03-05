import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout/LandingLayout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import { useContext, useEffect } from "react";
import { tokenContext } from "./contexts/authContext";
import MainLayout from "./layouts/MainLayout/MainLayout";
import ProtectedRouteAuth from "./components/ProtectedRouteAuth/ProtectedRouteAuth";

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
    ],
  },
]);

function App() {
  const { setToken } = useContext(tokenContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
