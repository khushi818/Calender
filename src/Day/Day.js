import React from 'react'
import dayjs from 'dayjs'
const Day = ({day,daydate,rowIdx}) => {

    const getCurrentDayClass = () =>{
        console.log(dayjs().date())// gives current date
        console.log(daydate)
        return Number(daydate) === dayjs().date() ? 'bg-blue-600 text-white rounded-full w-7':''
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
