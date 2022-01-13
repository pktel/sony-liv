import React from 'react'
import { Link } from 'react-router-dom'

import Error from '../../Assets/Images/error.png'

export default function NotFound() {
    return (

        <div className="container">
            <center>
            <h2 style={{ paddingTop: "80px", color: '#555' }}>Page Not Found</h2>
            <img src={Error} alt={"LOGO"} />
            <br></br>
            <a href="/">
                <button className="btn btn-primary ">Back to Home</button>
            </a>
            </center>

        </div>

    )
}
