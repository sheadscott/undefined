import React from "react";
import styled from "styled-components";
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import Nav from '../components/nav';
import Back from '../components/back';

const BackButton = styled(Back)`
  background: black;
  border-radius: 0 0 10px 0;

  svg {
    fill: white;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 4.5rem;
`;

const Form = styled.form`
    max-width: 600px;
    margin: 2rem;
    display: flex;
    flex-direction: column;

    button, input, select, textarea {
        font-family : inherit;
        font-size   : 100%;
        border: 1px solid #CCC;
        text-transform: uppercase;
    }

    textarea {
        font-size: 1rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
        padding: 1rem;
        height: 200px;
        text-transform: none;
    }

    label {
        font-size: 2rem;
        text-transform: uppercase;
    }

    input {
        min-height: 2rem;
        padding: .2rem 1rem;
        text-transform: none;
    }

    input, label {
        margin-bottom: 1.4rem;
    }

    input[type=submit] {
        background-color: black;
        color: white;
        padding: .6rem;
        font-size: 2rem;
        width: 10rem;
        margin: 0;
        margin-left: auto;
        text-transform: uppercase;
    }
`
export default ({ data }) => (
    <div>
        <Nav>
            <BackButton />
        </Nav>
        <Header>
        <Link to={`/`}>
            <Img
            fixed={data.siteLogo.childImageSharp.fixed}
            alt={data.site.siteMetadata.title}
            />
        </Link>
        </Header>
        <Form action="https://example.com" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <textarea name="message" placeholder="Message" />
            <input type="submit" value="submit" />

        </Form>
    </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    siteLogo: file(relativePath: {eq: "undefined-logo.png"}) {
      childImageSharp{
          fixed(width: 140) {
              ...GatsbyImageSharpFixed
          }
      }
    }
  }
`;