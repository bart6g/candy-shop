import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroBtn,
  HeroH1,
  HeroWrap,
  HeroP,
} from "./heroElements";

const Hero = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <HeroContainer>
      <Navbar isMenuOpened={isMenuOpened} toggleMenu={setIsMenuOpened} />
      <Sidebar isMenuOpened={isMenuOpened} />
      <HeroContent>
        <HeroWrap>
          <HeroH1>Welcome to our shop</HeroH1>
          <HeroP>Candies are ready in few minutes</HeroP>
          <HeroBtn>Order now</HeroBtn>
        </HeroWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
