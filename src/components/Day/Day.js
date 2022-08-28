import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'
const Day = ({day,daydate,rowIdx}) => {
   const {monthIndex, setMonthIndex} = useContext(GlobalContext) 
    const getCurrentDayClass = () =>{
             
        console.log(dayjs().date())// gives current date
        console.log(daydate)
        return (Number(daydate) === dayjs().date()) && (dayjs().month() === monthIndex) ? 'bg-blue-600 text-white rounded-full w-7':''
    }
  return (
    <div className = "border-spacing-2 border-[1px] border-indigo-500 p-10">
       <header className='flex flex-col items-center'>
        {rowIdx === 0 && (<p className="text-sm mt-1">{day}</p>) }
        <p className= {`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
            {daydate}
        </p>
        
        </header> 
    </div>
  )
}

export default Day
