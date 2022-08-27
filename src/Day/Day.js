import React from 'react'

const Day = ({day}) => {
  return (
    <div className = "w-[100%] text-center">
      {day.format()}
    </div>
  )
}

export default Day
