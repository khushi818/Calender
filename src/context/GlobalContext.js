import React from 'react'

const GlobalContext = React.createContext({
  monthIndex:0,
  setMonthIndex:(index) => {},
  smallCalender :0,
  setSmallCalender:(index) =>{},
  daySelected:null,
  setDaySelected:(day)=>{},
  showEventModel:false,
  setShowEventModel:() =>{},
  dispatchCalEvents:({type,payload})=>{}
})

export default GlobalContext
