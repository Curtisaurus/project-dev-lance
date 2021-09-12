import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

// Navigation Styling
export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

// Navbar Container Styling
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

// NavLogo Styling
export const NavLogo = styled(LinkRouter)`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

// Mobile Icon Styling
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem; /* defaults to 16px */
    cursor: pointer;
  }
`;

// Mobile Navigation Menu Styling
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Nav Item Styling
export const NavItem = styled.li`
  height: 80px;
`;

// NavLinks Styling
export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Nav Button Link Styling
export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 8px 20px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
