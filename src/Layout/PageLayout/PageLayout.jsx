import SideBar from "@/components/ui/SideBar/SideBar";
import { auth } from "@/firebase/firebaseConfig";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  const [user] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;

  return (
    <div className="flex bg-black text-white">
      {/* SideBar */}

      {canRenderSidebar ? (
        <div className="hidden sm:flex sm:w-[70px] md:w-[200px] h-screen ">
          <SideBar />
        </div>
      ) : null}

      {/* Page Content Right */}

      <div className="w-full">{children}</div>
    </div>
  );
};

export default PageLayout;
