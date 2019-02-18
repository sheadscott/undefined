import styled from 'styled-components';
import Link from 'next/link';

import Logo from '../static/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 0;

  h1 {
    margin: 0;
    padding: 0;

    a svg {
      width: 120px;
    }
  }
  a {
    display: block;
  }
`;

const Nav = styled.nav`
  a {
    font-size: 1.25rem;
    text-transform: uppercase;
  }
`;

const Header = props => (
  <StyledHeader>
    <h1>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </h1>
    <Nav>
      <Link href="/contact">
        <a onClick={props.openDrawer}>Contact</a>
      </Link>
    </Nav>
  </StyledHeader>
);

export default Header;
