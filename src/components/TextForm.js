import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to Upper Case", "success");  // success should be in lower case otherwise green color won't appear
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleClear = ()=>{
        setText('');
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = ()=> {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied", "success");
    }

    const handleExtraSpaces = ()=> {
        let textWordArray = text.split(/[ ]+/);
        setText(textWordArray.join(" "));
        props.showAlert("Extra spaces removed", "success");
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
        props.showAlert("String jumbled", "success");
    }

    const wordCount = (word)=> {
        const textSplitArray = word.split(" ");
        let length = 0;
        for (let i = 0; i < textSplitArray.length; i++) {
            length ++;
            if (textSplitArray[i] === '') {
                length -= 1;
            }
        }
        return length;
    }

    const [text, setText] = useState('');    // Defining state with name text, setText funciton to update text state and initial value inside useState()
  
    return (
        <>
        <div className = "container" style={{color: props.mode==='light'?'black':'white'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style = {{backgroundColor: props.mode==='light'?'white':'grey'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleJumble}>Jumble Text</button>
            <button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{wordCount(text)} and {text.length}</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text===''?'Enter text in the above box to preview': text}</p>
        </div>
        </>
    )
}
