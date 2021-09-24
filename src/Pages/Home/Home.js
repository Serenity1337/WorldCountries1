import React, { useState, useEffect } from 'react'
import FilterControl from '../../Components/FilterControl'
import Header from '../../Components/Header'
import classes from './Home.module.scss'
import { countries } from '../../Utils/CountryList'
import PopulationCard from '../../Components/PopulationCard'
import LanguagesCard from '../../Components/LanguagesCard'
export const Home = () => {
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
  return (
    <div>
      {/* 
    1) heading 
    2) FilterControl
    3) either render the answer card or the failed validation card  
    
    */}
      <Header />
      <FilterControl
        values={values}
        setValues={setValues}
        countries={countries}
      />
      {values.population ? (
        <PopulationCard filteredData={values.filteredData} />
      ) : (
        <LanguagesCard filteredData={values.filteredData} />
      )}
    </div>
  )
}
