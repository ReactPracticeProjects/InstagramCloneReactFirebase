import { VStack } from "@chakra-ui/react";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoHomeOutline, IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { MdAddCircleOutline } from "react-icons/md";

const SideIcon = ({ LinkIcon, path, linkContent, tooltipname }) => {
  return (
    <>
      <NavLink
        to={`${path}`}
        className="flex gap-2 items-center !text-md"
      >
        <span className="!text-2xl" id={tooltipname}>
          {" "}
          {<LinkIcon />}
        </span>{" "}
        <span className="hidden md:flex">{linkContent}</span>
      </NavLink>
      <ReactTooltip
        className="block md:hidden"
        anchorSelect={`#${tooltipname}`}
        content={`${tooltipname}`}
      ></ReactTooltip>
    </>
  );
};

export default SideIcon;
