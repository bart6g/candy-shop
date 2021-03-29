import React from "react";
import { NavbarContainer, Logo, Menu } from "./navbarElements";

const Navbar = ({ isMenuOpened, toggleMenu }) => {
  return (
    <NavbarContainer>
      <Logo>CandyShop</Logo>
      <Menu isMenuOpened={isMenuOpened} toggleMenu={toggleMenu} />
    </NavbarContainer>
  );
};

export default Navbar;
