import React from 'react';

import classes from './card.module.css';

export default function Card({imgSrc, title , onClick}) {
  return (
    <div className={classes.card} onClick={onClick}>
        <img src={imgSrc} className={classes.img} />
        <h2 className={classes.title}>{title}</h2>
    </div>
  )
}
