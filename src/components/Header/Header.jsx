import { HeaderWrapper, Logo, StyledLink } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>CarRent</Logo>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorite</StyledLink>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
