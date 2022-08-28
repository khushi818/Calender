import React from 'react'
import Day from '../Day/Day'
const Month = ({month}) => (
    <div className='row-span-2'>
    <div className="grid grid-rows-5">
        {month.map((row, i) =>(
            <div key = {i} className = "grid grid-cols-7">
                {row.map((day,idx) =>(
                    <Day day={day} daydate = {day.format('DD')} key = {idx} rowIdx = {i} />
                ))}
            </div>
        ))}
    </div>
    </div>
)

export default Month
