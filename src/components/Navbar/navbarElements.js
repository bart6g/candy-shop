import styled from "styled-components";

export const NavbarContainer = styled.nav`
  height: 80px;
  width: 100%;
  /* position: relative; */
  background-color: ${({ scroll }) => (scroll ? "#0D174A" : "transparent")};
  width: 100%;
  position: fixed;
  z-index: 5;
  @media screen and (max-width: 450px) {
    padding-left: 15px;
  }
`;

export const NavWrap = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const Logo = styled.div`
  color: white;
  font-size: 30px;
`;
export const Hamburger = styled.div`
  width: 40px;
  height: 30px;
  position: absolute;
  right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  overflow-x: visible;

  @media screen and (max-width: 450px) {
    right: 15px;
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: white;
  transition: all 0.3s ease;
  &:nth-child(1) {
    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? `translateY(12.5px) rotate(45deg)` : ""};
  }
  &:nth-child(2) {
    opacity: ${({ isMenuOpened }) => (isMenuOpened ? `0` : "1")};
  }
  &:nth-child(3) {
    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? `translateY(-12.5px) rotate(-45deg)` : ""};
  }
`;

export const Menu = ({ isMenuOpened, toggleMenu }) => {
  return (
    <Hamburger onClick={() => toggleMenu(!isMenuOpened)}>
      <Line isMenuOpened={isMenuOpened}></Line>
      <Line isMenuOpened={isMenuOpened}></Line>
      <Line isMenuOpened={isMenuOpened}></Line>
    </Hamburger>
  );
};
