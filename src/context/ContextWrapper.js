import React, { useState,useEffect, useReducer } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'
import { parse } from 'postcss'

function SavedEventsReducer(state,{type,payload}) {
  switch(type){
    case 'push':
        return[...state,payload]
    case  'update':
        return state.map(evt => evt.id === payload.id ? payload : evt)
    case 'delete':
        return state.filter(evt =>evt.id !== payload.id)        
    default:
        throw new Error();
  }
}

function initEvents(){
    const storageEvents = localStorage.getItem('savedEvents')
    const parsedEvents = storageEvents ? JSON.parse(storageEvents):[]
    return parsedEvents;
}
const ContextWrapper = (props) =>{
     const [monthIndex,setMonthIndex] = useState(dayjs().month())
     const [smallCalender,setSmallCalender] = useState(null)
     const [daySelected,setDaySelected] = useState(null)
     const [showEventModel,setShowEventModel] = useState(false)
     const [SavedEvents,dispatchCalEvents] = useReducer(
        SavedEventsReducer,
        [],
        initEvents)

     useEffect(() =>{
        localStorage.setItem("saveEvents",JSON.stringify(SavedEvents))
     },[SavedEvents])

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
            daySelected,setDaySelected,
            showEventModel,setShowEventModel,
            dispatchCalEvents
        }}>
            {props.children}
        </GlobalContext.Provider>
     )
}

export default ContextWrapper