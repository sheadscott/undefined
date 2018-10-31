import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
                fixed(width: 242) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
    `}
    render={data => {
      return (
        <div>
          <header>
            <Link to={`/`}>
              <Img
                fixed={data.siteLogo.childImageSharp.fixed}
                alt={data.site.siteMetadata.title}
              />
            </Link>
            <Link to={`/contact`}>
              Contact
            </Link>
            <p id="tagline">Really amazing tagline will go right here! Is it amazing enough? Then write it again!</p>
          </header>
          <main>
            {children}
          </main>
        </div>
      );
    }}
  />
);
