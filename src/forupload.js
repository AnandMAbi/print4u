import React from "react";
import NavBar from "./nav";

function UploadForm (props) {
    return (
        <div>
            <NavBar title='Upload' />
            <input type="file" name="file" id="file" />
            <button value="Submit" className="primary-btn" />
        </div>
    );
}