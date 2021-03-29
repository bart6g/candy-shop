import React from "react";
import { SidebarContainer, SidebarWrap, SidebarLink } from "./sidebarElements";

const Sidebar = ({ isMenuOpened }) => {
  return (
    <SidebarContainer isMenuOpened={isMenuOpened}>
      <SidebarWrap>
        <SidebarLink to="/">Link1</SidebarLink>
        <SidebarLink to="/">Link2</SidebarLink>
        <SidebarLink to="/">Link3</SidebarLink>
        <SidebarLink to="/">Link4</SidebarLink>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
