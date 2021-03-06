import React, { useState } from "react";
import {
  SidebarContainer,
  // Icon,
  // CloseIcon,
  // SidebarWrapper,
  // SidebarMenu,
  // SidebarLink,
  // SideBtnWrap,
  // SidebarRoute,
} from "./SidebarElements";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/* <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="loin" onClick={toggle}>
            Login
          </SidebarLink>
          <SidebarLink to="logout" onClick={toggle}>
            Logout
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Dashboard
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/project-form">Start a Project</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper> */}
    </SidebarContainer>
  );
};

export default Sidebar;
