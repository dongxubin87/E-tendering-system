import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div
      className=" overflow-scroll flex justify-between  flex-col  bg-contain bg-center max-w-screen h-lvh  bg-no-repeat "
      style={{
        backgroundImage:
          "linear-gradient(rgba(56, 203, 252, 0.9), rgba(56, 203, 252, 0.9)), url('/bg.png')",
      }}
    >
      <Header />
      <main className="flex-grow flex">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
