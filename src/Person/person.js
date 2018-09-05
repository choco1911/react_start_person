import React from 'react'
import './person.css'


const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age}</p>
            {/* <p>{props.children}</p> */}
        </div>
    )
}


export default person;
