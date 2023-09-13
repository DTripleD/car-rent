import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>Logo</Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorite">Favorite</Link>
        </nav>
      </Header>
      <Suspense fallback={<h2>Loading</h2>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
