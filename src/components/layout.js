//Auteur : COUTEAU Thomas
//le 10/06/21
//Tuto Gatsby
import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Retour au Menu</Link></li>
          <li><Link to="/about">A propos</Link></li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout