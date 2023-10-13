import React from "react";

import { Link } from "react-router-dom";

import Form from "./taskForm";

const Todo = () => {
    return(
        <div>
            <div className="todo">
            <div id ='app-header'>
                <h2>Lists To Do</h2>
                <button className="btn btn-outline-dark about-page"><Link className="link-about" to="/about">About</Link></button>
            </div>
            <div className='breakpoint'>
                <hr className='hori-line'/>
            </div>
        </div>
        <Form/>
        </div>
    );
}

export default Todo;