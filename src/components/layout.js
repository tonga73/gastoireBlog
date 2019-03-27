import React from "react"
import { Link } from "gatsby"
import "./layout.css";

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.7),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `rgb(241,148,138)`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            ...scale(1.3),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `rgb(241,148,138)`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          backgroundColor: `inherit`,
          color: `whitesmoke`,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(0.1)} ${rhythm(3 / 4)}`,
        }}
      >
        <header className="navigation">{header}</header>
        <main
          style={{
            fontFamily: 'Code Source Pro, monospace',
          }}
        >{children}</main>
        <footer>
          © {new Date().getFullYear()}, Hecho con 
          {` `}
          <a 
            style={{
              color: `rgba(242,242,242,0.7)`
            }} 
            href="https://www.gatsbyjs.org">Gatsby
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout
