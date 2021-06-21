//Auteur : COUTEAU Thomas
//le 10/06/21
//Tuto Gatsby
// Etape 1 : importation du composant
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Etape 2 : Def du composant
const AboutPage = () => {
  return (
    <Layout pageTitle="A propos de moi">
      <p>
        Salut à tous! Ceci est mon tout premier site que je construis avec Gatsby. <br />
        Je m'appelle Thomas, j'ai 19ans et je suis en BTS informatique au lycée Gustave Eiffel.
      </p>
      <StaticImage
        alt="Photo de moi lorsque j'étais en vacances."
        src="../images/moi.JPG"
      />
    </Layout>
  )
}

// Step 3: Exportation du composant
export default AboutPage