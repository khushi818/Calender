import React from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalender from './SmallCalender'
const Sidebar = () => {
  return (
    <aside className='w-64 text-center'>
        <CreateEventButton />
        <SmallCalender/>
    </aside>
  )
}

export default Sidebar
