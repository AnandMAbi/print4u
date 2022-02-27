import React from "react";
import NavBar from "./nav";
import './forprint.css';

function UploadForm (props) {
    return (
        <div>
            <NavBar title='Upload' />
            <input type="file" name="file" id="file" />
            <input type="Submit" className="primary-btn" />
        </div>
    );
}