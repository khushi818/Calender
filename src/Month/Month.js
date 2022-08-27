import React from 'react'
import Day from '../Day/Day'
const Month = ({month}) => (
    <div className="grid grid-cols-6 gap-x-[1rem]">
        {month.map((row, i) =>(
            <div key = {i} class = "grid grid-rows-4 gap-x-[8rem] gap-y-[5rem] flex-1">
                {row.map((day,idx) =>(
                    <Day day={day} key = {idx} />
                ))}
            </div>
        ))}
    </div>
)

export default Month
