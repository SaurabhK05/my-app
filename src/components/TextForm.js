import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const toUpperText = () => {
    let upperText = text.toUpperCase();
    settext(upperText);
  };

  const handleOnchange = (event) => {
    settext(event.target.value);
  };

  const toLowerText = () => {
    let lowerText = text.toLowerCase();
    settext(lowerText);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          id="mybox"
          rows="8"
          className="form-control my-3"
          value={text}
          onChange={handleOnchange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={toUpperText}>
        To UpperCase
      </button>
      <button className="btn btn-primary mx-3" onClick={toLowerText}>
        To LowerCase
      </button>
    </div>
  );
}
