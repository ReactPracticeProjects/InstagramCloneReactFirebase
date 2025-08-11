import SideBar from "@/components/ui/SideBar/SideBar";
import React from "react";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className="flex bg-black text-white">
      {/* SideBar */}

      {pathname !== "/auth" ? (
        <div className="hidden sm:flex sm:w-[70px] md:w-[200px] h-screen ">
          <SideBar />
        </div>
      ) : null}

      {/* Page Content Right */}

      <div className="">{children}</div>
    </div>
  );
};

export default PageLayout;
