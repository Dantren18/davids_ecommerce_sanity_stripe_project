import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="New">New!</SidebarLink>
          <SidebarLink to="Ring">Ring</SidebarLink>
          <SidebarLink to="Necklace">Necklace</SidebarLink>
          <SidebarLink to="Earring">Earring</SidebarLink>
          <SidebarLink to="Bracelet">Bracelet</SidebarLink>
          <SidebarLink to="Sale">SALE</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/about">About</SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact Us</SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute to="/terms">Terms</SidebarRoute>
        </SideBtnWrap>
        {/* <SideBtnWrap>
          <SidebarRoute to="/contactus">Contact Us</SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute to="/terms">Terms</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
