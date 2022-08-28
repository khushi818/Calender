import React from 'react'
import {BsPlusLg} from 'react-icons/bs'

const CreateEventButton = () => {
  return (
    <div className='p-2 rounded-full flex justify-center items-center shadow-md hover:shadow-2xl'>
        <p className='font-[700] font-[32px] border-slate-500 text-gray-700 flex justify-center items-center gap-4'>
            <BsPlusLg/><span>Create</span>
        </p>
    </div>
  )
}

export default CreateEventButton
