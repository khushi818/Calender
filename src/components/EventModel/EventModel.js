import React, {useState, useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'
import {MdOutlineSegment} from 'react-icons/md'
import {BsBookmark,BsTrash} from 'react-icons/bs'
import {IoIosCheckmark} from 'react-icons/io'
const labelClasses = ['indigo','gray','green','blue','red','purple']

const EventModel = () => {
  const {showEventModel,SavedEvents, setShowEventModel,daySelected,setDaySelected,selectedEvents} = useContext(GlobalContext)
  const [title,setTitle] = useState('')
  const [desc,setDesc] =useState(selectedEvents ? selectedEvents.desc : '')
  const [selectedLabel,setSelectedLabel]= useState(selectedEvents ? labelClasses.find((lbl) => lbl === selectedEvents) : labelClasses[0])
  const {dispatchCalEvents} = useContext(GlobalContext)

  const handleSubmit = (e) =>{
    e.preventDefault();
    const calenderEvent =  {
      title:title,
      desc : desc,
      label:selectedLabel,
      day:daySelected.valueOf(),
      id: selectedEvents ? selectedEvents.id : Date.now()
  }   
   if(selectedEvents)
   {
      dispatchCalEvents({type: 'update',payload : calenderEvent})
   }else{
      dispatchCalEvents({type: 'push',payload : calenderEvent})
   }
    setShowEventModel(false)
    console.log(calenderEvent)
  }
  
  return (
    <div>
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
          <form  className="bg-white rounded-lg shadow-2xl w-1/4" >
            <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
              <div onClick={() =>{ dispatchCalEvents({
                type : 'delete' , 
                payload : selectedEvents
                });
                setShowEventModel(false)}}>
                {selectedEvents !== [] ? <BsTrash/> :''}
              </div>
             <button onClick={()=> 
              {
                setShowEventModel(false) 
                
             }}>X</button>
            </header>
            <div className="p-3">
              <div className="flex gap-y-2 flex-col">
                <div></div>
                
               <input type= "text"
                name ="title" 
                placeholder='Add title' 
                value ={selectedEvents && (daySelected.valueOf() === selectedEvents.day) ? selectedEvents.title : title} 
                className = "pt-3 pl-8 ml-4 border-0 text-grey-600 text-xl font-semibold pb-2 w-64 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange = {(e)=> setTitle(e.target.value)} />
               
               <span className='pl-8'><p>{daySelected ?daySelected.format("dddd ,MMMM DD"):dayjs().format("dddd, MMMM DD")}</p></span>
                <div className='flex gap-2 text-xl'>
                <MdOutlineSegment/>
                <input type= "text"
                name ="title" 
                placeholder='Add Desc' 
                value ={selectedEvents && (daySelected.valueOf() === selectedEvents.day) ? selectedEvents.desc : ''} 
                className = "pl-8 ml-4 border-0 text-grey-600 pb-2 w-64 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange = {(e)=> setDesc(e.target.value)} />
               </div>
               <div className='flex gap-10 text-xl'>
                   <BsBookmark/>
                   <div className="flex gap-x-2">
                    {labelClasses.map((lblClass,i) => (
                      <span key = {i}
                      onClick = {()=>setSelectedLabel(lblClass)} 
                      className = " w-6 h-6 rounded-full flex items-center text-black" 
                      style = {{background:`${lblClass}`,opacity:'0.7'}}>   
                          {selectedLabel === lblClass && <IoIosCheckmark/>}
                      </span>
                    ))}
                   </div>
               </div>
               </div>
            </div>
            <footer className='flex justify-end w-100 border-t p-3 mt-3'>
               <button type = "submit"
               onClick={handleSubmit} 
               className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-sm'>
                 Save
               </button>
            </footer>
            </form>
        </div> 
    </div>
  )
}

export default EventModel
