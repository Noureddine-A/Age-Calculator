import React from "react";
import { useState, useRef } from "react";

import "./UserInput.css";

const UserInput = ({ onCalculateAgeClicked }) => {
  const dayInput = useRef('');
  const monthInput = useRef('');
  const yearInput = useRef('');

  const [userInput, setUserInput] = useState({
    day: undefined,
    month: undefined,
    year: undefined,
  });

  const [didEdit, setDidEdit] = useState({
    day: false,
    month: false,
    year: false,
  });

  const dayIsInvalid = didEdit.day && dayInput.current.value === "";
  const dayInputIsInvalid = dayInput.current.value > 31;

  const monthIsInvalid = didEdit.month && monthInput.current.value === "";
  const monthInputIsInvalid = monthInput.current.value > 12;

  const yearIsInvalid = didEdit.year && yearInput.current.value === "";
  const yearInputIsInvalid = yearInput.current.value < 0;

  const disable = dayIsInvalid || dayInputIsInvalid || monthIsInvalid || monthInputIsInvalid || yearIsInvalid || yearInputIsInvalid;

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  function handleClick() {
    onCalculateAgeClicked(
      dayInput.current.value,
      monthInput.current.value,
      yearInput.current.value
    );
  }

  return (
    <div className="userinput_container">
      <div className="userinput-fields">
        <div className="userinput-day">
          {dayIsInvalid || dayInputIsInvalid ? (
            <label className="error">DAY</label>
          ) : (
            <label>DAY</label>
          )}
          <input
            className="error-input"
            ref={dayInput}
            placeholder="DD"
            onBlur={() => handleInputBlur("day")}
          ></input>
          {dayIsInvalid && <p>This field is required</p>}
          {dayInputIsInvalid && <p>Must be a valid day</p>}
        </div>

        <div className="userinput-month">
        {monthIsInvalid || monthInputIsInvalid ? (
            <label className="error">MONTH</label>
          ) : (
            <label>MONTH</label>
          )}
          <input ref={monthInput} placeholder="MM" onBlur={() => handleInputBlur('month')}></input>
          {monthIsInvalid && <p>This field is required</p>}
          {monthInputIsInvalid && <p>Must be a valid month</p>}
        </div>
        <div className="userinput-year">
        {yearIsInvalid || yearInputIsInvalid ? (
            <label className="error">YEAR</label>
          ) : (
            <label>YEAR</label>
          )}
          <input ref={yearInput} placeholder="YYYY" onBlur={() => handleInputBlur('year')}></input>
          {yearIsInvalid && <p>This field is required</p>}
          {yearInputIsInvalid && <p>Must be a valid year</p>}
        </div>
      </div>
      <div className="userinput-button">
        <button 
        disabled={disable}
        onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default UserInput;
