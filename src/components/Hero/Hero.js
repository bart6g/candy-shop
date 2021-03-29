import React, { useState, useEffect } from "react";
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

  const [scroll, setScroll] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const actPos = window.pageYOffset;
      setPosition(actPos);
      if (position > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [position]);

  return (
    <HeroContainer>
      <Navbar
        isMenuOpened={isMenuOpened}
        toggleMenu={setIsMenuOpened}
        scroll={scroll}
      />
      <Sidebar isMenuOpened={isMenuOpened} position={position} />
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
