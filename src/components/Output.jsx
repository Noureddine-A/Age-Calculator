import React, { Fragment } from "react";
import "./Output.css";

const Output = ({ name, age }) => {
  let date = "";

  if (name === "year") {
    date = "years";
  } else if (name === "month") {
    date = "months";
  } else if (name === "day") {
    date = "days";
  }

  return (
    <div className="output_container">
      <div className="output_years">
        {age === undefined ? (
          <Fragment>
            <div className="output_years_number-1" />
            <div className="output_years_number-2" />
            <h1>{date}</h1>
          </Fragment>
        ) : (
          <Fragment>
            <p>{age}</p>
            <h1>{date}</h1>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Output;
