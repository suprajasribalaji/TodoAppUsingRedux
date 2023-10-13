import React from "react";
import {Link} from 'react-router-dom';
//import { useParams } from "react-router-dom";

const About = () => {
    return(
        <div className="about-app">
            <div className="about-h-c">
                <div className="about-heading">
                    <h3 className="abt-head">ABOUT THE APP</h3>
                    <button className="btn btn-outline-dark abt-back"><Link className="back-button" to="/">Homepage</Link></button>
                </div>           
                <div className="about-content">
                    <span>
                        <ul>
                            <li>"To-Do" app, is a simple software application or web application designed to help individuals or teams keep track of tasks and manage their daily activities.</li>
                            <li>A user can add the task and the description of the task.</li>
                            <li>The task is stored in local storage. So, the task will be there even if you close the browser.</li>
                            <li>But the cache is cleared then the stored task will be deleted.</li>
                            <li>If the user opens in another browser then the task will not be there.</li>
                        </ul> 
                    </span>
                </div>
            </div>
        </div>
    );
}

export default About;

/*

const {idn} = useParams();
<h5>User {idn} viewing the about page</h5>

*/