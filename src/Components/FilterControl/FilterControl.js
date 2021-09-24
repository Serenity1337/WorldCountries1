import React, { useState, useEffect } from 'react'
import ErrorCard from '../ErrorCard'
import AnswerCard from '../AnswerCard'
import classes from './FilterControl.module.scss'
import { countries } from '../../Utils/CountryList'
export const FilterControl = () => {
  const [values, setValues] = useState({
    population: true,
    filteredData: [],
  })
  useEffect(() => {
    const valuesCopy = { ...values }
    const countriesCopy = [...countries]
    countriesCopy.sort(function (a, b) {
      if (a.population > b.population) return -1
      if (a.population < b.population) return 1
      return 0
    })
    countriesCopy.splice(10, countriesCopy.length - 10)
    countriesCopy.splice(0, 0, { name: 'World', population: 7693165599 })
    valuesCopy.filteredData = countriesCopy
    setValues(valuesCopy)
  }, [])
  console.log(values)
  const filterLanguagesHandler = (countries) => {
    const countriesClone = [...countries]
    const allLanguages = {}
    const filteredTopTenLanguages = []
    countriesClone.map((country) => {
      country.languages.map((language) => {
        if (allLanguages[language]) {
          allLanguages[language] += 1
        } else {
          allLanguages[language] = 1
        }
      })
    })
    const languageEntries = Object.entries(allLanguages)
    languageEntries.sort(function (a, b) {
      if (a[1] > b[1]) return -1
      if (a[1] < b[1]) return 1
      return 0
    })
    languageEntries.splice(10, languageEntries.length - 10)
    languageEntries.map((entry) => {
      console.log(entry)
      filteredTopTenLanguages.push({ name: entry[0], amount: entry[1] })
    })
    const valuesCopy = { ...values }
    valuesCopy.population = false
    valuesCopy.filteredData = filteredTopTenLanguages
    setValues(valuesCopy)
  }
  const filteredPopulationHandler = (countries) => {
    const valuesCopy = { ...values }
    const countriesCopy = [...countries]
    countriesCopy.sort(function (a, b) {
      if (a.population > b.population) return -1
      if (a.population < b.population) return 1
      return 0
    })
    countriesCopy.splice(10, countriesCopy.length - 10)
    countriesCopy.splice(0, 0, { name: 'World', population: 7693165599 })
    valuesCopy.filteredData = countriesCopy
    valuesCopy.population = true
    setValues(valuesCopy)
  }
  return (
    <div className={classes.filterControlContainer}>
      <div className={classes.btnContainer}>
        <button className={classes.populationBtn}>Population</button>
        <button
          className={classes.languagesBtn}
          onClick={() => filterLanguagesHandler(countries)}
        >
          Languages
        </button>
      </div>
      {values.population ? (
        <span
          onClick={() => filteredPopulationHandler(countries)}
          className={classes.filterControlSubheading}
        >
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
