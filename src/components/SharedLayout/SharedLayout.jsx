import { Suspense } from 'react';
import {
  Container,
  Header,
  Logo,
  Link,
  LinkLogo,
} from 'components/SharedLayout/SharedLayout.styled';
import {
  StyledHiHome,
  StyledRiMovie2Fill,
  StyledSiThemoviedatabase,
} from 'components/Icons/Icons.styled';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const SharedLayout = () => {
  return (
    <Container>
      <ScrollToTop smooth color="#1a9c00" />
      <Header>
        <nav>
          <Link to="/" end>
            <StyledHiHome />
            Home
          </Link>
        </nav>
        <Logo>
          <LinkLogo to="/">
            <StyledSiThemoviedatabase />
          </LinkLogo>
        </Logo>
        <nav>
          <Link to="/movies">
            <StyledRiMovie2Fill /> Movies
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
