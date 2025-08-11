import React from "react";
import SideIcon from "../SideIcon";
import { IoHomeOutline } from "react-icons/io5";
import { LogoutData, SideBarIconData } from "@/data/SideBarIconData";
import { RiLogoutBoxLine } from "react-icons/ri";

const SideBar = () => {
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
            <SideIcon
              tooltipname={LogoutData.tooltipname}
              path={LogoutData.path}
              LinkIcon={LogoutData.LinkIcon}
              linkContent={LogoutData.linkContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
