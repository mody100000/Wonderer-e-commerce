import { Outlet } from "react-router-dom";
import LogoutNav from "../../components/LogoutNav/LogoutNav";

const LandingLayout = () => {
  return (
    <>
      <LogoutNav />
      <Outlet />
    </>
  );
};

export default LandingLayout;
