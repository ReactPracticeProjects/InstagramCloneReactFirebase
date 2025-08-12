// SideBarIconData.js
import { IoHomeOutline, IoSearch } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

export const SideBarIconData = [
  {
    tooltipname: "Home",
    path: "/",
    LinkIcon: IoHomeOutline,
    linkContent: "Home",
  },
  {
    tooltipname: "Search",
    path: "/search",
    LinkIcon: IoSearch,
    linkContent: "Search",
  },
  {
    tooltipname: "Post",
    path: "/post",
    LinkIcon: MdAddCircleOutline,
    linkContent: "Post",
  },
  {
    tooltipname: "Notification",
    path: "/notification",
    LinkIcon: IoMdNotificationsOutline,
    linkContent: "Notifications",
  },
];

