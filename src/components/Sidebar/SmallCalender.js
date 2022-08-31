import React, { useContext, useEffect , useState} from 'react'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'
import {FcPrevious} from 'react-icons/fc'
import {FcNext} from 'react-icons/fc'
import { getMonth } from '../../util'

const SmallCalender = () => {
  const [currentMonthIdx,setCurrentMonthIdx] = useState(dayjs().month())
  const [currentMonth ,setCurrentMonth]= useState(getMonth())
   const {monthIndex} = useContext(GlobalContext)
   const {SmallCalender,setSmallCalender} = useContext(GlobalContext)
   const {daySelected, setDaySelected} = useContext(GlobalContext)
  /* ============================ functions ================================*/
  const handlePrevMonth = () =>{
    setCurrentMonthIdx(currentMonthIdx === 0 ? 11 : currentMonthIdx-1)
  }// prev button

  const handleNextMonth = () =>{
    setCurrentMonthIdx(currentMonth === 11 ? 0 : currentMonthIdx + 1)
  }//next button

  
   const getCurrentDayClass = (day) =>{     
        return (
        day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7':''
        )
    }//current date
     const getDayClass = (day) =>{        
        return (
        day.format('DD-MM-YY') === daySelected.format('DD-MM-YY') && day.format('DD-MM-YY') !== dayjs().format('DD-MM-YY') ? 'bg-pink-500 text-white rounded-full w-7':''
        )
    }
  useEffect(() =>{
    setCurrentMonth(getMonth(currentMonthIdx))
  },[currentMonthIdx])

  useEffect(() =>{
       setCurrentMonthIdx(monthIndex)
    setCurrentMonth(getMonth(monthIndex))
 
  },[monthIndex])

  
 /*=================================== return ===========================*/
  return (
    <div className='mt-9'>
      <header className='flex justify-center items-center'>
        <p className='text-grey-500 font-bold'>{dayjs(new Date(dayjs().year(),currentMonthIdx)).format('MMMM-YYYY')}</p>
         <button onClick = {handlePrevMonth} className='cursor-pointer mx-2'>
          <FcPrevious/>
       </button>
       <button onClick = {handleNextMonth} className='cursor-pointer mx-2'>
          <FcNext/>
       </button>
       </header>
       <section>
            <div className = "grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day,i) => (
                <span key = {i} className= "text-sm py-1 text-center">
                    {day.format("dd").charAt(0)}
                </span>
                ))}
                {currentMonth.map((row,i) => (
                    <React.Fragment key={i}>
                    {row.map((day,i) =>(
                        <button 
                        key = {i}
                        onClick = {()=>{
                            setSmallCalender(currentMonthIdx);
                            setDaySelected(day)
                        }} 
                        className= {`text-sm py-1 text-center ${getCurrentDayClass(day)} ${daySelected? getDayClass(day):''}`}>
                           <span >
                              {day.format("D")}
                           </span>
                         </button>  
                    ))}
                     </React.Fragment>
                ))}
            </div>     
       </section>
    </div>
  )
}

export default SmallCalender
