import React, { useEffect , useState} from 'react'
import dayjs from 'dayjs'
import { getMonth } from '../../util'

const SmallCalender = () => {
  const [currentMonthIdx , setCurrentMonthIdx] = useState(dayjs().month())
  const [currentMonth ,setCurrentMonth]= useState(getMonth())

  useEffect(() =>{
    setCurrentMonth(getMonth(currentMonthIdx))
  },[currentMonthIdx])

  return (
    <div className='mt-9'>
      <header className='flex justify-center items-center'>
        <p className='text-grey-500 font-bold'>{dayjs(new Date(dayjs().year(),currentMonthIdx)).format('MMMM-YYYY')}</p>
      </header>
    </div>
  )
}

export default SmallCalender
