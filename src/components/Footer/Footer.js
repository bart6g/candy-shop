import React from "react";
import { FooterContainer, ColumnWrapper, Column } from "./footerElements";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <FooterContainer>
      <ColumnWrapper>
        <Column>
          <li>
            <h3>Sweet gift</h3>
          </li>
          <li>Sent a gift</li>
          <li>Contact</li>
        </Column>
        <Column>
          <li>
            <h3>Our services</h3>
          </li>
          <li>Pricing</li>
          <li>Discount</li>
        </Column>
        <Column>
          <li>
            <h3>Our company</h3>
          </li>
          <li>About us</li>
          <div>
            <div className="media">
              <div className="icon">
                <AiOutlineTwitter />
              </div>
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FiGithub />
              </div>
            </div>
          </div>
        </Column>
      </ColumnWrapper>
    </FooterContainer>
  );
};

export default Footer;
