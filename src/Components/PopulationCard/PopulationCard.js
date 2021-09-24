import React from 'react'
import classes from './PopulationCard.module.scss'
export const PopulationCard = (props) => {
  console.log(props)
  const calculatePercentage = (currCountry, worldCountry) => {
    return Math.round((currCountry / worldCountry) * 100)
  }
  return (
    <div className={classes.populationContainer}>
      {props.filteredData.map((country, index) => (
        <div className={classes.dataContainer} key={country.name}>
          <div className={classes.country}>{country.name}</div>
          <div className={classes.populationBarContainer}>
            <div
              className={classes.populationBar}
              style={{
                width: `${calculatePercentage(
                  country.population,
                  props.filteredData[0].population
                )}%`,
              }}
            ></div>
          </div>
          <div className={classes.population}>{country.population}</div>
        </div>
      ))}
    </div>
  )
}
