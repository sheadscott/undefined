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
      console.log('data', data);
      return (
        <div>
          <header>
            <Link to={`/`}>
              <Img
                fixed={data.siteLogo.childImageSharp.fixed}
                alt={data.site.siteMetadata.title}
              />
            </Link>
          </header>
          <main>
            {children}
          </main>
        </div>
      );
    }}
  />
);
