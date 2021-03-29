import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 1300px;
  margin: 20px auto;
  height: 100%;
`;

export const ContentSection = styled.section`
  width: 100%;
  height: 100%;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: ${({ imgLeft }) => (imgLeft ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  margin: 100px 0;

  @media screen and (max-width: 1100px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const SectionText = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 28px;
  }
  p {
    margin: 20px 0;
    text-align: justify;
  }

  @media screen and (max-width: 850px) {
    max-width: 600px;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 600px;
  margin-left: 40px;
  img {
    width: 100%;
  }
`;

export const SectionButton = styled.button`
  width: 200px;
  padding: 10px 0;
  color: white;
  border-radius: 15px;
  border: none;
  outline: none;
  background-color: #c76378;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  &::nth-child(1) {
    align-self: flex-end;
  }
  &:hover {
    transform: translateY(-5px);
    opacity: 0.7;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 2px;
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  display: grid;

  width: 100%;
  padding: 0 30px;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export const Box = styled.div`
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(65, 11, 16, 0.15);
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  p {
    margin: 5px 0;
  }

  h3 {
    margin-top: 10px;
  }

  h4 {
    margin-bottom: 20px;
    margin-left: 40px;
    text-align: left;
  }
`;
export const SmallImg = styled.div`
  img {
    width: 75%;
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const IconBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #c76378;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
  border-radius: 15px 0;
  opacity: 0.7;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const Contact = styled.div`
  margin-top: 75px;
  background-color: #c76378;
  height: 100%;
  width: 100%;
  position: relative;
  clip-path: polygon(25% 0%, 100% 0, 100% 74%, 79% 100%, 0 100%, 0 25%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  h1 {
    margin-top: 30px;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 10px 0;
  }

  .inputs {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  label {
    display: flex;
    position: relative;
    overflow: hidden;
    span {
      position: absolute;
      top: 28px;
      left: 5px;
      transition: all 0.3s ease;
    }
  }
  input {
    width: 100%;
    padding: 10px 20px 10px 10px;
    margin: 20px 0;
    appearance: none;
    outline: none;
    border: none;
  }

  input:focus,
  input:valid {
    + .placeholder {
      top: -5px;
      display: inline-block;
      font-weight: 600;
    }
  }
  .wish {
    height: 100px;
  }
`;

export const ContactButton = styled.button`
  margin: 20px;
  padding: 10px 20px;
  text-transform: uppercase;
  background-color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;
