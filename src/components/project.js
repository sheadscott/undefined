import React from 'react';
import style from './project.module.css';
import Img from 'gatsby-image';

export default props => (
  <a href={props.slug}>
    <div>
      <section>
        <div className={style.text}>
          <h1>{props.title}</h1>
          <h2>{props.tagline}</h2>
        </div>
        {props.image && <Img fixed={props.image} alt="" />}
      </section>
      <div className={style.hrule} />
    </div>
  </a>
);
