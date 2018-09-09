import React, {Component} from 'react'
import './person.css'


class Person extends Component {
    render () {
        return (
            <div className="Person">
                <div className="wrapper">
                    <p>I'm a {this.props.name} and I'm {this.props.age}</p>
                    <button className="del" onClick={this.props.click}>Delete</button>
                    {/* <p>{props.children}</p> */}
                </div>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        )
    }
}

export default Person;
