import "./App.css";
import UserInput from "./components/UserInput";
import Output from "./components/Output.jsx";

import { useState } from "react";

function App() {
  const [ageYear, setAgeYear] = useState();
  const [ageMonth, setAgeMonth] = useState();
  const [ageDay, setAgeDay] = useState();

  function calculateAge(day, month, year) {
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1;

    let diffMonth = month - currentMonth

    if(diffMonth >= 0) {
      setAgeYear(currentYear - year - 1)
      setAgeMonth(12 - diffMonth)
    }
    else if(diffMonth < 0) {
      setAgeYear(currentYear - year)
      setAgeMonth(diffMonth * -1)
    }

    // Get current day
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start
    let oneDay = 1000 * 60 * 60 * 24;
    let currentDay = Math.floor(diff / oneDay);

    //Get day of the userinput
    let x = new Date(now.getFullYear() - 1, month - 1, day);
    let diff2 = now - x;
    let secondDay = 1000 * 60 * 60 * 24;
    let userDay = Math.floor(diff2 / secondDay);

    console.log(currentDay)
    console.log(userDay)

    if(userDay > currentDay) {
      setAgeDay(365 - userDay)
    }
    else {
      setAgeDay(currentDay - userDay)
    } 
  }

  return (
    <div className="app_container">
      <div className="main_container">
        <UserInput onCalculateAgeClicked={calculateAge} />
        <Output name="year" age={ageYear}/>
        <Output name="month" age={ageMonth}/>
        <Output name="day" age={ageDay}/>
      </div>
    </div>
  );
}

export default App;
