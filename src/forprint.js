import React from "react";
import NavBar from "./nav";
import './forprint.css';

function Print () {
    return (
        <div>
            <NavBar title='Print' />
            <div className="fields">
                <input type="text" placeholder="No. of copies" id="copies"/>
                <div className="color">
                    <input type="radio" name="prntpref" id="color" value="Color"/>
                    <label htmlFor="Color">Color</label>
                </div>
                <div className="grayscale">
                    <input type="radio" name="prntpref" id="grayscale" value="Grayscale"/>
                    <label htmlFor="Grayscale">Grayscale</label>
                </div>
                <input type="file" name="file" id="file" />
            </div>
            <input type="submit" value="Submit" className="primary-btn" />
        </div>
    );
}

export default Print;