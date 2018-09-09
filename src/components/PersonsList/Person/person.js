import React, {Component} from 'react'
import './person.css'


class Person extends Component {
    constructor(props) {
        super(props)
        console.log('[Person.js] Inside Constructor', props)
    }

    componentWillMount () {
        console.log('[Person.js] Inside componentWillMount')
    }

    componentDidMount () {
        console.log('[Person.js] Inside componentDidMount')
    }

    render () {
        console.log('[Person.js] Inside Render Method')
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
