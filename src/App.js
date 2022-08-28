import React,{useState,useContext, useEffect} from "react";
import { getMonth } from "./util";
import Month from './components/Month/Month'
import CalenderHeader from './components/CalenderHeader/CalenderHeader'
import Sidebar from "./components/Sidebar/Sidebar";
import GlobalContext from "./context/GlobalContext";


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIndex} = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])

  console.table(getMonth())
  return (
      <div className="flex flex-col">
        <CalenderHeader/>
        <div className="inline-grid grid-cols-2" style = {{  gridTemplateColumns: '1fr 4fr'}}>
          <Sidebar/>
          <Month month ={currentMonth} />
        </div>
      </div>
  );
}

export default App;
