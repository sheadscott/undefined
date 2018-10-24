import React from "react"
import Project from "../components/project" 
import productImg1 from "./img/productImg1.png"
// Use gatsby-image, sharp, etc.
// Widths
// desktop: 1200px
// superwide: 2200px
// phone: 414px

export default () => (
    <main>
        <Project 
            title="Some Cool Project" 
            tagline="Tiny tagline or explainer text, at least one sentence but a long one."  
            image={productImg1}
        />
        <Project 
            title="Some Cool Project" 
            tagline="Tiny tagline or explainer text, at least one sentence but a long one."  
            image={productImg1}
        />
        <Project 
            title="Some Cool Project" 
            tagline="Tiny tagline or explainer text, at least one sentence but a long one."  
            image={productImg1}
        />
    </main>
)
