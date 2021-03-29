import React from "react";
import {
  ContentContainer,
  ContentSection,
  ImgWrap,
  SectionButton,
  SectionText,
  SectionWrapper,
  Title,
  ProductWrapper,
  Box,
  SmallImg,
  ProductContainer,
  Flex,
  IconBox,
  Contact,
  ContactButton,
} from "./contentElements";
import img1 from "../../images/birthdaycake.svg";
import img2 from "../../images/present.svg";
import img3 from "../../images/accessory2.png";
import donout from "../../images/donout.jpg";
import cake from "../../images/cake.jpg";
import desert from "../../images/desert.jpg";
import cupcakes from "../../images/cupcakes.jpg";
import { GiCupcake } from "react-icons/gi";

const Content = () => {
  return (
    <ContentContainer>
      <ContentSection>
        <SectionWrapper>
          <SectionText>
            <h2>Who are we?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              placeat cum perferendis nihil modi debitis voluptate sed autem
              cumque praesentium, nobis quia, itaque eum maxime corporis hic
              commodi est dignissimos?
            </p>
            <SectionButton>Order now</SectionButton>
          </SectionText>
          <ImgWrap>
            <img src={img1} alt="cake" />
          </ImgWrap>
        </SectionWrapper>
        <SectionWrapper imgLeft={true}>
          <SectionText>
            <h2>Send a sweet gift to a friend</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              placeat cum perferendis nihil modi debitis voluptate sed autem
              cumque praesentium, nobis quia, itaque eum maxime corporis hic
              commodi est dignissimos?
            </p>
            <SectionButton>Order now</SectionButton>
          </SectionText>
          <ImgWrap>
            <img src={img2} alt="present" />
          </ImgWrap>
        </SectionWrapper>

        <ProductWrapper>
          <Title>Our products</Title>
          <Flex>
            <ProductContainer>
              <Box>
                <h3>Product One</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <SmallImg>
                  <img src={donout} alt="candy" />
                </SmallImg>
                <h4>$1.20</h4>
                <IconBox>
                  <GiCupcake />
                </IconBox>
              </Box>
              <Box>
                <h3>Product One</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <SmallImg>
                  <img src={cake} alt="candy" />
                </SmallImg>
                <h4>$12</h4>
                <IconBox>
                  <GiCupcake />
                </IconBox>
              </Box>
              <Box>
                <h3>Product One</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <SmallImg>
                  <img src={desert} alt="candy" />
                </SmallImg>
                <h4>$15</h4>
                <IconBox>
                  <GiCupcake />
                </IconBox>
              </Box>
              <Box>
                <h3>Product One</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <SmallImg>
                  <img src={cupcakes} alt="candy" />
                </SmallImg>
                <h4>$0.50</h4>
                <IconBox>
                  <GiCupcake />
                </IconBox>
              </Box>
            </ProductContainer>
          </Flex>
        </ProductWrapper>
      </ContentSection>

      <Contact>
        <h1>place your order now</h1>
        <form>
          <div className="inputs">
            <label>
              <input type="text" required />
              <span className="placeholder">Your name</span>
            </label>
            <label>
              <input type="text" required />
              <span className="placeholder">Adress email</span>
            </label>
          </div>
          <label>
            <input type="text" required className="wish" />
            <span className="placeholder">Any wishes?</span>
          </label>
        </form>
        <ContactButton>Send</ContactButton>
      </Contact>
    </ContentContainer>
  );
};

export default Content;
