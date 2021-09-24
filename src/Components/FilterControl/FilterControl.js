import React, { useState } from 'react'
import ErrorCard from '../ErrorCard'
import AnswerCard from '../AnswerCard'
import classes from './FilterControl.module.scss'
export const FilterControl = () => {
  const [values, setvalues] = useState({
    population: true,
  })
  return (
    <div className={classes.filterControlContainer}>
      <div className={classes.btnContainer}>
        <button className={classes.populationBtn}>Population</button>
        <button className={classes.languagesBtn}>Languages</button>
      </div>
      {values.population ? (
        <span className={classes.filterControlSubheading}>
          10 most populated countries in the world
        </span>
      ) : (
        <span className={classes.filterControlSubheading}>
          10 most spoken languages in the world
        </span>
      )}
    </div>
  )
}
