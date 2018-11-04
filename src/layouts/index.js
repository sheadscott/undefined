import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
          {children}
        </div>
      );
    }}
  />
);
