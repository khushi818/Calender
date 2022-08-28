import React from 'react'

const GlobalContext = React.createContext({
  monthIndex:0,
  setMonthIndex:(index) => {},
  smallCalender :0,
  setSmallCalender:(index) =>{},
  daySelected:null,
  setDaySelected:(day)=>{}
})

export default GlobalContext
