import React,{useContext, useState} from 'react'
import {FcPrevious} from 'react-icons/fc'
import {FcNext} from 'react-icons/fc'
import {SiGooglecalendar} from 'react-icons/si'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'

const CalenderHeader = () => { 
  const {monthIndex,setMonthIndex} = useContext(GlobalContext)

  const handlePrevMonth = () =>{
    setMonthIndex(monthIndex === 0 ? 11 : monthIndex-1)
  }

  const handleNextMonth = () =>{
    setMonthIndex(monthIndex === 11 ? 0 : monthIndex + 1)
  }

  const resetToCurrent = () =>{
    setMonthIndex(dayjs().month())
  }
  return (
    <header className='px-4 py-2 flex items-center'>
       <SiGooglecalendar className='mr-2 w-12 h-12'/>
       {/* <img src = {logo} alt = "calender" className='mr-2 w-12 h-12'/> */}
       <h1 className='mr-10 text-xl text-gray-500 font-bold'>
         Calender
       </h1>
       <button onClick = {resetToCurrent} className = "px-4 mr-5 py-2 rounded border">Today</button>
       <button onClick = {handlePrevMonth} className='cursor-pointer mx-2'>
          <FcPrevious/>
       </button>
       <button onClick = {handleNextMonth} className='cursor-pointer mx-2'>
          <FcNext/>
       </button>
       <h2 className='ml-4 text-ml text-gray-600 font-[700]'>
          {dayjs(new Date(dayjs().year(),monthIndex)).format("MMMM YYYY")}
       </h2>
    </header>
  )
}

export default CalenderHeader
