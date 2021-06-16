//Auteur : COUTEAU Thomas
//le 10/06/21
//Tuto Gatsby
// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const HeraPage = () => {
  return (
    <Layout pageTitle="Mon Gécko Léopard">
        <p>Mon gécko se prénomme Héra, comme la déesse de la mythologie grecque.</p>
        <StaticImage
          alt="Héra, une gécko léopard de couleur beige avec des marques brunes, phase ''Raptor''."
          src="../images/hera.jpg"
        />
    </Layout>
  )
}

// Step 3: Export your component
export default HeraPage