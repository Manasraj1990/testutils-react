import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TestForm(props) {
    const [text, setText] = useState("");
    // const [showText, setShowText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpOnClick = () => {
        if (text) {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Text converted in uppercase", "success");
        }
    }
    const handleLwOnClick = () => {
        if (text) {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Text converted in lowcaseer", "success");
        }
    }
    const handleResetOnClick = () => {
        if (text) {
            setText("");
            props.showAlert("Reset Text field", "success");
        }
    }
    const handleCopyOnClick = () => {
        if (text) {
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied", "success");
        }
    }
    const handleExSpacesOnClick = () => {
        if (text) {
            let finalText = text.replace(/\s+/g, ' ').trim();
            setText(finalText);
            props.showAlert("Extra spaces removed", "success");
        }
    }
    return (
        <>
            <div className="mb-3">
                <h2>{props.formTitle}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Type your words.............." id="text" rows="8" style={{ backgroundColor: props.mode === "dark" ? "#010825" : "white", color: props.mode === "dark" ? "white" : "black" }}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpOnClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLwOnClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleExSpacesOnClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyOnClick}>Copy Text</button>
            <button className="btn btn-danger mx-1" onClick={handleResetOnClick} >Reset</button>
            <div className='mt-3'>
                <h4>Text summary:</h4>
                <p> {text !== "" ? text.split(" ").length : 0} Words and {text.length} Characters</p>
                <p> {text !== "" ? (0.008 * text.split(" ").length).toFixed(3) : 0} Minutes to Read</p>

                <h4>Preview:</h4>
                <p>{text}</p>
            </div>
        </>
    )
}

TestForm.propTypes = {
    formTitle: PropTypes.string.isRequired,

}