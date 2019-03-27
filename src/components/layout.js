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
          padding: `${rhythm(1.5)} ${rhythm(4 / 4)}`,
        }}
      >
        <header className="navigation">{header}</header>
        <main
          style={{
            fontFamily: 'Code Source Pro, monospace',
          }}
        >{children}</main>
        <footer
          style={{
            display: `flex`,
            flexDirection: `column`,
            backgroundColor: `#333`,
            color: `#f1948a`,
            textAlign: `center`,
            bottom: 0,
            justifyContent: `space-around`,
            alignItems: `center`,
            fontFamily: `Josefin Sans, sans-serif`,
          }}
        >
          gastoire © {new Date().getFullYear()} <i style={{ color: `rgba(242,242,242,0.3)`, }}>con</i>
          {` `}
          <nav
            style={{ 
              display: `flex`,
              marginTop: `7px`,
              justifyContent: `space-around`,
              width: `100%`,  
            }}
          >
            <a
              className="footer-link" 
              href="https://www.linux.org">Linux
            </a>
            <a
              className="footer-link" 
              href="https://www.gatsbyjs.org">Gatsby
            </a>
            <a
              className="footer-link" 
              href="https://www.netlify.com">Netlify
            </a>
          </nav>
        </footer>
      </div>
    )
  }
}

export default Layout
