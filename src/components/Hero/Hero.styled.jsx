import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
  background-color: ${(props) => props.theme.colors.black};
  padding: 1.8rem 3rem;
  border-radius: 0.3rem;
  border: 2px solid ${(props) => props.theme.colors.black};
  transition: all 0.3s;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.black};
  }
`;

export const HeroContent = styled.div`
  padding: 0 30px;
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  right: 0;
  width: 65%;
`;
