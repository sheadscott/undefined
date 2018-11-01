import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";

const Header = styled.header`
  padding: 2rem;
  padding-left: 0;
  margin-left: 10%;
`

const HeaderText = styled.div`
  float: right;
  text-align: right;
  font-size: 1.5rem;
  a {
    font-size: 2rem;
    text-transform: uppercase;
  }
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      return (
        <div>
          <Header>
            <Link to={`/`}>
              <Img
                fixed={data.siteLogo.childImageSharp.fixed}
                alt={data.site.siteMetadata.title}
              />
            </Link>
            <HeaderText>
              <Link to={`/contact`}>
                Contact
              </Link>
              <p id="tagline">Really amazing tagline will go right here! Is it amazing enough? Then write it again!</p>
            </HeaderText>      
          </Header>
          <main>
            {children}
          </main>
        </div>
      );
    }}
  />
);
