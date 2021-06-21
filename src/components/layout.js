//Auteur : COUTEAU Thomas
//le 10/06/21
//Tuto Gatsby
import * as React from 'react'
//pour les composants Gatsby
import { Link, useStaticQuery, graphql } from 'gatsby'
//pour les boutons MATERIAL-UI
import { Button } from '@material-ui/core';

//pour le CSS
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }  
`)


  return (
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
              <Link to="/" className={navLinkText}>
                Accueil
              </Link>
            </Button>
          </li>
          <li className={navLinkItem}>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
              <Link to="/about" className={navLinkText}>
                A propos de moi
              </Link>
            </Button>
          </li>
          <li className={navLinkItem}>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
              <Link to="/hera" className={navLinkText}>
                Mon Gécko
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout