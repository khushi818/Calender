import React from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalender from './SmallCalender'
import Labels from './Labels'

const Sidebar = () => {
  return (
    <aside className='w-64 text-center'>
        <CreateEventButton />
        <SmallCalender/>
        <Labels />
    </aside>
  )
}

export default Sidebar
