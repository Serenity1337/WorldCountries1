import React from 'react'
import classes from './Header.module.scss'
export const Header = () => {
  return (
    <header>
      <h1 className={classes.heading}>World Countries Data</h1>
      <div className={classes.subHeading}>Currently, we have 250 countries</div>
    </header>
  )
}
