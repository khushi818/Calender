import React, { useState,useEffect, useReducer } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

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
     const [selectedEvents ,setSelectedEvents] = useState(null)
     const [labels,setLabel] = useState([])
     const [SavedEvents,dispatchCalEvents] = useReducer(
        SavedEventsReducer,
        [],
        initEvents)


     useEffect(() =>{
        localStorage.setItem("savedEvents",JSON.stringify(SavedEvents))
     },[SavedEvents])

     useEffect(() =>{
          setLabel(
            [...new Set(SavedEvents.map(evt => evt.label))]
          ) 
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
            dispatchCalEvents,SavedEvents,
            selectedEvents,setSelectedEvents,
            labels,setLabel
        }}>
            {props.children}
        </GlobalContext.Provider>
     )
}

export default ContextWrapper