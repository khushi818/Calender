import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

const Labels = () => {
    const {labels,SavedEvents} = useContext(GlobalContext);
    console.log(labels) 
    const lengthLabels = (lbl) =>
    {
        return SavedEvents.filter((evt) => evt.label === lbl ).length
    }
  return (
    <>
      <p className="text-gray-500 font-bold mt-10">
        Label
      </p>
      <div>
            {labels.map((lbl,index) =>(
        <React.Fragment key = {index} className ="flex flex-col">
        <label className ="mt-3 block"></label>
        <div className  = "ml-16 flex flex-cols justify-start items-center gap-1">
            <div className = "cursor-pointer text-white w-4 h-4"
            style ={{background : `${lbl}`}} ></div>
            <span className=' text-gray-700 capatalize'>{lbl}</span>
            <span className='text-black'>{lengthLabels(lbl)}</span>
            </div>
       </React.Fragment>
        
            )
      )}
       </div>
    </>
  )
}

export default Labels
