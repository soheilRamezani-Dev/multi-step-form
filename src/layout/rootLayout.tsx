import Navigation from "./../componentts/navigation/navigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="app">
      <div className="app-container">
        {/* Nsvigation */}
        <Navigation />

        {/* body */}
        <div className="form-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
