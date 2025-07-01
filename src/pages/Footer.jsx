import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import footerPic from "../assets/footer-bg.png";

// Footer-Bereich mit Hintergrundbild
const Section = styled.footer`
  background-image: url(${footerPic});
  background-size: cover;
  height: 50vh;
  width: 100vw;

  margin-top: 15rem; /* Abstand nach oben */
  margin-bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -1%;
`;

// H1 linksbündig, vertikal zentriert
const H1 = styled.h1`
  color: white;
  font-size: 3.5rem;
  letter-spacing: 1.6px;
  margin-left: 5%;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

// Icon-Bereich + Copyright rechts zentriert
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  color: white;
  margin-right: 5%;
`;

// Icon-Liste
const IconContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Einzelnes Icon
const IconItem = styled.li`
  font-size: 3rem;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: rgb(127, 206, 233);
    transform: scale(1.2);
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

function Footer() {
  return (
    <Section id="footer">
      <H1>المفكر الصغير  </H1>
      <RightBox>
        <IconContainer>
          <IconItem>
            <FontAwesomeIcon icon={faWhatsapp} />
          </IconItem>
          <IconItem>
            <FontAwesomeIcon icon={faFacebook} />
          </IconItem>
          <IconItem>
            <FontAwesomeIcon icon={faInstagram} />
          </IconItem>
        </IconContainer>
        <p style={{ marginTop: "0.5rem" }}>© 2025</p>
      </RightBox>
    </Section>
  );
}

export default Footer;
