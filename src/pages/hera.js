//Auteur : COUTEAU Thomas
//le 10/06/21
//Tuto Gatsby
// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const HeraPage = () => {
  return (
    <Layout pageTitle="Mon Gécko Léopard">
        <p>Mon gécko se prénomme Héra, comme la déesse de la mythologie grecque.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default HeraPage