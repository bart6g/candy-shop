import styled from "styled-components";
import heroBg from "../../images/heroimg.jpg";

export const HeroContainer = styled.div`
  height: 100vh;
  background: url(${heroBg});
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  /* max-height: 100%; */
  display: flex;
  max-width: 1300px;
  /* justify-content: center; */
  padding-left: 50px;
  align-items: center;
  color: white;
`;
export const HeroWrap = styled.div`
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroH1 = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  padding-right: 10px;
  margin-bottom: 20px;
  box-shadow: inset 19px 15px #c76378;
  letter-spacing: 2px;
`;
export const HeroP = styled.p`
  text-transform: uppercase;
  font-size: 22px;
  padding: 20px 0;
  letter-spacing: 2px;
`;
export const HeroBtn = styled.button`
  width: 250px;
  padding: 10px 30px;
  font-size: 20px;
  text-transform: uppercase;
  background-color: #c76378;
  border: none;
  border-radius: 10px;
  color: white;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
  &:hover {
    transform: translateY(-5px);
  }
`;
