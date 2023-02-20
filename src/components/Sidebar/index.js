import React, { useState } from "react";
import "./index.scss";

import {Link} from "react-router-dom";
import { SidebarData } from "./SidebarData";

import {SlMenu} from "react-icons/sl";

const Sidebar = ({}) => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };  

  const sidebarClass = sidebarOpen ? "sidebar-open" : "sidebar";

    return (
      <div className={sidebarClass} isOpen={sidebarOpen}>
        <div className="">
          <SlMenu className="sidebar-menu-icon" onClick={handleViewSidebar} />
          <ul className="sidebar-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/login">Sign out</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

Sidebar.propTypes = {

};

export default Sidebar;
