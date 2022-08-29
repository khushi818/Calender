import React, { useContext } from 'react'
import {BsPlusLg} from 'react-icons/bs'
import GlobalContext from '../../context/GlobalContext'
const CreateEventButton = () => {
  const {showEventModel,setShowEventModel} = useContext(GlobalContext)
  return (
    <button onClick = {() =>setShowEventModel(true)} className='px-8 py-4 rounded-full flex justify-center items-center shadow-md hover:shadow-2xl'>
        <p className='font-[700] font-[32px] border-slate-500 text-gray-700 flex justify-center items-center gap-4'>
            <BsPlusLg/><span>Create</span>
        </p>
    </button>
  )
}

export default CreateEventButton
