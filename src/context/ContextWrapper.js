import React, { useState,useEffect } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

const ContextWrapper = (props) =>{
     const [monthIndex,setMonthIndex] = useState(dayjs().month())
     const [smallCalender,setSmallCalender] = useState(null)
     const [daySelected,setDaySelected] = useState(null)
     useEffect(()=>{
           if(smallCalender !== null)
           {
            setMonthIndex(smallCalender);
           }
     },[smallCalender])
     return(
        <GlobalContext.Provider value = 
        {{
            monthIndex,setMonthIndex,
            smallCalender,setSmallCalender,
            daySelected,setDaySelected
        }}>
            {props.children}
        </GlobalContext.Provider>
     )
}

export default ContextWrapper