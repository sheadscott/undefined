import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 0 20px;
  display: block;

  svg {
    fill: black;
    width: 3rem;
    height: 3rem;
  }
`;

const Back = props => (
  <StyledLink {...props} to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </StyledLink>
);

export default Back;
