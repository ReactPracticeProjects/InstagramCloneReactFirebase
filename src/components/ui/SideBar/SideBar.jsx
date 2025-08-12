import React from "react";
import SideIcon from "../SideIcon";

import {SideBarIconData } from "@/data/SideBarIconData";
import { RiLogoutBoxLine } from "react-icons/ri";


import { Tooltip as ReactTooltip } from "react-tooltip";
import useSignOutHandle from "@/hooks/useSignOutHandle";
import { auth } from "@/firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const SideBar = () => {
  const [handleSignOut, signoutLoading, signouterror] = useSignOutHandle();
  const [user, loading, error] = useAuthState(auth);
  

  return (
    <div className="!border-r-[1.8px] !border-r-gray-200 w-full  !px-4 md:!px-5   !py-4 md:!py-8">
      <div className="h-full flex flex-col items-center md:items-start">
        <h1 className="!font-Playwrite_AU !text-xl hidden md:block !font-semibold">
          Instagram
        </h1>

        <img src="/Instagram_mobile_logo.webp" className="md:!hidden" alt="" />

        <div className="flex flex-col !mt-4 justify-between gap-4 h-[95%]">
          <div className="!mt-5 flex flex-col gap-5">
            {SideBarIconData.map((item) => (
              <SideIcon
                tooltipname={item.tooltipname}
                path={item.path}
                LinkIcon={item.LinkIcon}
                linkContent={item.linkContent}
              />
            ))}
          </div>

          <div>
            <button
              onClick={handleSignOut}
              className="flex gap-2 items-center !text-md cursor-pointer"
            >
              <span className="!text-2xl" id="LogOut">
                {" "}
                {<RiLogoutBoxLine />}
              </span>{" "}
              <span className="hidden md:flex">Log Out</span>
            </button>
            <ReactTooltip
              className="block md:hidden"
              anchorSelect={`#LogOut`}
              content={`LogOut`}
            ></ReactTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
