import React from "react"
import style from "./project.module.css"

export default (props) => (
    <div>
        <section>
            <div className={style.text}> 
                <h1>{props.title}</h1>
                <h2>{props.tagline}</h2>
            </div>
            
            <img src={props.image} alt=""/>
        </section>
        <div className={style.hrule} />
    </div>
)