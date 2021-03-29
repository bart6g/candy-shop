import React, { useState, useEffect } from "react";
import { NavbarContainer, Logo, Menu, NavWrap } from "./navbarElements";

const Navbar = ({ isMenuOpened, toggleMenu, scroll }) => {
  return (
    <NavbarContainer scroll={scroll}>
      <NavWrap>
        <Logo>Candy</Logo>
        <Menu isMenuOpened={isMenuOpened} toggleMenu={toggleMenu} />
      </NavWrap>
    </NavbarContainer>
  );
};

export default Navbar;
