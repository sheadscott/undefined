import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const page = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{page.frontmatter.title}</h1>
        <Img fixed={data.image.childImageSharp.fixed} />
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!, $image: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    image: file(relativePath: { eq: $image }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`