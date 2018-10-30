import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"


export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }

    render={data => (
        <div>
            <header>
                <Link to={`/`}>
                    {data.site.siteMetadata.title}
                </Link>
            </header>
            <main>
                { children }
            </main>
        </div>
    )}
    />
)