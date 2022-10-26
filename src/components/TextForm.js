import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText); 
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleJumble = ()=>{
        let newString = '';
        let asciiNum = 0;
        for (var i=0; i < text.length; i++) {
            asciiNum = text.charCodeAt(i);
            asciiNum += 3;
            newString += String.fromCharCode(asciiNum);
        }
        setText(newString);
    }

    const [text, setText] = useState('');    // Defining state with name text, setText funciton to update text state and initial value inside useState()
  
    return (
        <>
        <div> 
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleJumble}>Jumble Text</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} and {text.length}</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
