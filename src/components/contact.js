import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 10px 20px;
  display: block;
`;

const Contact = props => (
  <StyledLink {...props} to={`/contact`}>
    Contact
  </StyledLink>
);

export default Contact;
