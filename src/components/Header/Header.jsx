import { MainContainer } from "../MainContainer/MainContainer";
import { HeaderWrapper, Logo, StyledLink } from "./Header.styled";

const Header = () => {
  return (
    <MainContainer>
      <HeaderWrapper>
        <Logo>Logo</Logo>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorite</StyledLink>
        </nav>
      </HeaderWrapper>
    </MainContainer>
  );
};

export default Header;
