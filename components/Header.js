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
  button {
    border: none;
    font-size: 1.6rem;
    display: block;
  }
  a {
    display: block;
  }
`;

const Header = () => (
  <StyledHeader>
    <h1>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </h1>
    <nav>
      <button>Contact</button>
    </nav>
  </StyledHeader>
);

export default Header;
