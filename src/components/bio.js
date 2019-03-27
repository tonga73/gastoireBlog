/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              justifyContent: `flex-end`,
              alignItems: `center`,
              marginBottom: rhythm(2.5),
            }}
          >
            <p
              style={{
                margin: 0,
              }}
            >
              Realizado por <strong>{author}</strong>.
              {` `}
              <a style={{ color: `rgb(164,86,78)`, }} href={`https://twitter.com/${social.twitter}`}>
                Twitter
              </a>
            </p>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginLeft: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `7%`,
              }}
              imgStyle={{
                borderRadius: `7%`,
              }}
            />
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
