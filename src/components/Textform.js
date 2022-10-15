import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearScreen = () => {
    let newText = "";
    setText(newText);
  };
  // const handleCopy = () =>{
  //   var text = document.getElementById("myBox");
  //   text.Select();
  //   navigator.clipboard.writeText(text.value);
  // }
  const handleOnchange = (event) => {
    // console.log('On change');
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange} style={{backgroundColor: props.node==='dark'?'grey':'white', color: props.node==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 " onClick={handleUpclick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownclick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={clearScreen}>
          Clear screen
        </button>
        {/* <button classNameName="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button> */}
        <button
          className="btn btn-primary mx-2"
          onClick={handleExtraSpaces}
        >
          Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something inside the textbox to preview it here"}</p>
      </div>
    </>
  );
}
