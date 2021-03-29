import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  height: calc(100vh - 80px);
  width: 350px;
  background-color: #0d174a;
  position: fixed;
  top: 80px;
  right: 0;
  transform: ${({ isMenuOpened }) =>
    isMenuOpened ? "translateX(0)" : "translateX(100%)"};
  transition: all 0.3s ease;
  clip-path: polygon(
    17% 11%,
    32% 31%,
    20% 46%,
    42% 59%,
    25% 77%,
    33% 100%,
    80% 100%,
    100% 100%,
    100% 0,
    49% 0
  );
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
  z-index: 8;
`;

export const SidebarWrap = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 30px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #c76378;
  }
`;
