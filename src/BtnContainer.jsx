import React, { useState } from "react";

function BtnContainer({ jobs, onSetValue }) {
  const [value, setValue] = useState(0);

  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              onSetValue(index, setValue(index));
            }}
            className={`job-btn  ${index === value && "active-btn"}`}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;
