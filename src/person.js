import React from 'react'

function Person(props) {
    return (
        <div className="person">
            <h3>{props.name}</h3>
            <p>Your Age: {props.age}</p>
        </div>
    )
}

let app = (
    <div>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" />
        <Person name="Lilu" age="25" />
    </div>
)

export {app};
