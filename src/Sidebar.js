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
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    //BEM convention
    <div className="sidebar">
      <BsTwitter className="sidebar__twitterIcon" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <SidebarOptions
          active={AiOutlineHome}
          Icon={AiOutlineHome}
          text="Home"
        />
      </Link>
      <Link to="/explore" style={{ textDecoration: "none", color: "black" }}>
        <SidebarOptions Icon={AiOutlineSearch} text="Explore" />
      </Link>
      <Link
        to="/notification"
        style={{ textDecoration: "none", color: "black" }}
      >
        <SidebarOptions Icon={MdNotificationsNone} text="Notifications" />
      </Link>
      <Link to="message" style={{ textDecoration: "none", color: "black" }}>
        <SidebarOptions Icon={AiOutlineMail} text="Message" />
      </Link>
      <Link to="/bookmarks" style={{ textDecoration: "none", color: "black" }}>
        <SidebarOptions Icon={BsBookmark} text="Bookmarks" />
      </Link>
      <Link to="lists" style={{ textDecoration: "none", color: "black" }}>
        <SidebarOptions Icon={LiaClipboardListSolid} text="Lists" />
      </Link>
      <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
        <SidebarOptions Icon={MdPermIdentity} text="Profile" />
      </Link>
      <SidebarOptions Icon={FiMoreHorizontal} text="More" />
      <button className="sidebar__tweet" variant="outlined">
        Tweet
      </button>
    </div>
  );
}
export default Sidebar;
