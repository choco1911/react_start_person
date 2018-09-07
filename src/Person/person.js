import React from 'react'
import './person.css'


const person = (props) => {
    const rnd = Math.random()
    if ( rnd > 0.7) {
        throw new Error('Something went wrong')
    }
    
    return (
        <div className="Person">
            <div className="wrapper">
                <p>I'm a {props.name} and I'm {props.age}</p>
                <button className="del" onClick={props.click}>Delete</button>
                {/* <p>{props.children}</p> */}
            </div>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}


export default person;
