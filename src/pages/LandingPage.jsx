import styled from "styled-components";
import Heading from "../ui/Heading";
import { Box } from "@mui/material";
import { PiQuotesFill } from "react-icons/pi";
import Button from "../ui/Button";
import { FaArrowRightLong } from "react-icons/fa6";

const StyledLandingPage = styled.div``;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10rem);
  background-color: var(--pimary-color);
`;
const HeroSection = styled(Section)`
  position: relative;
  & h1 {
    justify-self: first;
    margin-top: 3rem;
    max-width: 70rem;
    text-align: center;
    font-size: 3.5rem;
    margin-top: 5rem;
  }
  & .logo {
    position: relative;
    bottom: 0;
    background-color: rgba(37, 0, 187, 0.85);
    height: 34rem;
    width: 34rem;
    border-radius: 100rem;

    & img {
      filter: drop-shadow(10px 10px 4px rgba(122, 0, 215, 0.555));
      z-index: 5;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  & > img {
    position: absolute;
    &:last-child {
      bottom: 0;
      left: 0;
      width: 100%;
    }
    &:nth-of-type(1) {
      bottom: 30%;
      left: 15%;
      animation: bounce 2s infinite;
      animation-delay: 0.25s;
    }
    &:nth-of-type(2) {
      bottom: 17.5%;
      left: 28%;
      animation: bounce 2s infinite;
      animation-delay: 0.5s;
    }
    &:nth-of-type(3) {
      bottom: 27%;
      right: 27%;
      animation: bounce 2s infinite;
      animation-delay: 0.75s;
    }

    &:nth-of-type(4) {
      bottom: 20%;
      right: 20%;
      animation: bounce 2s infinite;
      animation-delay: 1s;
    }

    &:nth-of-type(5) {
      bottom: 22%;
      right: 10%;
      animation: bounce 2s infinite;
      animation-delay: 1.25;
    }
  }
`;

const SecondSection = styled(Section)`
  background-image: linear-gradient(to bottom, #2500bb 60%, white 100%);
  color: white;
  min-height: 100vh;

  & h2 {
    max-width: 70rem;
    text-align: center;
    margin-bottom: 3.5rem;
  }
`;

const FourthSection = styled(Section)`
  height: 60vh;
  position: relative;
  & img {
    position: absolute;
    bottom: 0;
    &:first-of-type {
      left: 10%;
    }
    &:last-of-type {
      right: 10%;
    }
  }
`;

const TestiomonialSection = styled(Section)`
  display: flex;
  flex-direction: column;
  background: white;
  gap: 4.5rem;
  padding-inline: 2rem;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  gap: 1.5rem;
`;

const Companies = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  & img {
    height: 5.2rem;
  }
`;

const Testimonial = styled.div`
  background: var(--color-primary);
  color: white;
  max-width: 80rem;
  display: flex;

  & svg {
    height: 10rem;
    width: 10rem;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  color: white;
  font-size: 1.4rem;
  padding: 8rem 12rem;
  & div {
    display: flex;
    gap: 4rem;
    border-bottom: 2px solid white;
    padding-bottom: 2rem;
    & ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-right: auto;
      & li:first-of-type {
        font-weight: 600;
      }
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  & h3 {
    margin-bottom: 1.5rem;
  }
  & div {
    display: flex;
    align-items: center;
    background: var(--color-grey-0);
    border-radius: 4px;
    margin-bottom: 1rem;
    padding: 0;
    border: none;
    & button {
      padding: 1rem 1.2rem;
      color: white;
      background: #0081fe;
      height: 100%;
      border: none;
      margin-left: auto;
      & svg {
        height: 100%;
      }
    }
    & input {
      padding: 1rem 1.2rem;
      height: 100%;
      border: none;
      width: 100%;
      background-color: none;
      &::placeholder {
        color: var(--color-grey-400);
        font-size: 1.4rem;
      }
    }
  }
`;

function LandingPage() {
  return (
    <StyledLandingPage>
      <HeroSection>
        <Heading as="h1">
          Effortlessly Manage Your <span style={{ color: "var(--color-primary)" }}>Documents</span>
          &nbsp;From Starts To Finish
        </Heading>

        <Button style={{ margin: "4rem 0 auto 0" }} size="large">
          Get started now
        </Button>

        <img src="/Rectangle.png" alt="rectangle" />
        <img src="/triangle.png" alt="triangle" />
        <img src="/triangle.png" alt="triangle" />
        <img src="/sphere.png" alt="sphere" />
        <img src="/Rectangle.png" alt="rectangle" />
        <img src="/Waves.png" alt="waves" />
      </HeroSection>
      <SecondSection>
        <Heading as="h2">
          Plan, Promote, and execute falwless events with our intuitive event managment software
        </Heading>
        <img src="/cards.png" alt="cards" />
      </SecondSection>
      <TestiomonialSection>
        <StyledBox>
          <Heading as="h2">
            They <span style={{ color: "var(--color-primary)" }}>Trusted</span> us
          </Heading>
          <p>We-ve had the pleasure of working with industry defeining brands, these are just some of them</p>
        </StyledBox>
        <Companies>
          <img src="/spotify.png" alt="spotify" />
          <img src="/google.png" alt="google" />
          <img src="/stripe.png" alt="stripe" />
          <img src="/youtube.png" alt="youtube" />
          <img src="/microsoft.png" alt="microsoft" />
          <img src="/uber.png" alt="uber" />
        </Companies>
        <StyledBox>
          <Heading as="h2">
            What they said about <span style={{ color: "var(--color-primary)" }}>WeDock</span>
          </Heading>
        </StyledBox>
        <Testimonial>
          <img style={{ margin: "2rem" }} src="/testimonialImg.png" alt="testimonial" />
          <StyledBox
            style={{
              paddingInline: "2rem",
              borderRight: "1px dashed var(--color-grey-200)",
              borderLeft: "1px dashed var(--color-grey-200)",
              height: "100%",
              paddingBlock: "2rem",
            }}
          >
            <p
              style={{ textAlign: "left" }}
            >{`"This tool has been a game changer four our event planning it's saved us countless hours and helped us deliver even better events for our participants."`}</p>
            <span style={{ textAlign: "right" }}>Youcef boubechiche</span>
          </StyledBox>
          <PiQuotesFill style={{ margin: "2rem" }} />
        </Testimonial>
      </TestiomonialSection>
      <FourthSection>
        <StyledBox>
          <Heading as="h2">Tired of Event managment Headaches?</Heading>
          <p>{`Simplify your planning with WeDock's intuitive plateform.`}</p>
          <Button style={{ alignSelf: "center" }} size="large" variation="secondary">
            Start now
          </Button>
        </StyledBox>
        <img src="/personOne.png" alt="person one" />
        <img src="/personTwo.png" alt="person two" />
      </FourthSection>
      <StyledFooter>
        <div>
          <ul>
            <li>Product</li>
            <li>Privacy</li>
            <li>Time tracking</li>
            <li>Terms</li>
            <li>Recruiting</li>
          </ul>
          <ul>
            <li>Information</li>
            <li>FAQ</li>
            <li>Support</li>
            <li>Cookies</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Media</li>
          </ul>
          <StyledForm>
            <h3>Subscribe</h3>
            <div>
              <input type="email" placeholder="Email adress" />
              <button>
                <FaArrowRightLong />
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam omnis obcaecati similique, dicta
              temporibus eos delectus eum odio excepturi sit.
            </p>
          </StyledForm>
        </div>
      </StyledFooter>
    </StyledLandingPage>
  );
}

export default LandingPage;
