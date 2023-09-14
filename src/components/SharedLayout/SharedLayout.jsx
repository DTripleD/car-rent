import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import { Suspense } from "react";
import Header from "../Header/Header";

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<h2>Loading</h2>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
