import React from 'react'
import classes from './AnswerCard.module.scss'

export const AnswerCard = (props) => {
  console.log(props.values.mass)
  return (
    <div className={classes.card}>
      <img className={classes.planet} src='' alt='' />
      {props.values.mass ? (
        <div className={classes.informationCard}>
          <h1>
            The weight of the object on <span>{props.values.planet}</span>
          </h1>
          <div className={classes.mass}>{props.values.mass} N</div>
        </div>
      ) : null}
    </div>
  )
}
