import React from 'react'
import Day from '../Day/Day'
const Month = ({month}) => (
    <div className="grid grid-rows-6">
        {month.map((row, i) =>(
            <div key = {i} className = "grid grid-cols-7">
                {row.map((day,idx) =>(
                    <Day day={ day.format('ddd') } daydate = {day.format('DD')} key = {idx} rowIdx = {i} />
                ))}
            </div>
        ))}
    </div>
)

export default Month
