import React from "react";
import "./Sidebar.css";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdPermIdentity } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";

import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  return (
    //BEM convention
    <div className="sidebar">
      <BsTwitter className="sidebar__twitterIcon" />
      <SidebarOptions active={AiOutlineHome} Icon={AiOutlineHome} text="Home" />
      <SidebarOptions Icon={AiOutlineSearch} text="Explore" />
      <SidebarOptions Icon={MdNotificationsNone} text="Notifications" />
      <SidebarOptions Icon={AiOutlineMail} text="Message" />
      <SidebarOptions Icon={BsBookmark} text="Bookmarks" />
      <SidebarOptions Icon={LiaClipboardListSolid} text="Lists" />
      <SidebarOptions Icon={MdPermIdentity} text="Profile" />
      <SidebarOptions Icon={FiMoreHorizontal} text="More" />
      <button className="sidebar__tweet" variant="outlined">
        Tweet
      </button>
    </div>
  );
}
export default Sidebar;
