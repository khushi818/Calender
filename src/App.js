import React,{useState} from "react";
import { getMonth } from "./util";
import Month from './Month/Month'
import CalenderHeader from './CalenderHeader/CalenderHeader'
import Sidebar from "./Sidebar/Sidebar";


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  console.table(getMonth())
  return (
      <div className="flex flex-col">
        <CalenderHeader/>
        <div>
          <Sidebar/>
          <Month month ={currentMonth}/>
        </div>
      </div>
  );
}

export default App;
