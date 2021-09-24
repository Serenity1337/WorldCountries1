import React from 'react'
import FilterControl from '../../Components/FilterControl'
import Header from '../../Components/Header'
import classes from './Home.module.scss'

export const Home = () => {
  return (
    <div>
      {/* 
    1) heading 
    2) FilterControl
    3) either render the answer card or the failed validation card  
    
    */}
      <Header />
      <FilterControl />
    </div>
  )
}
