import React from 'react'
import './Cockpit.css'


const cockpit = (props) => {
    const style = {
        backgroundColor: 'greenyellow',
        color: 'blue'
    }

    if (props.showPersons) {
        style.backgroundColor = 'red'
    }

    // start - it's a selector name
    let  classes = ['start']
    if (props.persons.length <= 2) {
        classes.push('red')
    }

    if (props.persons.length <= 1) {
        classes.push('bold')
    }

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                style = {style}
                className="toggle" onClick={props.toggle}>
                {props.showPersons ? "Close" : "Open"}
            </button>
        </div>

    )
}

export default cockpit
