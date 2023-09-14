import { HeaderWrapper, Logo, Link } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Logo</Logo>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorite</Link>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
