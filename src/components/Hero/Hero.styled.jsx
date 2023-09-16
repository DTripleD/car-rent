import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeroSection = styled.section`
  padding: 100px 30px;
`;

export const ButtonWraper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const HeroContentText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  gap: 40px;
`;

export const LearnMore = styled(Link)`
  background-color: black;
  padding: 1.8rem 3rem;
  border-radius: 0.3rem;
  border: 2px solid black;
  transition: all 0.3s;
  color: white;

  &:hover {
    background-color: transparent;
    color: black;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  right: 0;
  width: 65%;
`;
