import React from "react";
import NavBar from "./nav";
import {Link} from 'react-router-dom';

function UploadForm (props) {
    return (
        <div>
            <NavBar title='Upload' />
            <input type="file" name="file" id="file" />
            <Link to= '/'>
                <button value="Submit" className="primary-btn" />
            </Link>
        </div>
    );
}

export default UploadForm;