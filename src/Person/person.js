import React from 'react'
import './person.css'


const person = () => {
    return (
        <div>
            <p>I'm a person and I'm {Math.floor(Math.random() * 30)}</p>
            <p>I'm a person and I'm {Math.floor(Math.random() * 30)}</p>
            <p>I'm a person and I'm {Math.floor(Math.random() * 30)}</p>
        </div>
    )
}


export default person;
