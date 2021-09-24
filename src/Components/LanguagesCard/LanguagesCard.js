import React from 'react'
import classes from './LanguagesCard.module.scss'

export const LanguagesCard = (props) => {
  console.log(props)
  const calculatePercentage = (currLanguage, highestLanguage) => {
    return Math.round((currLanguage / highestLanguage) * 100)
  }
  return (
    <div className={classes.populationContainer}>
      {props.filteredData.map((language, index) => (
        <div className={classes.dataContainer} key={language.name}>
          <div className={classes.language}>{language.name}</div>
          <div className={classes.languageBarContainer}>
            <div
              className={classes.languageBar}
              style={{
                width: `${calculatePercentage(
                  language.amount,
                  props.filteredData[0].amount
                )}%`,
              }}
            ></div>
          </div>
          <div className={classes.amount}>{language.amount}</div>
        </div>
      ))}
    </div>
  )
}
