import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default props => {
  const page = props.data.markdownRemark;
  console.log('page', page);
  return (
    <div>
      <h1>{page.frontmatter.title}</h1>
      <Img fixed={page.frontmatter.img.childImageSharp.fixed} />
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        img {
          childImageSharp{
              fixed(width: 856) {
                ...GatsbyImageSharpFixed
              }
          }
        }
      }
    }
  }
`;
