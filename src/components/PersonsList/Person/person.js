import React, {Component} from 'react'
import './person.css'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'


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
            <Aux>
                <div className="wrapper">
                    <p>I'm a {this.props.name} and I'm {this.props.age}</p>
                    <button className="del" onClick={this.props.click}>Delete</button>
                    {/* <p>{props.children}</p> */}
                </div>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </Aux>
        )
//        console.log('[Person.js] Inside this.props.children', this.props.children) // undefined
//        return [
//                <p key="1">I'm a {this.props.name} and I'm {this.props.age}</p>,
//                <p key="2">{this.props.children}</p>,
//                <button key="3" className="del" onClick={this.props.click}>Delete</button>,
//                <input key="4" type="text" onChange={this.props.change} value={this.props.name} />
//        ]
    }
}

export default withClass(Person, "Person")
